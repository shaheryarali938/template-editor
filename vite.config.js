import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "polotno",
    project: "polotno-studio"
  })],

  server: {
    host: '0.0.0.0', // Allow external access
    port: 3000, // Use the same port
  },

  build: {
    sourcemap: true
  }
})