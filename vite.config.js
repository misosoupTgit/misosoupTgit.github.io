import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',            // ← ユーザー/組織ページなので '/' 固定
  build: { outDir: 'docs' }, // ← Pages が docs/ を見れるように
  plugins: [tailwindcss()],
})