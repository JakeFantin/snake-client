const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.on('connect', () => {
    console.log('Connection Established');
  })
  conn.on('data', (data) => {
    console.log(data);
  })
  conn.setEncoding('utf8');
  return conn;
};

module.exports = {
  connect
}