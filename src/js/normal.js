console.log('normal.js')
export default function () {
  console.log('normal.js')
  const test = 'awe'
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json))
}
