//A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.
var fs = require('fs');

var input = fs.readFileSync('/dev/stdin').toString().split(' ') ;

var A = parseInt(input[0]);

var B = parseInt(input[1]);

if(A > B){
    console.log('>');
}
else if(A < B){
    console.log('<');
}
    else{
        console.log('==');
    }
