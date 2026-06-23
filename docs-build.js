const fs = require('fs');

fs.cpSync('dist/demo-ng-forge', 'docs', { recursive: true });

fs.copyFile('dist/demo-ng-forge/index.html', 'docs/404.html', (err) => {
  if (err) {
    console.error('index.html -> 404.html copy failed');
    throw err;
  }
});
