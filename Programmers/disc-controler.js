function solution(jobs) {
  //jobs배열을 요청순에 따라 일단정렬한다
  jobs.sort((a, b)=>a[0] - b[0]);
  //정답에는 요청시간부터 수행완료까지 걸린시간까지 더해가며 할당한다.
    //초기값은 0이다 아직 아무작업도 수행하지 않았기 때문
  let length = jobs.length;
  let answer = 0;
  //지나간시간 선언
  let passTime = 0;
  //보류작업 큐 선언
  const taskQue = [];
  //두 큐모두 비면 반복종료
  while(jobs.length || taskQue.length){
      //만약 지난시간동안 못하고 지나간 작업이 있을 경우 
    if(jobs.length && passTime >= jobs[0][0]){
      //정렬된 jobs에서 디큐해서 푸쉬
      taskQue.push(jobs.shift())
      //보류작업큐를 이행시간순으로 정렬한다.
      taskQue.sort((a, b) => a[1] - b[1])
      continue;
    }

    if(taskQue.length){
      //보류작업큐가 있을 경우
      //let task = 보류작업큐 shift();
      let task = taskQue.shift();
      //지나간시간 += task[1];
      passTime += task[1];
      //answer += 지나간시간 - task[0]
      answer += passTime - task[0];
    }else{//보류작업큐가 없는 경우 지난시간만 재 설정해주면 된다.
      //그럼 다음 순환에서 passTime과 jobs[0][0]과 같아진다
      passTime = jobs[0][0];
    }
  }
  return parseInt(answer / length);
}
/* test */
console.log(solution([[0, 3], [1, 9], [2, 6]]))// --> 9 