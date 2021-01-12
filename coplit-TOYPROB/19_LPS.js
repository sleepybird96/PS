const LPS = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  //str의 길이를 2로나눈것에 기준을 할당한다(좌, 우)
  //좌인덱스가 0이아닐때까지 반복
    //좌는 0부터 1씩빼면서 비교하고
    //우는 를 계속 1씩증가하면서 비교한다.
    //같으면 좌 리턴
    //좌--
    //우++

  let left = ~~(str.length / 2), 
  right = str.length % 2 ?  left + 1 : left,
  end = str.length;

  while(left){
    if(str.slice(0, left) === str.slice(right, end))return left;
    left--;
    right++;
  }

  return 0;
};

/*test*/
let output = LPS('abbbcc');
console.log(output); // --> 0

output = LPS('aaaa');
console.log(output); // --> 2
// prefix: str.slice(0, 2)
// suffix: str.slice(2)
// non-overlapping 조건이 없는 경우 정답은 4 입니다.

output = LPS('aaaaa');
console.log(output); // --> 2
// prefix: str.slice(0, 2)
// suffix: str.slice(3)
// non-overlapping 조건이 없는 경우 정답은 5 입니다.