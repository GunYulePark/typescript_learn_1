let arr = [
  { gender: 'female', name: 'eujin'},
  { gender: 'female', name: 'sarah'},
  { gender: 'male', name: 'jhon'},
]

let filtered = arr.filter(item => item.gender === 'female')

console.log(filtered);

// 생활코딩 callback 강의
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

  function callback(element){
    // console.log(element);
    // if(element.length > 6){
    //   return true;
    // } else {
    //   return false;
    // }
    return element.length > 6;
  }

  var newWords = words.filter(callback); // 여기서 callback함수가 words를 받지도 않았는데, 어떻게 앞에 words. 붙엿단 것만으로도 이게 되나? 
  console.log(newWords);


  // callback 함수 익명화, return 값 => arrow function
  var newWords2 = words.filter(element => element.length > 6);
  function myFilter(origin, callback){
    var result = [];
    for(var i=0; i<origin.length; i++){
      var current = origin[i];
      if(callback(current)){
        result.push(current);
      }
    }
    return result;
  }
  var newWords3 = myFilter(words, element => element.length > 6);
  console.log(newWords2);
  console.log(newWords3);