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
        manualChunks: undefined
      }
    }
  },
  define: {
    __DEV__: JSON.stringify(true)
  }
})
