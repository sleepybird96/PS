/* 프로그래머스 k번째 수 */
function solution(array, commands) {
  var answer = [];
  //commands 배열을 순회한다.
    //더미를 선언하고 arr.slice(0번째인덱스값 - 1, 1번째인덱스).sort(a - b);
    //더미[2번째인덱스값 - 1]을 정답배열에 푸쉬한다.

  for(let command of commands){
    let dummy = array.slice(command[0] - 1, command[1]).sort((a, b)=>a - b);
    answer.push(dummy[command[2] - 1])
  }
  
  return answer;
}
/* test */
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))