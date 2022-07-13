// enum Shoes {
//   Nike,
//   Adidas,
// }

// var myShoes = Shoes.Adidas;
// console.log(myShoes); // 0
// // 별도의 가정을 하지 않았을 때 숫자로 처리한다.
// // 처음 0, 그 다음 1씩 증가한다. 0, 1, 2

enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스',
}

var myShoes = Shoes.Adidas;
console.log(myShoes);

// 예제
  enum Answer {
    Yes = 'Y',
    No = 'N',
  }

  function askQuestion(answer: Answer){
    if(answer === Answer.Yes){
      console.log('정답입니다.');
    }
    if(answer === Answer.No){
      console.log('오답입니다.');
    }
  }
  askQuestion(Answer.Yes);
  askQuestion('Y'); // error
  // 정확한 처리, 예외처리 잘된다.