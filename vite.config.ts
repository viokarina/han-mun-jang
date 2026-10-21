import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5173, open: false },
  // Seluruh kurikulum dimuat sebagai satu berkas supaya aplikasi tetap bekerja
  // tanpa jaringan setelah dibuka. Ukurannya memang di atas ambang peringatan
  // bawaan Vite, dan itu disengaja.
  build: { chunkSizeWarningLimit: 900 },
})
