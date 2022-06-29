import path from 'path'
import vue from '@vitejs/plugin-vue2'
import { defineConfig } from 'vitest/config'
import VitePluginHtmlEnv from 'vite-plugin-html-env'

// const API_URL = import.meta.env.VITE_APP_API_URL
const defaultConfig = {
  plugins: [
    vue(),
    VitePluginHtmlEnv(),
  ],
  test: {
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'node_modules'),
    },
  },
}

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      ...defaultConfig,
      // server: {
      //   https: {
      //     key: fs.readFileSync('./ssl/localhost-key.pem'),
      //     cert: fs.readFileSync('./ssl/localhost.pem')
      //   },
      // },
      // proxy: {
      //   '/api': {
      //     target: API_URL,
      //     changeOrigin: true,
      //     secure: true,
      //     rewrite: path => path.replace(/^\/api/, ''),
      //   },
      // },
    }
  }
  else {
    return {
      ...defaultConfig,
    }
  }
})
