import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { viteSitemapPlugin } from './plugins/viteSitemapPlugin.js'

export default defineConfig({
  plugins: [
    react(),
    viteSitemapPlugin({
      enableInDev: true,
      autoRebuild: true,
      logLevel: 'info'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: false
  },
  build: {
    rollupOptions: {
      output: {
        // 🚀 코드 스플리팅 최적화
        manualChunks: {
          // React 관련 라이브러리들을 별도 청크로 분리
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // 테스트 관련 페이지들을 그룹화
          'test-pages': [
            './src/pages/DinosaurTest.jsx',
            './src/pages/CatTest.jsx',
            './src/pages/FoodTest.jsx',
            './src/pages/FashionTest.jsx',
            './src/pages/MovieTest.jsx',
            './src/pages/ColorTest.jsx'
          ],
          // Bro 페이지들을 그룹화
          'bro-pages': [
            './src/pages/bro/LolTest.jsx',
            './src/pages/bro/BitcoinTest.jsx',
            './src/pages/bro/BroHome.jsx'
          ],
          // 유틸리티 함수들을 그룹화
          'utils': [
            './src/utils/shareUtils.js',
            './src/utils/kakao.js',
            './src/utils/testUtils.js'
          ]
        },
        // 청크 파일명 최적화
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      }
    },
    // 청크 크기 경고 임계값 조정
    chunkSizeWarningLimit: 1000,
    // 소스맵 생성 (개발 시에만)
    sourcemap: false
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development')
  },
  // 🎯 최적화 옵션
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
