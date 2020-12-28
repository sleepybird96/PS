/*백준 2753 윤년*/

//연도를 입력받는다.
var fs = require('fs');

var input = fs.readFileSync('/dev/stdin').toString();

var year = parseInt(input);

//(연도가 4의배수&&100의배수가 아닐때)||400의배수일 때 
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
    console.log(1);
  }  else{
        console.log(0);
     }
