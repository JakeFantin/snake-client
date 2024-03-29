let connection;

const handleUserInput = function (data){
  if(data === '\u0003'){
    process.exit();
  }
  if(data === 'w'){
    connection.write("Move: up");
  }
  if(data === 'd'){
    connection.write("Move: right");
  }
  if(data === 's'){
    connection.write("Move: down");
  }
  if(data === 'a'){
    connection.write("Move: left");
  }if(data === 'm'){
    connection.write("Say: all i need is speed")
  }
  if(data === 'n'){
    connection.write("Say: gah! foiled again")
  }
}
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {handleUserInput(data)});
  return stdin;

}

module.exports = { setupInput };