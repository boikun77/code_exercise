// 9. id 프로퍼티의 값 중에서 최대값 구하기

const todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

const getMaxId = (todos) => {
  const result = todos.map((todo) => todo.id);
  return Math.max(...result);
};
// 방법2 reduce
// 과제

console.log(getMaxId(todos));
console.log(getMaxId([]));
