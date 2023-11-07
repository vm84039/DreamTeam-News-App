const { execSync } = require('child_process');
const path = require('path');

// Function to run npm install in a specific directory
function runNpmInstall(directory) {
  const fullPath = path.join(__dirname, directory);
  console.log(`Installing dependencies in ${fullPath}...`);
  execSync('npm install', { cwd: fullPath, stdio: 'inherit' });
}

// Run npm install in client, server, and shared directories
runNpmInstall('client');
runNpmInstall('server');
runNpmInstall(__dirname);