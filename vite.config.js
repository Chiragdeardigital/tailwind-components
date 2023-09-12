import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'assets', 
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      input: './assets/tailwind.css', // ( 'if you have kept the tailwind.css file in the root directory then just write "tailwind.css"' )
      output: {
        dir: 'assets',
        assetFileNames: 'styles.css', // 'this file will contain all the tailwind css after build'
      }
    },
  }
})