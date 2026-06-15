const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sample.txt');

fs.writeFileSync(filePath, 'Hello from fs module');

const data = fs.readFileSync(filePath, 'utf8');
console.log(data);

fs.appendFileSync(filePath, '\nThis line was added later.');
console.log('File updated successfully.');
