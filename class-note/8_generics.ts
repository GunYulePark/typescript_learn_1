// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10);
// logText('하이');
// logText(true);

// 제너릭
// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// logText('hi'); // 다 'hi'로 처리된다.
// logText<string>('hi'); // T가 모두 string으로 처리된다.


// generic 안쓰면 문제점
  // function logText(text: string){
  //   console.log(text);
  //   text.split('').reverse().join(''); // string과 관련된 함수
  //   return text;
  // }

  // function logNumber(num: number){
  //   console.log(num);
  //   num.toExponential(); // num과 관련된 함수
  //   return num;
  // }
  // logText('a');
  // logNumber(10);

  // 타입만 다르고, 같은 코드 사용하면 코드 낭비

// Union 활용 > 문제 해결 못함.
  // function logText(text: string | number){
  //   console.log(text);
  //   text.toLocaleString(); // string, number의 공통 method만 접근가능하다.
  //   return text;
  // }
  
  // const a = logText('a'); // a의 type은 string | number
  // a.split(''); // 그래서 string이 아니라, split() 적용가능한지 인식 불가.
  // logText(10);

// 제네릭의 장점과 타입 추론에서의 이점
  function logText<T>(text: T): T{
    console.log(text);
    return text;
  }
  
  var str = logText<string>('abc');
  str.split(''); // 그래서 string이 아니라, split() 적용가능한지 인식 불가.
  const login = logText<boolean>(true);
  
// 제네릭 실전 예제
