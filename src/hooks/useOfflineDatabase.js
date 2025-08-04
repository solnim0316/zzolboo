import { useState, useEffect, useCallback } from 'react';
import { offlineDB, offlineDBUtils } from '../utils/offlineDatabase';

/**
 * 🗄️ 오프라인 데이터베이스 관리 훅
 * - 테스트 결과 저장/조회
 * - 진행 상태 관리
 * - 사용자 설정 관리
 */
export function useOfflineDatabase() {
  const [isReady, setIsReady] = useState(false);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  // 데이터베이스 초기화
  useEffect(() => {
    const initDB = async () => {
      try {
        await offlineDB.init();
        setIsReady(true);
        
        // 초기 통계 로드
        const initialStats = await offlineDB.getDatabaseStats();
        setStats(initialStats);
      } catch (err) {
        console.error('❌ 오프라인 데이터베이스 초기화 실패:', err);
        setError(err);
      }
    };

    initDB();
  }, []);

  // 테스트 결과 저장
  const saveTestResult = useCallback(async (testData) => {
    if (!isReady) {
      throw new Error('데이터베이스가 준비되지 않았습니다.');
    }

    try {
      const result = await offlineDB.saveTestResult(testData);
      
      // 통계 업데이트
      const newStats = await offlineDB.getDatabaseStats();
      setStats(newStats);
      
      return result;
    } catch (err) {
      console.error('❌ 테스트 결과 저장 실패:', err);
      setError(err);
      throw err;
    }
  }, [isReady]);

  // 테스트 결과 조회
  const getTestResults = useCallback(async (options = {}) => {
    if (!isReady) {
      throw new Error('데이터베이스가 준비되지 않았습니다.');
    }

    try {
      return await offlineDB.getTestResults(options);
    } catch (err) {
      console.error('❌ 테스트 결과 조회 실패:', err);
      setError(err);
      throw err;
    }
  }, [isReady]);

  // 테스트 진행 상태 저장
  const saveTestProgress = useCallback(async (progressData) => {
    if (!isReady) {
      throw new Error('데이터베이스가 준비되지 않았습니다.');
    }

    try {
      return await offlineDB.saveTestProgress(progressData);
    } catch (err) {
      console.error('❌ 테스트 진행 상태 저장 실패:', err);
      setError(err);
      throw err;
    }
  }, [isReady]);

  // 테스트 진행 상태 조회
  const getTestProgress = useCallback(async (testId, userId = 'anonymous') => {
    if (!isReady) {
      throw new Error('데이터베이스가 준비되지 않았습니다.');
    }

    try {
      return await offlineDB.getTestProgress(testId, userId);
    } catch (err) {
      console.error('❌ 테스트 진행 상태 조회 실패:', err);
      setError(err);
      throw err;
    }
  }, [isReady]);

  // 사용자 설정 저장
  const saveUserPreference = useCallback(async (key, value) => {
    if (!isReady) {
      throw new Error('데이터베이스가 준비되지 않았습니다.');
    }

    try {
      return await offlineDB.saveUserPreference(key, value);
    } catch (err) {
      console.error('❌ 사용자 설정 저장 실패:', err);
      setError(err);
      throw err;
    }
  }, [isReady]);

  // 사용자 설정 조회
  const getUserPreference = useCallback(async (key) => {
    if (!isReady) {
      throw new Error('데이터베이스가 준비되지 않았습니다.');
    }

    try {
      return await offlineDB.getUserPreference(key);
    } catch (err) {
      console.error('❌ 사용자 설정 조회 실패:', err);
      setError(err);
      throw err;
    }
  }, [isReady]);

  // 오프라인 액션 저장
  const saveOfflineAction = useCallback(async (action) => {
    if (!isReady) {
      throw new Error('데이터베이스가 준비되지 않았습니다.');
    }

    try {
      return await offlineDB.saveOfflineAction(action);
    } catch (err) {
      console.error('❌ 오프라인 액션 저장 실패:', err);
      setError(err);
      throw err;
    }
  }, [isReady]);

  // 동기화되지 않은 액션 조회
  const getUnsyncedActions = useCallback(async () => {
    if (!isReady) {
      throw new Error('데이터베이스가 준비되지 않았습니다.');
    }

    try {
      return await offlineDB.getUnsyncedActions();
    } catch (err) {
      console.error('❌ 동기화되지 않은 액션 조회 실패:', err);
      setError(err);
      throw err;
    }
  }, [isReady]);

  // 액션 동기화 완료 표시
  const markActionAsSynced = useCallback(async (actionId) => {
    if (!isReady) {
      throw new Error('데이터베이스가 준비되지 않았습니다.');
    }

    try {
      return await offlineDB.markActionAsSynced(actionId);
    } catch (err) {
      console.error('❌ 액션 동기화 표시 실패:', err);
      setError(err);
      throw err;
    }
  }, [isReady]);

  // 데이터베이스 정리
  const cleanupOldData = useCallback(async (options = {}) => {
    if (!isReady) {
      throw new Error('데이터베이스가 준비되지 않았습니다.');
    }

    try {
      const deletedCount = await offlineDB.cleanupOldData(options);
      
      // 통계 업데이트
      const newStats = await offlineDB.getDatabaseStats();
      setStats(newStats);
      
      return deletedCount;
    } catch (err) {
      console.error('❌ 데이터베이스 정리 실패:', err);
      setError(err);
      throw err;
    }
  }, [isReady]);

  // 데이터베이스 백업
  const exportData = useCallback(async () => {
    if (!isReady) {
      throw new Error('데이터베이스가 준비되지 않았습니다.');
    }

    try {
      return await offlineDB.exportData();
    } catch (err) {
      console.error('❌ 데이터베이스 백업 실패:', err);
      setError(err);
      throw err;
    }
  }, [isReady]);

  // 데이터베이스 복원
  const importData = useCallback(async (backup) => {
    if (!isReady) {
      throw new Error('데이터베이스가 준비되지 않았습니다.');
    }

    try {
      await offlineDB.importData(backup);
      
      // 통계 업데이트
      const newStats = await offlineDB.getDatabaseStats();
      setStats(newStats);
    } catch (err) {
      console.error('❌ 데이터베이스 복원 실패:', err);
      setError(err);
      throw err;
    }
  }, [isReady]);

  // 통계 새로고침
  const refreshStats = useCallback(async () => {
    if (!isReady) return;

    try {
      const newStats = await offlineDB.getDatabaseStats();
      setStats(newStats);
    } catch (err) {
      console.error('❌ 통계 새로고침 실패:', err);
      setError(err);
    }
  }, [isReady]);

  return {
    isReady,
    stats,
    error,
    saveTestResult,
    getTestResults,
    saveTestProgress,
    getTestProgress,
    saveUserPreference,
    getUserPreference,
    saveOfflineAction,
    getUnsyncedActions,
    markActionAsSynced,
    cleanupOldData,
    exportData,
    importData,
    refreshStats
  };
}

