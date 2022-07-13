let arr = [
  { gender: 'female', name: 'eujin'},
  { gender: 'female', name: 'sarah'},
  { gender: 'male', name: 'jhon'},
]

let filtered = arr.filter(item => item.gender === 'female')

console.log(filtered);