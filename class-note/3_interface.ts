interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
  var seho: User = {
    age: 33,
    name: '세호'
  }

// 함수에 인터페이스 활용
  function getUser(user: User){
    console.log(user);
  }
  const capt = {
    age: 23,
    name: '캡틴',
  }
  getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용

  interface SumFunction {
    (a: number, b: number): number;
  }

  export var sum: SumFunction;
  sum = function(a: number, b: number): number {
    return a + b;
  }
  console.log(sum(1, 2));
  // 아래 두개 하면 실행됨.
  // npm install -g ts-node
  // ts-node 3_interface.ts

// 인덱싱
  interface StringArray {
    [index: number]: string;
  }

  var arr: StringArray = ['a', 'b', 'c'];
  // arr[0] = 10; // string으로 넣어야 함.
  arr[0] = 'd'; 
  console.log(arr);

// 인터페이스 딕셔너리 패턴 - 실무에서 많이
  interface StringRegexDictionary {
    [key: string]: RegExp; //RegExp : 정규표현식
  }

  var obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
  }

  obj['cssFile'] = /abc/;

// 인터페이스 확장 - 상속받아서 확장(OOP)
  interface Person {
    name: string;
    age: number;
  }

  interface Developer extends Person {
    language: string;
  }

  var captain: Developer = {
    name: '캡틴',
    age: 100,
    language: 'korean',
  }