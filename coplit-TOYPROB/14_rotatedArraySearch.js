const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.
  // 이분탐색 함수 (시작 인덱스,  끝인덱스)
  function binarySearch (start, end) {
    // 미드: ~~((끝인덱스 - 시작인덱스) / 2)
    const mid = ~~((end + start) / 2)
    // rotated[미드]랑 타겟이랑 같으면 미드 리턴
    if(rotated[mid] === target)return mid;
    // 끝인덱스 - 1이 시작인덱스와 같으면
    if(start === end)return -1;
    if(end - 1 === start){
      // rotated[끝인덱스]가 타겟이랑 같으면
      if(rotated[end] === target)return end;
      return -1;
      // 끝인덱스 리턴
    }
    // 타겟이 rotated[미드]보다 작으면
    if(target < rotated[mid])return binarySearch(start, mid - 1);
    if(target > rotated[mid])return binarySearch(mid + 1, end);
  }
  // 만약 타겟이 2번째 인덱스보다 크면
  if(target > rotated[2]){
    return -1;
  }else if(target < rotated[0]){
    return binarySearch(3, rotated.length - 1)
  }else{
    // 타겟이 인덱스0값이랑 같으면 0리턴
    if(target === rotated[0])return 0;
    // 타겟이 인덱스1값이랑 같으면 1리턴
    if(target === rotated[1])return 1;
    // 타겟이 인덱스2값이랑 같으면 2리턴
    if(target === rotated[2])return 2;
  }
  return -1;
};
/* test */
let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
console.log(output); // --> 5

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);
console.log(output); // --> -1