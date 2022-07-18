// 타입 호환
  export interface Developer{
    name: string;
    skill: string;
  }

  export interface Person{
    name: string;
  }
  var developer: Developer;
  var person: Person;
  // developer = person; 
  // 타입호환 불가
  // 할당 받는 애가 더 많은 속성 가지면 안된다.
  // 왼쪽 그릇이 필요조건. 오른쪽 애는 주입하는 애.
  // 새로운 속성은 주입하면 되는데, 이미 형식적으로 존재하는 속성들은 꼭 채워줘야지.
  person = developer;

// 함수
  var add = function (a: number) {
      // ...
  }
  var sum = function (a: number, b: number) {
    // ...
  }
  // sum의 add보다 구조적으로 크다 = 옵션이 더 많다.
  // add = sum;
  // 호환 불가. 함수에 넣어줘야 할 param 개수 더 적은 애가 그릇이 될 순 없다.
  sum = add;

// Generic
interface Empty<T> {
  // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;
// 타입호환 된다.

interface NotEmpty<T>{
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
// notempty1 = notempty2;
// notempty2 = notempty1;
// 타입호환 안된다.