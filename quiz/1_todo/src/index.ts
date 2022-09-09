// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// };

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Todo[];

// object[] : 내용물이 object인 배열
// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

// 여기서 todo는 todos의 안에 있는 object.
function addTodo(todo: Todo): void {
  // void: return 값 없다.
  todoItems.push(todo);
}
// push : 배열 마지막에 추가

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}
/* 배열 임의의 위치에 요소 추가 제거 */
// start - 수정할 배열 요소의 인덱스
// deleteCount - 삭제할 요소 개수, 제거하지 않을 경우엔 0
// el - 배열에 추가될 요소
// arr.splice(start, deleteCount, el1, el2, ... );

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}
// 마지막에 todo는 왜 들어가는거지?

// business logic
// 가장 첫 번째 걸 return
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): object[] {
  return todoItems.filter(item => item.done);
  //   return todoItems.filter(function(item){
  //   if (item.done){
  //     return item;
  //   }
  // });
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
    id: 4,
    title: '아이템 4',
    done: false,
  };
  addTodo(item1);
  addTodo({
    id: 5,
    title: '아이템 5',
    done: false,
  });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

// 실행 부분
todoItems = fetchTodoItems();
addTwoTodoItems();
log();
