const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const formPath = path.join(__dirname, 'public', 'form.html');
const dataPath = path.join(__dirname, 'form-data.txt');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile(formPath, 'utf8', (error, html) => {
      if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Could not load the form.');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    });
    return;
  }

  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = querystring.parse(body);
      const savedLine = `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}\n`;

      fs.appendFile(dataPath, savedLine, (error) => {
        if (error) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Could not save form data.');
          return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          <h1>Thank you, ${formData.name}!</h1>
          <p>Your form was submitted successfully.</p>
          <a href="/">Go back</a>
        `);
      });
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Page not found');
});

server.listen(3000, () => {
  console.log('Form server running at http://localhost:3000');
});
