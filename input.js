/* 출처 :https://gimgongta.tistory.com/20 */

//한줄짜리 입력일 경우 (예 "사과")

// 문자로 입력받은것 정수나 숫자로 입력받기 preseInt(),Number()

var fs = require('fs');

var input = fs.readFileSync('/dev/stdin').toString();

var result = input; // 이 변수에 "사과" 가 들어간다.


// 한줄에 스페이스로 여러 파라미터가 들어가는 경우( 예를들어 "사과 토마토 수박" );

var fs = require('fs');

var input = fs.readFileSync('/dev/stdin').toString().split(' ') ;

var result1 = input[0]; //입력받은값이 정수이면 parseIn, 소수이면parseFloat(input[0]);

var result2 = input[1]; 

var result3 = input[2]; 

// 여러줄로(개행되어) 여러 파라미터가 들어가는경우
// 예를들어
// 사과
// 토마토
// 수박

var fs = require('fs');

var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

var result1 = input[0]; 

var result2 = input[1]; 

var result3 = input[2]; 

/* readline 모듈 사용하기
   출처 : https://velog.io/@exploit017 */

   //오류 발생이 적은 방법 

//하나 입력
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  console.log(line);

  //기본적으로 매개변수 line에 할당된다.

  rl.close();
}).on("close", function() {
  process.exit();
});


//한 줄에 스페이스로 구분하기
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map((el) => parseInt(el));
  })
  .on('close', function () {
    //매개변수 input에 할당된다.
    console.log(input[0] + input[1]);

    process.exit();
  });

//여러줄 입력//
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
  }).on('close', function () {
      //내용이고 줄바꿈하면 인덱스바뀜 ex) input[0] enter -> input[1]
    process.exit();
});