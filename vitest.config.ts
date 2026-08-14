import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@app': resolve(__dirname, './src/app'),
      '@assets': resolve(__dirname, './src/assets'),
      '@demo-ng-forge/pets': resolve(__dirname, './projects/pets/src/public-api.ts')
    }
  },
  test: {
    onConsoleLog(log): boolean | void {
      if (log.includes('Lit is in dev mode')) {
        return false;
      }
    },
    onUnhandledError(error): boolean | void {
      if (error.type === 'Unhandled Rejection' || error.type === 'Uncaught Exception') {
        return false;
      }
    },
    globals: true,
    testTimeout: 10000,
    hookTimeout: 10000,
    teardownTimeout: 5000,
    isolate: false,
    restoreMocks: true,
    open: false,
    reporters: ['default'],
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
      viewport: { width: 1280, height: 800 },
      screenshotFailures: false
    },
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      exclude: ['**/*.test.ts', '**/*.vitest.ts', '**/index.ts', '**/*.scss']
    },
    server: {
      deps: {
        inline: ['@tylertech/forge-core', '@tylertech/forge', '@tylertech/forge-angular', '@tylertech/forge-angular-internal']
      }
    },
    setupFiles: ['test-setup.ts']
  },
  optimizeDeps: {
    exclude: ['chromium-bidi']
  }
});
