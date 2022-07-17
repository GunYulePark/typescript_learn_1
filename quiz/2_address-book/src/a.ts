// 동기적인 코드

function fetchItems1(): string[] {
  let items = ['a', 'b', 'c'];
  return items;
}

let result1 = fetchItems1();
console.log(result1);

// 비동기적 코드
function fetchItems2(): Promise<string[]> {
  let items: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
// return Promise 이면, fetchItems2의 returnType이 Promise 여야 한다.
// Promise에 alt 키 대고 들어가보면, Generic으로 구성돼있다.
let result2 = fetchItems2();
console.log(result2);
