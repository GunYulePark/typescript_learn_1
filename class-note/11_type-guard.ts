interface Developer{
  name: string;
  skill: string;
}

interface Person{
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' };
}

var tony = introduce();
  // console.log(tony.skill);
  // Union type 특징: 타입들의 공통된 속성들만 접근 가능하다.

  if ((tony as Developer).skill) { // 타입단언
    var skill = (tony as Developer).skill;
    console.log(skill);
  } else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age);
  }

// 타입 가드
// developer인지 걸러내는 함수
// 키워드: is
function isDeveloper(target: Developer | Person): target is Developer{
  return (target as Developer).skill !== undefined; // skill이 존재한다.
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}