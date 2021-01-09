const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function(line) {
  const input = [];
  for(param of line.split(' ')){
    input.push(param)
  }
  console.log(input.filter(el=>el!=='').length)
  rl.close();
}).on("close", function() {
  process.exit();
});