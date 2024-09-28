import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['**/*.test.tsx'],
    setupFiles: './setupTests.ts',
    environment: 'jsdom',
    globals: true
  },
})