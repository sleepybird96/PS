const insertionSort = function (arr, callback) {
  // TODO: 여기에 코드를 작성합니다. 
  // 변수하나선언
  // 만약 callback이 있으면 callback을 적용시킨 코드를 배열에 대입
  // 그외 arr.slice
  // 배열을 순회한다 i = 1
    //임시값 설정 = arr[i]
    // 배열을 순회한다 j = i - 1 j는 점점 줄어든다 0보다 같거나 클때까지
    // 그리고 arr[j]가 arr[i]보다 작을 때 까지
      // 요소들이 한칸씩 밀린다 arr[j + 1] = arr[j]
    //계속 비교하면서 자리를 찾아간 arr[i]가 자리를 찾아 돌아간다.
   
  const result = !callback ? arr.slice() : arr.map(callback);
  for(let i = 1; i < result.length; i++){
    let temp = result[i];
    let cbTemp;
    if(callback)cbTemp = arr[i];
    let j;
    for(j = i - 1; j >= 0 && result[j] > temp; j--){
      result[j + 1] = result[j];
      if(callback)arr[j + 1] = arr[j];
    }
    result[j + 1] = temp;
    if(callback)arr[j + 1] = cbTemp;
  }
  return !callback ? result : arr;
};
console.log(insertionSort([3, 1, 21]))
const cb = (item) => item * item;
console.log(insertionSort([-10, -11, 2, 29], cb))