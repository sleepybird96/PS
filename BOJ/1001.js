const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function(line) {
  const input = [];
  for(param of line.split(' ')){
    input.push(Number(param))
  }
  console.log(input[0] - input[1])
  rl.close();
}).on("close", function() {
  process.exit();
});