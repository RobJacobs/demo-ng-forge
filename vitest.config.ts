import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    onUnhandledError(error): boolean | void {
      if (error.type === 'Unhandled Rejection') {
        return false;
      }
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**']
    },
    server: {
      deps: {
        inline: ['@tylertech/forge-angular-internal']
      }
    }
  }
});
