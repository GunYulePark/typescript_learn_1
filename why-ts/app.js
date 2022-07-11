// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';
// 나중엔 이거 마지막에 1 부분 빼주기.

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser(){
  return axios.get(url);
}
console.log(fetchUser());

fetchUser().then(function(response){
  response.address.
})


// axios API 활용방법 잘 모르겠으면 아래 참고
// https://velog.io/@zofqofhtltm8015/Axios-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%84%9C%EB%B2%84-%ED%86%B5%EC%8B%A0-%ED%95%B4%EB%B3%B4%EA%B8%B0
function startApp() {
  // axios
  //   .get(url)
  fetchUser()
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
