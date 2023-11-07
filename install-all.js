const path = require('path');
const { spawnSync } = require('child_process');

// Function to run npm install in a specific directory
function runNpmInstall(directory) {
  const fullPath = path.join(__dirname, directory);
  console.log(`Installing dependencies in ${fullPath}...`);
  const result = spawnSync('npm', ['install'], { cwd: fullPath, stdio: 'inherit', shell: true });
  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }
}

// Run npm install in client, server, and shared directories
runNpmInstall('client');
runNpmInstall('server');
runNpmInstall('');