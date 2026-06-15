const path = require('path');

const filePath = 'notes/classes/node.txt';

console.log('Directory:', path.dirname(filePath));
console.log('File name:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));
console.log('Joined path:', path.join('node-practice', 'node', 'app.js'));
