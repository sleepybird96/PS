const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
  }).on('close', function () {

let x = Number(input[0]);
let y = Number(input[1]);

// x y둘다 양수 이면 1사분면
if (x > 0 && y > 0){
    console.log(1);
    }
// x는 음수 y는 양수이면 2사분면
else if (x < 0 && y > 0){
    console.log(2);
    }   
// 둘 다 음수이면 3사분면
else if (x < 0 && y < 0){
    console.log(3);
    }
// x는 양수 y는 음수이면 4사분면
else if (x > 0 && y < 0){
        console.log(4);
    }
    
    process.exit();
});