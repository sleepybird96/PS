//출처 :https://gimgongta.tistory.com/20
// 즐겨찾는 아이디 hagtfms sapphire
//한줄짜리 입력일 경우 (예 "사과")
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