type A = (value: number) => 10;
type B = (value: number) => number;

let a: A = (value) => 10;
let b: B = (value) => value;

// 우리가 생각하는 Super 타입과 Sub 타입이 있으면 Sub 타입은 Super 타입에 호환된다.
a = b; //오류
b = a; //정상
