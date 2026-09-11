import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/tp1-potter-app/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icons/*.png'],
      manifest: {
        name: 'Mundo Mágico',
        short_name: 'Mundo Mágico',
        description: 'Explorá el universo mágico: personajes, hechizos, pociones y más.',
        start_url: '/tp1-potter-app/',
        scope: '/tp1-potter-app/',
        display: 'standalone',
        orientation: 'portrait-primary',
        background_color: '#E8D9AE',
        theme_color: '#0b0e1a',
        lang: 'es',
        icons: [
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/icon-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        // Precachea el shell: HTML, JS, CSS generados por el build
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            // Cachear las respuestas de PotterDB
            urlPattern: /^https:\/\/api\.potterdb\.com\/v1\/.*/,
            handler: 'NetworkFirst', // intenta red, si falla usa caché
            options: {
              cacheName: 'potterdb-api-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 // 1 día
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            // Cachear imágenes (fotos de personajes, etc.)
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 días
              }
            }
          }
        ]
      },
      devOptions: {
        enabled: true // permite probar el SW en modo dev
      }
    })
  ]
})