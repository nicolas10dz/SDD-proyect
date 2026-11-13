'use strict';
const app = require('./app');
const server = app.listen(3000, () => {
  require('http').get('http://localhost:3000/api/health', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log('STATUS:', res.statusCode);
      console.log('BODY:', data);
      server.close();
    });
  });
});
