// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number){
//   return a + b;
// }
// sum(10, 20);

// 함수의 반환(return) 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number{
  return a + b;
}

sum(10, 20, 30, 40); 
// error
// 함수의 스펙을 이미 알고 있다.

sum(10);
// error
// 2개 넘겨야하는데, 하나만 넘겼다. 
// param의 개수 만큼 1:1 대칭 시켜줘야 한다.

// 함수의 Optional parameter
  function log(a: string, b?: string, c?:string){
    return ;
  }
  log('hello world');
  log('hello ts', 'abc');

