const http = require('http');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const PORT = parseInt(process.env.PORT || '4000');

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs - 1; i++) {
    cluster.fork();
  }

    cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    console.log('Forking a new worker...');
    cluster.fork();
  });
} else {
  const app = require('./app');
  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`Worker ${process.pid} started and listening on port ${PORT}`);
  });
}

// Load balancer
const loadBalancer = http.createServer((req, res) => {
  const worker = Object.values(cluster.workers)[0];
  worker.send('sticky-session:connection', req, res);
});

loadBalancer.listen(PORT, () => {
  console.log(`Load balancer listening on port ${PORT}`);
});
