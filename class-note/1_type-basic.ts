// JS 문자열 선언
var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';
let num: number = 10;
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10];
let items: number[] = [1, 2, 3, 'a']; // 위위 줄 arr과 똑같.

// TS 튜플
// 배열 index의 각각 type이 정의 되어 있음
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
let person: object = {
  name: 'capt',
  age: 100
};
let person:{ name: string, age: number} = {
  name: 'thor',
  age: 1000
}

// TS 진위값
let show: bolean = true;
