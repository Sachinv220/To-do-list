import { TaskArray } from "./types";

const verifyText = (text: string) => {
  text = text.trim();
  if (text) {
    return true;
  }
  return false;
};

const onSubmit = (todo : TaskArray, text : string) => {
  let id = 0;

  if (todo.length > 0) {
    id = todo[todo.length - 1].id + 1;
  }

  const checked = false;

  const todoList = [...todo, { text, id, checked }];

  localStorage.list = JSON.stringify(todoList);

  return todoList;
};

const binarySearch = (todo : TaskArray, id : number) => {
  let start = 0;
  let end = todo.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (todo[mid].id === id) return mid;
    else if (todo[mid].id < id) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
};

const sortTasks = (a, b) => {
  return a.checked - b.checked;
}

export { verifyText, onSubmit, binarySearch, sortTasks };
