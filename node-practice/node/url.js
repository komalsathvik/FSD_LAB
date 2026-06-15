const url = require('url');

const address = 'http://localhost:3000/products?category=books&limit=5';
const parsedUrl = url.parse(address, true);

console.log('Host:', parsedUrl.host);
console.log('Path:', parsedUrl.pathname);
console.log('Query object:', parsedUrl.query);
