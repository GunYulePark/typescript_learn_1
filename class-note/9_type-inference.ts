 // 타입 추론 기본 1
  var a = 10;
  // 할당 받은 값의 type으로 추론

  // 할당 받은 값 type, 그리고 returnType도 똑같다.
  function getB(b=10) {
    return b;
  }

  // 문자열 합치기 추론 가능.
  function getC(c=10) {
    var d = 'hi';
    return c + d;
  }

// 타입 추론 기본 2
    interface Dropdown<T> {
        value: T;
        title: string;
  }
    
  interface DetailedDropdown<K> extends Dropdown<K> {
    // K Type이 DetailedDropdown과 Dropdown에도 적용된다.
    description: string;
    tag: K;
  }

  //   var ShoppingItem: Dropdown<string> = {
  //     value: 'abc',
  //     title: 'hello',
  // }
    
  var detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a',
    tag: 'a'
  }

// Best Common Type
export var arr = [1, 2, true, 'a']; 
// var arr: (string | number | boolean)[]
// 모든 type을 union으로 묶어 나간다.

