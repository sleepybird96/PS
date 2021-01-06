const quickSort = function (arr, callback) {
  //좌, 우 나눠주는 함수 선언
  function divide(pivotIdx, compIdx){
    //기준인덱스와 비교인덱스가 다를때까지 반복
      //만약 기준값이 비교인덱스보다 크면
        //비교인덱스 값을 임시로 다른곳에 할당한다
        //기준인덱스의 다음값은 비교인덱스자리로 옮긴다.
        //기준인덱스값은 기준인덱스 + 1 자리로 옮긴다.
        //원래 기준인덱스 였던 자리에 임시로 저장한 비교인덱스값을 놓는다.
        //pivotIdx++;
      //그 외
        //compIdx--;
    while(pivotIdx !== compIdx){
      if((callback? callback(arr[pivotIdx]) : arr[pivotIdx]) 
        > (callback? callback(arr[compIdx]) : arr[compIdx])){
        let temp = arr[compIdx];
        arr[compIdx] = arr[pivotIdx + 1];
        arr[pivotIdx + 1] = arr[pivotIdx];
        arr[pivotIdx] = temp;
        pivotIdx++;
      }else{
        compIdx--;
      }
    }
    return pivotIdx;
  }
  //정렬시켜주는 함수 선언
  function sort(start, end){
    if(start > end)return;//basecase
    //divide(start, end)실행
    //sort(start, 기준값 - 1) 좌측을 정렬한다.
    //sort(기준값 + 1, end) 우측을 정렬한다.
    let pivot = divide(start, end)
    sort(start, pivot - 1);
    sort(pivot + 1, end);
  }
  sort(0, arr.length - 1);
  //test1
  // console.log(divide(0, arr.length))
  return arr;
}