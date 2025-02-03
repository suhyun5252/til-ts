// 아래 상황은 Person 이 2번 정의됨으로 판단
interface Person {
  name: string;
}
interface Person {
  name: string;
  age: number;
}
interface Male extends Person {
  name: "MALE";
}
const who: Male = {
  name: "홍", // 오류 발생
  age: 10,
};
