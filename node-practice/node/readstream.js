const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sample.txt');
const stream = fs.createReadStream(filePath, 'utf8');

stream.on('data', (chunk) => {
  console.log('Received chunk:');
  console.log(chunk);
});

stream.on('end', () => {
  console.log('Finished reading file.');
});

stream.on('error', (error) => {
  console.log('Something went wrong:', error.message);
});
