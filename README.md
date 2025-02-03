# 함수

- 매게변수의 데이터 타입 정의
- 함수 실행 후 결과값의 데이터 타입 정의

```
// 일반 js 로 함수를 설명하는 경우
// 어떤 매개변수를 받고, 연산을 거치고, 최종 결과를 반환함

// 타입스크립트에서 함수를 설명하는 경우
// 매개변수의 타입은 어떤것이고, 연산을 거치고, 어떤타입의 결과값을 리턴한다.
```

```ts
function add(a: number, b: number): number {
  return a + b;
}

const add2 = (a: number, b: number): number => a + b;
```

## 함수의 매개변수 정의

### 1. 매개변수 기본값 정의

- 기본 값이 있다면 타입 추론함

```ts
// ts에서 매개변수의 타읍은 추론 못함
// 아래처럼 기본값을 추론해서 타입 추론
function add(a = 1, b = 2) {
  return a + b;
}
```

### 2. 선택적 매개변수

- 매개변수를 생략하고 싶다.
- 즉, 있을 수도 있고 없을 수도 있는 경우
- 매개변수명 뒤에 `?` 을 통해서 옵션으로 처리가능

```ts
// ts에서 매개변수의 타읍은 추론 못함
// 아래처럼 기본값을 추론해서 타입 추론
function add(a: number, b?: number) {
  if (b) {
    return a + b;
  }
  return a;
}
// 아래는 매개변수 개수가 맞지 않음
add(5); // 오류

``;
```

### 3. 선택적 매개변수와 기본값을 혼용할수 없다.

### 4. 선택적 매개변수와 객체사용

```ts
type OrderOption = {
  name: string;
  topping?: string;
  size?: string;
};

function makeOrder(option: OrderOption) {
  // 객체 구조 분해 할당
  const { name, topping, size } = option;
  console.log(`${name} ${topping ? topping : ""} ${size ? size : ""}`);
}

makeOrder({ name: "딸기", topping: "땅콩", size: "Big" });
makeOrder({ name: "딸기", topping: "땅콩" });
makeOrder({ name: "딸기" });
```

### 5. 선택적 매개변수와 콜백 함수

```ts
type OrderOption = {
  name: string;
  // 함수 정의
  callback?: (message: string) => void;
};

function makeOrder(option: OrderOption) {
  const { name, callback } = option;
  const say = `${name} 을 구매했어요`;
  if (callback) {
    callback(say);
  }
}
makeOrder({
  name: "책",
  callback: (go) => console.log(go),
});
makeOrder({
  name: "딸기",
});
```

### 6. rest 매개변수

- 일반적 사용

```ts
function add(a: number, b: number, ...res: number[]) {
  console.log(res);
}

add(1, 2, 3, 4, 5);
```

- 만약 tuple을 이용한다.

```ts
function add(a: number, b: number, ...res: [number, number, number]) {
  console.log(res);
}

add(1, 2, 3, 4, 5);
```

## 함수의 타입 표현식

```ts
//  일반적 화살표 함수
const add = (a: number, b: number) => a + b;

// 타입 추론으로 정의된 함수의 타입이노테이션
const add2: (a: number, b: number) => number = (a: number, b: number) => a + b;
```

### 1. type 으로 정의해 보자

- type 이란? 사용자가 이름을 정한 타입 별칭
- 개발자가 마음대로 이름 정한 타입 별칭

```ts
// 타입 추론으로 정의된 함수의 타입 어노테이션
const add2: (a: number, b: number) => number = (a: number, b: number) => a + b;

// 함수 타입정의
type Add = (a: number, b: number) => number;
const add2: Add = (a: number, b: number) => a + b;

// 실 활용에서 매개변수 타입 지정 필요없음
const add3: Add = (a, b) => a + b;
```

### 2. Call Signature

- 함수의 타입을 별도로 지정하는 또 다른 방법
- type 을 객체 형태로 생성합니다.

```ts
// 타입 추론으로 정의된 함수의 타입이노테이션
type Add = (a: number, b: number) => number;

// Call Signature 로 타입 정의하기
type AddSignature = {
  // 이름 : 결과값 데이터형
  (a: number, b: number): number;
};

const add3: AddSignature = (a, b) => a + b;
```

## 함수타입의 호환

### 1. `매개변수가 개수` 기준

#### 1.1 매개변수 개수가 `작은 경우 호환 가능`

```ts
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;

add(2, 3); // 정상 실행

type Add2 = (a: number, b: number) => number;
// 함수 타입 정의 시 매개변수 개수 보다 적으면 호환 안된다.
const add2: Add2 = (a) => 10;
add2(5, 10); // 오류 안나네?
```

#### 1.2 매개변수 개수가 `큰 경우 호환 불가능`

