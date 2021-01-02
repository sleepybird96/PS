function solution(N, number) {
  //숫자 한개를 사용했을 때 표현가능한 숫자는 N하나
  //숫자 두개를 사용했을 때 표현가능한 숫자는 
    //NN
    //숫자 한개사용했을 때 (+ - / *) 숫자 한개사용했을 때
  //숫자 세개를 사용했을 때 표현가능한 숫자는
    //NNN
    //숫자 한개사용했을 때 (+ - / *) 숫자 한개사용했을 때 (+ - / *) 숫자한개사용 했을 때
    //숫자 한개사용했을 때 (+ - / *) 숫자 두개사용했을 때 ...
  //숫자 n개 사용했을 때 표현가능한 숫자는
    // 'N' n번이어붙이기
    //숫자 한개사용했을 때 (+ - / *) 숫자 한개 ...
    //...
    //숫자 두개사용했을 때 (+ - / *) 숫자 한개 ....
    //...
    //숫자 n - 1개 사용했을 때 (+ - / *) 숫자 한개사용했을 때

  //0번째 인덱스를 빈셋으로 비워준다. 자기자신도 넣어야되기때문
  const cases = [new Set()];
  //각 인덱스마다 모든 경우Set을 둔다
  for(let i = 1; i <= 8; i++){
    //자기자신을 붙인 케이스를 넣는다
    cases.push(new Set([Number(Array(i).fill(N).join(''))]))
    //예) i가 3일때 => 숫자 세개를 사용했을 때 표현가능한 숫자를 구할때
    for(let j = 1; j <= i; j++){
      //예) j가 1일때 =>숫자 세개를 사용한 경우중 숫자 한개 사용했을 때를 구한다
      for(const x of [...cases[j]]){
        for(const y of [...cases[i - j]]){
          //예) case[1] + case[2] , case[2] + case[1]
          cases[i].add(x + y)
          cases[i].add(x - y)
          cases[i].add(x * y)
          if(y)cases[i].add(~~(x / y))
        }
      }
      //
      if(cases[i].has(number))return i;
    }
  }
  return -1;
}

/* test */
console.log(solution(5, 12)) //----> 4