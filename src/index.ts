// 비동기 함수
async function fetchGetTodo(): Promise<void> {
  const res = await fetch("주소");
}

async function fetchGetTodoOne(): Promise<string> {
  const res = await fetch("주소");
  return "hi";
}

async function fetchPostTodoOne(): Promise<boolean> {
  const res = await fetch("주소");
  return true;
}

type Todo = {
  id: number;
  title: string;
};
async function fetchSortTodoOne(): Promise<Todo> {
  const res = await fetch("주소");
  return { id: 1, title: "안녕" };
}
