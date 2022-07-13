// export interface Person {
//   name: string;
//   age: number;
// }

export type Person = {
  name: string;
  age: number;
}

export var seho: Person = {
  name: '세호',
  age: 30,
}

type MyString = string;
var str: MyString = 'hello';

export type Todo = { id: string; title: string; done: boolean};
function getTodo(todo: Todo){

}

