//시험점수를 입력받는다.
var fs = require('fs');

var input = fs.readFileSync('/dev/stdin').toString();

var result = parseInt(input);

var grade;
//90이상이면 A를반환
if(result >= 90){
    grade = 'A';
}
//80이상이면 B를반환
else if(result >= 80){
    grade = 'B';
}
//70이상이면 C를반환
else if(result >= 70){
    grade = 'C';
}
//60이상이면 D를반환
else if(result >= 60){
    grade = 'D';
}
//나머지 F반환
    else{
        grade = 'F';
    }
    
console.log(grade);