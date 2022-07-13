// // class 활용
// function Person(name, age){
//   this.name = name;
//   this.age = age;
// }
// var capt = new Person('캡틴', 100);

class Person {
  // 클래스 로직
  // constructor로 초기화
  constructor(name, age) {
    console.log('생성 되었습니다');
    this.name = name;
    this.age = age;
  }
}

// export var seho = new Person('세호', 30); // 생성되었습니다.

// console.log(seho);

// 프로토타입
  var user = { name: 'capt', age: 100};
  // var admin = {name: 'capt', age: 100, role: 'admin'};
  var admin = {role: 'admin'};
  admin.__proto__ = user;
  console.log(admin.name);
  console.log(admin.role);

// 프로토타입의 활용
  var obj = {a: 10};
  console.log(Object.keys(obj));
  console.log(obj.hasOwnProperty('a'));
  
  // Built-in JS API OR JS Native API 
  
  // obj에 적용되는 method들
  // 기본적으로 object만들면 Object라는 __proto__ 자동으로 만들어짐.
  // 객체 정보 재활용할 때 obj 안에 있는 속성들,
  // array도 마찬가지.

