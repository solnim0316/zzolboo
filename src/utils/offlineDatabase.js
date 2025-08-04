// 🗄️ 쫄부월드 오프라인 데이터베이스 관리자
// IndexedDB를 사용하여 테스트 결과, 사용자 데이터, 캐시 정보를 로컬에 저장

const DB_NAME = 'zzolboo-offline-db';
const DB_VERSION = 1;

// 데이터베이스 스키마 정의
const STORES = {
  TEST_RESULTS: 'test-results',
  USER_PREFERENCES: 'user-preferences',
  CACHE_METADATA: 'cache-metadata',
  OFFLINE_ACTIONS: 'offline-actions',
  TEST_PROGRESS: 'test-progress'
};

/**
 * 🚀 데이터베이스 초기화 및 연결
 */
export class OfflineDatabase {
  constructor() {
    this.db = null;
    this.isInitialized = false;
  }

  /**
   * 데이터베이스 초기화
   */
  async init() {
    if (this.isInitialized) {
      return this.db;
    }

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => {
        console.error('❌ IndexedDB 열기 실패:', request.error);
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        this.isInitialized = true;
        console.log('✅ IndexedDB 초기화 완료');
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        console.log('🔄 IndexedDB 스키마 업그레이드 중...');

        // 테스트 결과 저장소
        if (!db.objectStoreNames.contains(STORES.TEST_RESULTS)) {
          const testResultsStore = db.createObjectStore(STORES.TEST_RESULTS, { 
            keyPath: 'id', 
            autoIncrement: true 
          });
          testResultsStore.createIndex('testId', 'testId', { unique: false });
          testResultsStore.createIndex('timestamp', 'timestamp', { unique: false });
          testResultsStore.createIndex('userId', 'userId', { unique: false });
          console.log('📊 테스트 결과 저장소 생성');
        }

        // 사용자 설정 저장소
        if (!db.objectStoreNames.contains(STORES.USER_PREFERENCES)) {
          const userPrefsStore = db.createObjectStore(STORES.USER_PREFERENCES, { 
            keyPath: 'key' 
          });
          console.log('⚙️ 사용자 설정 저장소 생성');
        }

        // 캐시 메타데이터 저장소
        if (!db.objectStoreNames.contains(STORES.CACHE_METADATA)) {
          const cacheStore = db.createObjectStore(STORES.CACHE_METADATA, { 
            keyPath: 'url' 
          });
          cacheStore.createIndex('lastAccessed', 'lastAccessed', { unique: false });
          console.log('📦 캐시 메타데이터 저장소 생성');
        }

        // 오프라인 액션 저장소
        if (!db.objectStoreNames.contains(STORES.OFFLINE_ACTIONS)) {
          const actionsStore = db.createObjectStore(STORES.OFFLINE_ACTIONS, { 
            keyPath: 'id', 
            autoIncrement: true 
          });
          actionsStore.createIndex('type', 'type', { unique: false });
          actionsStore.createIndex('timestamp', 'timestamp', { unique: false });
          console.log('🔄 오프라인 액션 저장소 생성');
        }

        // 테스트 진행 상태 저장소
        if (!db.objectStoreNames.contains(STORES.TEST_PROGRESS)) {
          const progressStore = db.createObjectStore(STORES.TEST_PROGRESS, { 
            keyPath: 'testId' 
          });
          progressStore.createIndex('userId', 'userId', { unique: false });
          progressStore.createIndex('lastUpdated', 'lastUpdated', { unique: false });
          console.log('📈 테스트 진행 상태 저장소 생성');
        }
      };
    });
  }

  /**
   * 테스트 결과 저장
   */
  async saveTestResult(testData) {
    await this.init();
    
    const transaction = this.db.transaction([STORES.TEST_RESULTS], 'readwrite');
    const store = transaction.objectStore(STORES.TEST_RESULTS);

    const testResult = {
      testId: testData.testId,
      testName: testData.testName,
      result: testData.result,
      answers: testData.answers,
      score: testData.score,
      timestamp: Date.now(),
      userId: testData.userId || 'anonymous',
      deviceInfo: {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language
      },
      isSynced: false
    };

    return new Promise((resolve, reject) => {
      const request = store.add(testResult);
      
      request.onsuccess = () => {
        console.log('💾 테스트 결과 저장 완료:', testResult.testId);
        resolve(request.result);
      };
      
      request.onerror = () => {
        console.error('❌ 테스트 결과 저장 실패:', request.error);
        reject(request.error);
      };
    });
  }

  /**
   * 테스트 결과 조회
   */
  async getTestResults(options = {}) {
    await this.init();
    
    const transaction = this.db.transaction([STORES.TEST_RESULTS], 'readonly');
    const store = transaction.objectStore(STORES.TEST_RESULTS);

    return new Promise((resolve, reject) => {
      let request;
      
      if (options.testId) {
        const index = store.index('testId');
        request = index.getAll(options.testId);
      } else if (options.userId) {
        const index = store.index('userId');
        request = index.getAll(options.userId);
      } else {
        request = store.getAll();
      }

      request.onsuccess = () => {
        let results = request.result;
        
        // 정렬
        if (options.sortBy === 'timestamp') {
          results.sort((a, b) => b.timestamp - a.timestamp);
        }
        
        // 필터링
        if (options.limit) {
          results = results.slice(0, options.limit);
        }

        resolve(results);
      };
      
      request.onerror = () => {
        console.error('❌ 테스트 결과 조회 실패:', request.error);
        reject(request.error);
      };
    });
  }

  /**
   * 테스트 진행 상태 저장
   */
  async saveTestProgress(progressData) {
    await this.init();
    
    const transaction = this.db.transaction([STORES.TEST_PROGRESS], 'readwrite');
    const store = transaction.objectStore(STORES.TEST_PROGRESS);

    const progress = {
      testId: progressData.testId,
      userId: progressData.userId || 'anonymous',
      currentQuestion: progressData.currentQuestion,
      answers: progressData.answers,
      startTime: progressData.startTime,
      lastUpdated: Date.now(),
      isCompleted: progressData.isCompleted || false
    };

    return new Promise((resolve, reject) => {
      const request = store.put(progress);
      
      request.onsuccess = () => {
        console.log('📈 테스트 진행 상태 저장 완료:', progress.testId);
        resolve(request.result);
      };
      
      request.onerror = () => {
        console.error('❌ 테스트 진행 상태 저장 실패:', request.error);
        reject(request.error);
      };
    });
  }

  /**
   * 테스트 진행 상태 조회
   */
  async getTestProgress(testId, userId = 'anonymous') {
    await this.init();
    
    const transaction = this.db.transaction([STORES.TEST_PROGRESS], 'readonly');
    const store = transaction.objectStore(STORES.TEST_PROGRESS);

    return new Promise((resolve, reject) => {
      const request = store.get(testId);
      
      request.onsuccess = () => {
        const progress = request.result;
        if (progress && progress.userId === userId) {
          resolve(progress);
        } else {
          resolve(null);
        }
      };
      
      request.onerror = () => {
        console.error('❌ 테스트 진행 상태 조회 실패:', request.error);
        reject(request.error);
      };
    });
  }

  /**
   * 사용자 설정 저장
   */
  async saveUserPreference(key, value) {
    await this.init();
    
    const transaction = this.db.transaction([STORES.USER_PREFERENCES], 'readwrite');
    const store = transaction.objectStore(STORES.USER_PREFERENCES);

    const preference = {
      key,
      value,
      timestamp: Date.now()
    };

    return new Promise((resolve, reject) => {
      const request = store.put(preference);
      
      request.onsuccess = () => {
        console.log('⚙️ 사용자 설정 저장 완료:', key);
        resolve(request.result);
      };
      
      request.onerror = () => {
        console.error('❌ 사용자 설정 저장 실패:', request.error);
        reject(request.error);
      };
    });
  }

  /**
   * 사용자 설정 조회
   */
  async getUserPreference(key) {
    await this.init();
    
    const transaction = this.db.transaction([STORES.USER_PREFERENCES], 'readonly');
    const store = transaction.objectStore(STORES.USER_PREFERENCES);

    return new Promise((resolve, reject) => {
      const request = store.get(key);
      
      request.onsuccess = () => {
        resolve(request.result ? request.result.value : null);
      };
      
      request.onerror = () => {
        console.error('❌ 사용자 설정 조회 실패:', request.error);
        reject(request.error);
      };
    });
  }

  /**
   * 오프라인 액션 저장 (동기화용)
   */
  async saveOfflineAction(action) {
    await this.init();
    
    const transaction = this.db.transaction([STORES.OFFLINE_ACTIONS], 'readwrite');
    const store = transaction.objectStore(STORES.OFFLINE_ACTIONS);

    const offlineAction = {
      type: action.type,
      data: action.data,
      timestamp: Date.now(),
      isSynced: false,
      retryCount: 0
    };

    return new Promise((resolve, reject) => {
      const request = store.add(offlineAction);
      
      request.onsuccess = () => {
        console.log('🔄 오프라인 액션 저장 완료:', action.type);
        resolve(request.result);
      };
      
      request.onerror = () => {
        console.error('❌ 오프라인 액션 저장 실패:', request.error);
        reject(request.error);
      };
    });
  }

  /**
   * 동기화되지 않은 액션 조회
   */
  async getUnsyncedActions() {
    await this.init();
    
    const transaction = this.db.transaction([STORES.OFFLINE_ACTIONS], 'readonly');
    const store = transaction.objectStore(STORES.OFFLINE_ACTIONS);

    return new Promise((resolve, reject) => {
      const request = store.getAll();
      
      request.onsuccess = () => {
        const actions = request.result.filter(action => !action.isSynced);
        resolve(actions);
      };
      
      request.onerror = () => {
        console.error('❌ 동기화되지 않은 액션 조회 실패:', request.error);
        reject(request.error);
      };
    });
  }

  /**
   * 액션 동기화 완료 표시
   */
  async markActionAsSynced(actionId) {
    await this.init();
    
    const transaction = this.db.transaction([STORES.OFFLINE_ACTIONS], 'readwrite');
    const store = transaction.objectStore(STORES.OFFLINE_ACTIONS);

    return new Promise((resolve, reject) => {
      const getRequest = store.get(actionId);
      
      getRequest.onsuccess = () => {
        const action = getRequest.result;
        if (action) {
          action.isSynced = true;
          action.syncedAt = Date.now();
          
          const updateRequest = store.put(action);
          
          updateRequest.onsuccess = () => {
            console.log('✅ 액션 동기화 완료:', actionId);
            resolve(updateRequest.result);
          };
          
          updateRequest.onerror = () => {
            console.error('❌ 액션 동기화 표시 실패:', updateRequest.error);
            reject(updateRequest.error);
          };
        } else {
          resolve(null);
        }
      };
      
      getRequest.onerror = () => {
        console.error('❌ 액션 조회 실패:', getRequest.error);
        reject(getRequest.error);
      };
    });
  }

  /**
   * 데이터베이스 통계 조회
   */
  async getDatabaseStats() {
    await this.init();
    
    const stats = {};
    
    for (const storeName of Object.values(STORES)) {
      const transaction = this.db.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      
      stats[storeName] = await new Promise((resolve, reject) => {
        const request = store.count();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    }
    
    return stats;
  }

  /**
   * 데이터베이스 정리 (오래된 데이터 삭제)
   */
  async cleanupOldData(options = {}) {
    await this.init();
    
    const { 
      maxAge = 30 * 24 * 60 * 60 * 1000, // 30일
      maxResults = 1000 
    } = options;

    const cutoffTime = Date.now() - maxAge;
    let deletedCount = 0;

    // 오래된 테스트 결과 삭제
    const testResults = await this.getTestResults();
    const oldTestResults = testResults.filter(result => result.timestamp < cutoffTime);
    
    if (oldTestResults.length > 0) {
      const transaction = this.db.transaction([STORES.TEST_RESULTS], 'readwrite');
      const store = transaction.objectStore(STORES.TEST_RESULTS);
      
      for (const result of oldTestResults) {
        store.delete(result.id);
        deletedCount++;
      }
    }

    // 오래된 오프라인 액션 삭제
    const actions = await this.getUnsyncedActions();
    const oldActions = actions.filter(action => action.timestamp < cutoffTime);
    
    if (oldActions.length > 0) {
      const transaction = this.db.transaction([STORES.OFFLINE_ACTIONS], 'readwrite');
      const store = transaction.objectStore(STORES.OFFLINE_ACTIONS);
      
      for (const action of oldActions) {
        store.delete(action.id);
        deletedCount++;
      }
    }

    console.log(`🗑️ ${deletedCount}개의 오래된 데이터 삭제 완료`);
    return deletedCount;
  }

  /**
   * 데이터베이스 백업
   */
  async exportData() {
    await this.init();
    
    const backup = {};
    
    for (const storeName of Object.values(STORES)) {
      const transaction = this.db.transaction([storeName], 'readonly');
      const store = transaction.objectStore(storeName);
      
      backup[storeName] = await new Promise((resolve, reject) => {
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    }
    
    return backup;
  }

  /**
   * 데이터베이스 복원
   */
  async importData(backup) {
    await this.init();
    
    for (const [storeName, data] of Object.entries(backup)) {
      if (Object.values(STORES).includes(storeName)) {
        const transaction = this.db.transaction([storeName], 'readwrite');
        const store = transaction.objectStore(storeName);
        
        for (const item of data) {
          store.put(item);
        }
      }
    }
    
    console.log('📥 데이터베이스 복원 완료');
  }
}

// 싱글톤 인스턴스 생성
export const offlineDB = new OfflineDatabase();

// 유틸리티 함수들
export const offlineDBUtils = {
  /**
   * 테스트 결과를 간단하게 저장
   */
  async saveResult(testId, testName, result, answers = []) {
    return await offlineDB.saveTestResult({
      testId,
      testName,
      result,
      answers,
      score: result.score || 0
    });
  },

  /**
   * 사용자의 최근 테스트 결과 조회
   */
  async getRecentResults(limit = 10) {
    return await offlineDB.getTestResults({
      sortBy: 'timestamp',
      limit
    });
  },

  /**
   * 특정 테스트의 모든 결과 조회
   */
  async getTestHistory(testId) {
    return await offlineDB.getTestResults({ testId });
  },

  /**
   * 테스트 진행 상태 저장
   */
  async saveProgress(testId, currentQuestion, answers, isCompleted = false) {
    return await offlineDB.saveTestProgress({
      testId,
      currentQuestion,
      answers,
      startTime: Date.now(),
      isCompleted
    });
  },

  /**
   * 테스트 진행 상태 복원
   */
  async restoreProgress(testId) {
    return await offlineDB.getTestProgress(testId);
  }
};

console.log('🗄️ 오프라인 데이터베이스 관리자 로드 완료'); 