```ts
// 함수 타입 정의에서 매개변수 개수 보다 많으면 호환 안된다.
const add3: Add2 = (a, b, c) => 10; //오류
```

### 2. `매개변수 타입` 기준으로 다르면 호환안됨.

```ts
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;

add(2, 3); // 정상 실행
add("a", "b"); // 오류
```

### 3. 반환값의 타입을 체크한다.

```ts
type Add = (a: number, b: number) => number;
// 함수 타입 정의 시 매개변수 개수 보다 적으면 호환 안된다.
const add: Add = (a, b) => 10;
const add1: Add = (a) => 10; // 개수가 적으면 ok
const add2: Add = (a, b, c) => 10; // 개수가 많으면 error
const add3: Add = (a = "", b) => 10; // 타입이 맞이 않아서 error

//  반환값이 타입이 맞이 않으면 error
const add4: Add = (a, b) => "0"; // 타입이 맞이 않아서 error
```

```ts
type Add = (a: number, b: number) => number;
// 함수 타입 정의 시 매개변수 개수 보다 적으면 호환 안된다. 많으면 버린다.
const add: Add = (a, b) => 10;
const add1: Add = (a) => 10; // 개수가 적으면 ok
const add2: Add = (a, b, c) => 10; // 개수가 많으면 error
const add3: Add = (a = "", b) => 10; // 타입이 맞이 않아서 error

//  반환값이 타입이 맞이 않으면 error
const add4: Add = (a, b) => "0"; // 타입이 맞이 않아서 error

type Add_10 = (a: number, b: number) => 10;
const add_5: Add_10 = (a, b) => 100; // 함수 리턴값의 차이로 error
```

## 매개 변수 타입이 `만약 호환되는 타입`이라면 어떻게 될까?

- 매개변수 타입을 기준으로 호환성을 체크한다.
- 그런데 `매개변수 타입`은 우리가 아는것과 `반대로 생각`해야 한다.
  : 원래 알던내용- Super 타입과 Sub 타입이 있으면 Sub 타입은 Super 타입에 호환된다.
  : 함수 호환하는 경우는 반대로 생각하시길 바랍니다!!
- 호환되는 경우

```ts
type A = (value: 10) => void;
type B = (value: number) => void;

//  10은 number 타입의 서브타입일까?
let aaa: number = 10; //정상
//num 는 수퍼타입이고, 10은 서브타입
// 여기서는 매개변수 타입이 다르다.
let a: A = (value) => {
  console.log(value);
};

let b: B = (value) => {
  console.log(value);
};

a = b; //ok
--------------------------------------------
type A = (value: number) => void;
type B = (value: 10) => void;

let a: A = (value) => {
  console.log(value);
};
let b: B = (value) => {
  console.log(value);
};
// 안되는 이유 ? 서브타입으로 변경되므로
a = b;

// 되는 이유는 수퍼타입으로 변경되므로
b = a;
```

- 호환 안되는 경우

```ts
type A = (value: number) => void;
type B = (value: 10) => void;

//  10은 number 타입의 서브타입일까?
let aaa: number = 10; //정상
//num 는 수퍼타입이고, 10은 서브타입니다.
// 여기서는 매개변수 타입이 다르다.
let a: A = (value) => {
  console.log(value);
};

let b: B = (value) => {
  console.log(value);
};

a = b; //오류
```

```ts
type Animal = {
  name: string;
};
type Dog = {
  name: string;
  color: string;
};
let a: Animal = { name: "hong" };
let b: Dog = { name: "hong", color: "yellow" };

// Animal 은 Dog 의 수퍼 타입이다.
// Dog 는 Animal 의 필수 프로퍼티를 모두 가지고 있는 서브타입이다.
// a = b; // OK
// b = a; // 오류

let animalFunction = (ani: Animal): void => {};
let dogFunction = (dog: Dog): void => {};

// 함수 매개 변수의 타입 호환은 일반적인 타입간의 호환과 반대로 생각해야 합니다.
// 아래 코드는 다음 처럼 시도한 것과 같습니다.
animalFunction = dogFunction;
// 함수명 (ani:Animal) {
//   ani.name // 성공
//   ani.color 로 접근하려고 하는 코드로 진행 됨. // 그래서 오류
// }

dogFunction = animalFunction;
// 함수명 (dog: Dog) {
//   ani.name  // 성공
//   ani.color // 성공
// }
```

## 리턴 타입이 `만약 호환되는 타입`이라면 어떻게 될까?

```ts
type A = (value: number) => 10;
type B = (value: number) => number;

let a: A = (value) => 10;
let b: B = (value) => value;

// 우리가 생각하는 Super 타입과 Sub 타입의 호환이 유진된다.
a = b; // 오류
b = a; // OK
```

## 함수 오버로딩
