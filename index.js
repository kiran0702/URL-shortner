// Root index.js file to serve as entry point for Render deployment
// This file simply requires the backend server.js file

console.log('Starting URL Shortener from root index.js');
console.log('Redirecting to backend/server.js');

// Change directory to backend and run server.js
process.chdir('./backend');
require('./backend/server.js');
