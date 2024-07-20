import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteBasicSslPlugin from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), viteBasicSslPlugin(), VitePWA({
    registerType: 'prompt',
    injectRegister: 'auto',
    pwaAssets: {
      disabled: false,
      config: true,
    },
    manifest: {
      name: 'AdventPrime',
      short_name: 'AdventPrime',
      description: 'An application to manage event bookings for educational institutions',
      theme_color: '#000000',
    },
    workbox: {
      globPatterns: ['**/*.{js,jsx,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },
    devOptions: {
      enabled: true,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})