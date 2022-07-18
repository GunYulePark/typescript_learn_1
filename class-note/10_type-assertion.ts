// 타입 단언(type assertion)
// ts보다 개발자가 타입 더 잘 알고 있다.
// 개발자가 타입을 알려주겠다.
var a;
a = 20;
a = 'a'; // a의 타입이 바뀌고 나서는 추론이 안된다.
var b = a as string; 

// DOM API 조작 : 주로 쓰이는 경우
  // web의 tag정보에 접근할 수 있는.
  // ex. html) <div id="app">hi</div>
  var div1 = document.querySelector('div');
  //보통 div가 존재하는지 모른다.
  // 그래서 div 있는지 먼저 여부 검토해야.
  if (div1) {
    div1.innerText
  }

  // 타입 단언 쓰면 if로 검토 안해도 바로 innerText method 사용할 수 있다.
  let div2 = document.querySelector('div') as HTMLDivElement;
  div2.innerText;