let bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  // 큐선언
  // 결과배열 선언
  // 탐색함수 선언
    // 디큐한다.  
    // 밸류를 결과배열에 푸쉬한다.
    // 칠드런을 순회하면서 큐에 넣는다.
    // 큐를 탐색한다.
  //결과배열을 리턴한다.
  const que = [];
  const result = [];
  function search (child){
    que.shift();
    result.push(child.value)
    for(let el of child.children){
      que.push(el);
    }
    for(let el of que){
      search(el);
    }
  }
  search(node);

  return result;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
/* test */
let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5, 7, 6]