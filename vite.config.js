import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        authSelection: 'auth-selection.html',
        dashboard: 'levelMap.html',
        login: 'login.html',
        signup: 'signup.html',
        level3: 'level3.html'
      }
    }
  }
});
