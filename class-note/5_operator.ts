// function logMessage(value: any){
//   console.log(value);
// }

// // string과 number 2개 받아야 하는 경우
// logMessage('hello');
// logMessage(100);

var seho: string | number | boolean;

function logMessage(value: string | number){
  if (typeof value === 'number'){
    value.toLocaleString();
  }
  if (typeof value === 'string'){
    value.toString();
  }
  // throw new TypeError('value must be string or number');
  return ;
}
// 장점 : 바로 number와 string에 관련한 method 자동완성 사용할 수 있다.
// type guard : 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정

logMessage('hello');
logMessage(100);


// Union의 특징
  interface Developer {
    name: string;
    skill: string;
  }

  interface Person {
    name: string;
    age: number;
  }
  function askSomeone(someone: Developer | Person){
    // someone.age = 14;
    
    console.log(someone.name); // 공통된 속성에 대해서만 접근할 수 있다.
    // someone.skill; // error
    // someone.age; // error
    // console.log(someone.skill); // 얘 쓰면 접근 자체를 못한다.
  }

  askSomeone({name: "디벨로퍼", skill: "웹 개발"});
  askSomeone({name: "캡틴", age: 100})

// intersection 연산자 &
  var capt: string & number; // capt: never

  function askSomeone1(someone: Developer & Person){
    // someone.age = 14;
    
    console.log(someone.name); // Developer과 Person이 갖고 있는 모든 속성을 포함한다.
    // someone.skill;
    // someone.age;
    console.log(someone.skill); // 잘 작동된다.
  }

  askSomeone1({name: "디벨로퍼", skill: "guitar", age: 14});
  // age 안넣어주면 오류남.
  // & 쓰면 두 개의 속성을 모두 포함하는 new 타입을 요구하게 된다.