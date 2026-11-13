const app = require('./app');

const server = app.listen(3999, () => {
  const http = require('http');
  http.get('http://localhost:3999/api/health', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log('STATUS:', res.statusCode);
      console.log('BODY:', data);
      server.close();
    });
  });
});
