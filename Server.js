const http = require('http');
const app = require('./App'); // Check if this should be './app' instead
const port = process.env.PORT || 4200;

const server = http.createServer(app);
server.listen(port, () => {
    console.log('App is running on port ' + port);
});
