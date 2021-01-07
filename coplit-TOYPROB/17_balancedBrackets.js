const balancedBrackets = function (str) {
  //스택선언
  const stack = [];
  //오프너 선언
  const opener = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  //closer선언
  const closer = '}])';
  //문자열 순회
  for (let i = 0; i < str.length; i++) {
    //만약 해당 문자가 opener에 있으면
    if (str[i] in opener) {
      //스택에 해당문자를 푸쉬한다.
      stack.push(str[i]);
      //closer에 포함된 문자라면 
    } else if (closer.includes(str[i])) {
      //스택에서 하나 빼서 top에 할당한다.
      const top = stack.pop();
      //opener의top밸류값을 페어로 할당한다
      const pair = opener[top];
      //해당 closer가 pair와 같지않으면 
      if (pair !== str[i]) {
        //false를 리턴한다.
        return false;
      }
    }
  }
  //다 순회를 했는데 스택의 길이여부에 따라 true, false가 리턴된다
  return stack.length === 0;
};
/* test */
let output = balancedBrackets('[](){}');
console.log(output); // --> true

output = balancedBrackets('[({})]');
console.log(output); // --> true

let output3 = balancedBrackets('[(]{)}');
console.log(output); // --> false
/* description */
//괄호가 열렸을 때
  //그 다음인덱스에 괄호가 열리지않았거나 똑같은 괄호로 닫기지 않았을 때 false
//