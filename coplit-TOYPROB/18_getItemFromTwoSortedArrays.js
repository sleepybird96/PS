
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // leftIdx와 rightIdx선언 초기값0
  let leftIdx = 0,
    rightIdx = 0;
  // k가 0보다 클때까지만 반복 
  while (k > 0) {
    //cnt는 k의 중간값
    let cnt = Math.ceil(k / 2);
    //각 단계는 cnt부터시작
    let leftStep = cnt,
      rightStep = cnt;
    //만약 leftIdx가 arr1의 길이와 같으면
    if (leftIdx === arr1.length) {
      //rightIdx에 k를 더한값을 할당한다
      rightIdx = rightIdx + k;
      break;
    }
    //만약 rightIdx가 arr2의 길이와 같으면
    if (rightIdx === arr2.length) {
      //leftIdx에 k를 더한값을 할당한다
      leftIdx = leftIdx + k;
      break;
    }
    //cnt가 arr1.length - leftIdx보다 클때 left단계는 arr1.length - leftIdx
    if (cnt > arr1.length - leftIdx) leftStep = arr1.length - leftIdx;
    //cnt가 arr2.length - rightIdx보다 클때 right단계는 arr2.length - rightIdx
    if (cnt > arr2.length - rightIdx) rightStep = arr2.length - rightIdx;
    //만약 arr1[]
    if (arr1[leftIdx + leftStep - 1] < arr2[rightIdx + rightStep - 1]) {
      leftIdx = leftIdx + leftStep;
      k = k - leftStep;
    } else {
      rightIdx = rightIdx + rightStep;
      k = k - rightStep;
    }
  }

  leftMax = arr1[leftIdx - 1] || -1;
  rightMax = arr2[rightIdx - 1] || -1;

  return Math.max(leftMax, rightMax);
};

/* test */
let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 5, 9];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8

arr1 = [1, 1, 2, 10];
arr2 = [3, 3];
result = getItemFromTwoSortedArrays(arr1, arr2, 4);
console.log(result); // --> 3