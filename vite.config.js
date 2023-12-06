import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ]
  },

  css: [
    '@/assets/style/style.css'
  ],

  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  components: true,

  router: {
    middleware: ['auth']
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.API_ADDRESS
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_ADDRESS
    }
  },

  auth: {
    strategies: {
      local: {
        token: {
          required: true,
          type: 'Bearer',
          property: 'token'
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: process.env.API_ADDRESS + '/login', method: 'POST' },
          logout: { url: process.env.API_ADDRESS + '/logout', method: 'GET' },
          user: { url: process.env.API_ADDRESS + '/me', method: 'GET', propertyName: false }
        }
      }
    },
    redirect: {
      login: '/auth/login',
      logout: '/auth/logout',
      callback: '/home',
      home: '/',
    }
  },

  axios: {
    baseURL: process.env.API_ADDRESS,
  },

  build: {
    postcss: null
  }
})
