const server = require('./server');
const { port } = require('./config');

const startServer = () => {
  server.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
};

startServer();
