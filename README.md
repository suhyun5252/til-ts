# 타입 단언 (Type Assertion)

- `타입스크립트야 이건 내가 타입을 정한게 맞아`
- 개발자가 타입을 보증한다는 의미
- 검사하지말고 나를 믿어줘
- 컴퍼일러를 속이는 과정이다.

```ts
type Person = {
  name: string;
  age: number;
};

// 아래는 타입추론에서 : {} 어노테이션으로 판단
// 프로퍼티 name, 프로퍼티 age 가 없다고 오류
let who = {};
who.name = "hong";
who.age = 100;

// 필수 프로퍼티가 할당 안됨.
let who2: { name: string; age: number } = {};

// 옵션은 개발자의 의도가 아닌 회피 방법
let who3: { name?: string; age?: number } = {};

// 최종 책임을 개발자가 지겠다. 타입 검사 취소
let who4 = {} as Person;
who4.name = "hong";
who4.age = 100;
who4.go = 100; // 없는 속성은 잘 잡아준다.
```

## 1. any 타입을 명확한 타입으로 단언

```ts
let value: any = "Hello";
let count: number = (value as string).length;
```

## 2. DOM 을 활용할 때

```ts
const root = document.getElementById("root") as HTMLElement;
const inputTag = document.querySelector("input");
(inputTag as HTMLInputElement).value = "hi";
```

## 3. 유니온 타입중 하나를 지정하기

```ts
type User = { name: string };
type Admin = { name: string; admin: boolean };

let person: User | Admin = { name: "hong", admin: true };

console.log(person as Admin);
```

## 4. Null 이 아닌 값으로 단언

- 이거 절대 null 아니라고 개발자가 알려준다.

```ts
let tag = document.querySelector("div");
(tag as HTMLDivElement).innerHTML = "Hello, world";
```

## 5. const 단언

- 상당히 편리하게 사용할 수 있다.

```ts
let num = 10 as const;

// as const 활용시 readonly 가 셋팅되어서 변경 불가
let animal = {
  name: "야옹",
  age: 10,
} as const;

animal.age = 10; // 오류
// 아래처럼 된다.
let animal2 = {
  name: "야옹",
  age: 10,
} as const;
```

## 6. 타입 좁히기(Type Narrowing) 과 함께 활용

```ts
function show(value: string | number) {
  // 타입 좁히기
  if (typeof value === "string") {
    console.log((value as string).toUpperCase());
  } else {
    console.log((value as number).toFixed(2));
  }
}
```

## 7. 타입단언 사용시 주의 유형.

- 모든 타입을 타입 단언으로 해결되지 않는다.
- 수퍼타입과 서브타입을 고민해야 한다.

```ts
let num: number = 10 as never;
// 10은 number 이고
// never 는 모든 타입의 서브타입
// 10 수퍼타입이므로 단언이 가능함.
let num2 = 10 as unknown;
// 10 은 number 이고
// unknow 은 최상위 수퍼타입
// 10 은 unknow 의 서브 타입이므로 단언이 가능

let num3 = 10 as string; //오류
//  10 은 number 이고
// string 은 number 의 수퍼 또는 서브 타입이 아님
//  단언이 불가

//  아래는 좋지 않은 단언 샘플
let num4 = 10 as unknown as string;
```