/**
 * 📊 테스트 결과 관리 전용 훅
 */
export function useTestResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { isReady, getTestResults, saveTestResult } = useOfflineDatabase();

  // 최근 결과 로드
  const loadRecentResults = useCallback(async (limit = 10) => {
    if (!isReady) return;

    setLoading(true);
    setError(null);

    try {
      const recentResults = await getTestResults({
        sortBy: 'timestamp',
        limit
      });
      setResults(recentResults);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [isReady, getTestResults]);

  // 특정 테스트 결과 로드
  const loadTestHistory = useCallback(async (testId) => {
    if (!isReady) return;

    setLoading(true);
    setError(null);

    try {
      const testResults = await getTestResults({ testId });
      setResults(testResults);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [isReady, getTestResults]);

  // 결과 저장
  const saveResult = useCallback(async (testData) => {
    if (!isReady) return;

    try {
      const result = await saveTestResult(testData);
      
      // 결과 목록에 추가
      setResults(prev => [result, ...prev]);
      
      return result;
    } catch (err) {
      setError(err);
      throw err;
    }
  }, [isReady, saveTestResult]);

  // 결과 삭제
  const deleteResult = useCallback(async (resultId) => {
    if (!isReady) return;

    try {
      // TODO: 삭제 기능 구현
      setResults(prev => prev.filter(result => result.id !== resultId));
    } catch (err) {
      setError(err);
    }
  }, [isReady]);

  return {
    results,
    loading,
    error,
    loadRecentResults,
    loadTestHistory,
    saveResult,
    deleteResult
  };
}

/**
 * 📈 테스트 진행 상태 관리 훅
 */
export function useTestProgress(testId) {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { isReady, getTestProgress, saveTestProgress } = useOfflineDatabase();

  // 진행 상태 로드
  const loadProgress = useCallback(async () => {
    if (!isReady || !testId) return;

    setLoading(true);
    setError(null);

    try {
      const savedProgress = await getTestProgress(testId);
      setProgress(savedProgress);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [isReady, testId, getTestProgress]);

  // 진행 상태 저장
  const saveProgress = useCallback(async (progressData) => {
    if (!isReady || !testId) return;

    try {
      const savedProgress = await saveTestProgress({
        testId,
        ...progressData
      });
      setProgress(savedProgress);
      return savedProgress;
    } catch (err) {
      setError(err);
      throw err;
    }
  }, [isReady, testId, saveTestProgress]);

  // 진행 상태 초기화
  const resetProgress = useCallback(async () => {
    if (!isReady || !testId) return;

    try {
      await saveTestProgress({
        testId,
        currentQuestion: 0,
        answers: [],
        startTime: Date.now(),
        isCompleted: false
      });
      setProgress(null);
    } catch (err) {
      setError(err);
    }
  }, [isReady, testId, saveTestProgress]);

  // 진행 상태 완료 표시
  const completeProgress = useCallback(async () => {
    if (!isReady || !testId) return;

    try {
      const completedProgress = await saveTestProgress({
        testId,
        isCompleted: true,
        lastUpdated: Date.now()
      });
      setProgress(completedProgress);
      return completedProgress;
    } catch (err) {
      setError(err);
      throw err;
    }
  }, [isReady, testId, saveTestProgress]);

  // 컴포넌트 마운트 시 진행 상태 로드
  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  return {
    progress,
    loading,
    error,
    loadProgress,
    saveProgress,
    resetProgress,
    completeProgress
  };
}

/**
 * ⚙️ 사용자 설정 관리 훅
 */
export function useUserPreferences() {
  const [preferences, setPreferences] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { isReady, getUserPreference, saveUserPreference } = useOfflineDatabase();

  // 설정 로드
  const loadPreference = useCallback(async (key) => {
    if (!isReady) return;

    setLoading(true);
    setError(null);

    try {
      const value = await getUserPreference(key);
      setPreferences(prev => ({ ...prev, [key]: value }));
      return value;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [isReady, getUserPreference]);

  // 설정 저장
  const savePreference = useCallback(async (key, value) => {
    if (!isReady) return;

    try {
      await saveUserPreference(key, value);
      setPreferences(prev => ({ ...prev, [key]: value }));
    } catch (err) {
      setError(err);
      throw err;
    }
  }, [isReady, saveUserPreference]);

  // 여러 설정 한번에 로드
  const loadMultiplePreferences = useCallback(async (keys) => {
    if (!isReady) return;

    setLoading(true);
    setError(null);

    try {
      const promises = keys.map(key => getUserPreference(key));
      const values = await Promise.all(promises);
      
      const newPreferences = {};
      keys.forEach((key, index) => {
        newPreferences[key] = values[index];
      });
      
      setPreferences(prev => ({ ...prev, ...newPreferences }));
      return newPreferences;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [isReady, getUserPreference]);

  return {
    preferences,
    loading,
    error,
    loadPreference,
    savePreference,
    loadMultiplePreferences
  };
} 