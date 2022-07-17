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
  
// interface에 generic 정의하기
  // interface Dropdown{
  //   value: string;
  //   selected: boolean;
  // }

  // export const obj: Dropdown = {value: 'abc', selected: false};

  interface Dropdown<T> {
    value: T;
    selected: boolean;
  }
  export const obj: Dropdown<number> = {value: 12, selected: false};

  function logTextLength1<T>(text: T[]): T[] {
    // console.log(text.length); // T[]이기 때문에 length가 된다.
    text.forEach(function (t){
      console.log(t);
    });
    return text;
  }

  logTextLength1<string>(['hio', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
  interface LengthType {
    length: number;
  }
  function logTextLength2<T extends LengthType>(text: T): T {
    text.length;
    return text;
  }

  logTextLength2('a');
  // logTextLength2(10); //number엔 length 없기 때문에 상위 method인 LengthType을 부여할 수 없다.
  // <T extends {Type}>은 T 자리에 {Type}이 가진 속성을 모두 가질 수밖에 없도록 '타입을 제한'하는 것이다.
  logTextLength2({ length: 10 });

// 제네릭 타입 제한 3 - keyof
  interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
  }

  // keyof를 통해서 속성 3개 중 하나만 갖도록 제한한다.
  function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
    return itemOption;
  }

  getShoppingItemOption('name');
