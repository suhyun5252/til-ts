# Primitive (기본데이터 형)

- js 와 ts 에 모두 있는 데이터 형

```ts
// Primitive (기본데이터 형)
// 6개의 타입 (js 와 ts 공용으로 사용함)
const stringVar: string = "hello";
const numberVar: number = 123;
const boolVar: boolean = true;
const nullVar: null = null;
const undefinedVar: undefined = undefined;
const symbolVar: Symbol = Symbol("hello");
// const bigIntVar: bigint = BigInt(99999999);
```

- ts 에만 존재하는 타입
- any 와 unknown 은 아무 값이나 할당할 수 있다.
- any 는 어느 곳에서나 값을 할당할 수 있고,
- `unknown 은 아무곳에서도 값을 할당할 수 없다.`

```ts
// any 는 아무 타입이나 할당할 수 있습니다.
// type 체크 안합니다.
// 과도하게 사용하시면 곤란합니다.
let anyVar: any;
anyVar = stringVar;
anyVar = numberVar;
anyVar = boolVar;
anyVar = nullVar;
anyVar = undefinedVar;
anyVar = symbolVar;

// any 라는 타입을 string 에 대입함.
let newStringVar: string = anyVar; // OK
let newNumberVar: number = anyVar; // OK

// unknown - 타입을 알수 없다.
let unknownVar: unknown;
unknownVar = stringVar;
unknownVar = numberVar;
unknownVar = boolVar;
unknownVar = nullVar;
unknownVar = undefinedVar;
unknownVar = symbolVar;

// unknown 라는 타입을 string 에 대입함.
let newStringVar2: string = unknownVar; // Error
let newNumberVar2: number = unknownVar; // Error

// any 와 unknown 은 값을 대입할 때 다르다.
```

# Object (배열, 객체)

## 배열 : 리스트 (list, array)

```ts
const numberArr: number[] = [1, 2, 3];
const stringArr: string[] = ["a", "b", "c"];
const booleanArr: boolean[] = [true, false];
const stringNumberArr: (string | number)[] = ["a", 1, "b", 5];
const stringNumberBoolenaArr: (string | number | boolean)[] = [
  "a",
  1,
  true,
  "b",
  5,
];
// 제네릭 이용한다면?
const numberArrG: Array<number> = [1, 2, 3];
const stringArrG: Array<string> = ["a", "b", "c"];
const booleanArrG: Array<boolean> = [true, false];
const stringNumberArrG: Array<string | number> = ["a", 1, "b", 5];
const stringNumberBoolenaArrG: Array<string | number | boolean> = [
  "a",
  1,
  true,
  "b",
  5,
];
```

## 오브젝트

```ts
const obj: object = {};
const personObject: { name: string; age: number } = { name: "홍", age: 10 };
```

# type

- 개발자가 이름을 만들어서 정의하는 데이터타입
- ts에 만 존재

```ts
/**
 * type
 */
type StringType = string;
const stringT: StringType = "Hello";

type NumberType = number;
const numberT: NumberType = 100;

type NullType = null;
const nullT: NullType = null;

// 유니온을 이용한다면?
type StringNumberType = string | number;
let stringNumberType: StringNumberType = 1;
stringNumberType = "Hello";
// stringNumberType = false; // 오류 발생

type GenderType = "male" | "female";
let genderType: GenderType = "female";
genderType = "male";
// genderType = "제3의"; // 오류발생

// 객체를 타입으로 만들기
type TidolType = { name: string; age: number };
```

# interface

- 개발자가 만드는 객체 모양의 데이터 타입

```ts
/**
 * interface
 * type 은 기본형 데이터를 사용가능하지만
 * interface 는 무조건 객체리터럴 형이어야 한다.
 */
type TidolType = { name: string; age: number };
interface IidolType {
  name: string;
  age: number;
}
// 현재까지는 type 과 interface 는 차이가 없다.
// 차이점은 = 을 사용하는가 아닌가라는 문법

const bts: { name: string; age: number } = { name: "BTS", age: 10 };
const iu: { name: string; age: number } = { name: "아이유", age: 30 };
const blankPink: { name: string; age: number } = { name: "블랙핑크", age: 25 };

// 타입

const bts1: TidolType = { name: "BTS", age: 10 };
const iu1: TidolType = { name: "아이유", age: 30 };
const blankPink1: TidolType = { name: "블랙핑크", age: 25 };

// 인터페이스
const bts2: IidolType = { name: "BTS", age: 10 };
const iu2: IidolType = { name: "아이유", age: 30 };
const blankPink2: IidolType = { name: "블랙핑크", age: 25 };

// 객체 속성의 옵션 ?을 살펴보자.
type OptionalIdol_Type = {
  name: string;
  age: number;
  year?: number;
};

interface OptionalIdol_Interface {
  name: string;
  age: number;
  year?: number;
}

const iuT: OptionalIdol_Type = { name: "아이유", age: 30 };
iuT.year = 100; // 좋지 않아요.
const btsI: OptionalIdol_Interface = { name: "BTS", age: 35 };
btsI.year = 2025; // 좋지 않아요.
```

- type 과는 다르게 interafce 는 무조건 객체 리터럴 타입 만 들어감
- interface 는 Primitive 를 할당할 수 없다.

# Enum

- 여러 개의 상수를 정의하고 사용할때 편리
- 외부 연동시 활용 추천

```ts
// 외부 연결 상태
function runNetwork() {
  let status: string = "INITIAL";
  try {
    status = "LOADING";
    // 중간 처리...
    status = "DONE";
  } catch (error) {
    status = "ERROR";
  } finally {
    return status;
  }
}
// 오타 발생 위험
if (runNetwork() === "DONE") {
  console.log("성공");
} else {
  console.log("실패");
}

// 오타 발생 위험 회피
const initState = "INITIAL";
const loadingState = "LOADING";
const doneState = "DONE";
const errorState = "ERROR";
// 외부 연결 상태
function runNetwork2() {
  let status: string = initState;
  try {
    status = loadingState;
    // 중간 처리...
    status = doneState;
  } catch (error) {
    status = errorState;
  } finally {
    return status;
  }
}
// 오타 발생 위험
if (runNetwork() === doneState) {
  console.log("성공");
} else {
  console.log("실패");
}

// enum 을 이용한 상수로 처리
// 관례상 속성은 대문자를 사용함.
enum Status {
  INITIAL = "init", // 기본값 0
  LOADING = "loading",
  DONE = "done",
  ERROR = "error",
}
// 외부 연결 상태
function runNetwork3() {
  let status: string = Status.INITIAL;
  try {
    status = Status.LOADING;
    // 중간 처리...
    status = Status.DONE;
  } catch (error) {
    status = Status.ERROR;
  } finally {
    return status;
  }
}
// 오타 발생 위험
if (runNetwork() === Status.DONE) {
  console.log("성공");
} else {
  console.log("실패");
}
```

# 타입 추론

- 타입 어노테이션 없이 타입 추론

```ts
/**
 * Type Inference (타입추론)
 */

// let str: string
let str = "hello";
// let num: number
let num = 100;

// const strConst: "hello"
const strConst = "hello";
// const numConst: 100
const numConst = 100;

// let bts: {  name: string;  age: number;}
let bts = {
  name: "bts",
  age: 30,
};
bts.name = "비티에스";
// const iu: {  name: string;  age: number; }
const iu = {
  name: "아이유",
  age: 30,
};
iu.name = "iu";

// 객체를 const 화 하자.
// const blackPink: {   readonly name: "블랙핑크";  readonly age: 30; }
const blackPink = { name: "블랙핑크", age: 30 } as const;
// blackPink.name = "HAHA"; // 읽기 전용 오류
```

```ts
/**
 * Type Inference (타입추론)
 */
// Array
// let numberArr: number[]
let numberArr = [1, 2, 3];
numberArr[0] = 100; // 가능함
numberArr.push(2500); // 가능함
// numberArr.push("300"); // 타입오류

// let numberOrStringArr: (string | number)[]
let numberOrStringArr = [1, "2", 3, "4"];
numberOrStringArr[0] = "안녕하세요."; // 가능함
numberOrStringArr.push("반가워요"); // 가능함
// numberOrStringArr.push(false); // 타입오류

// Tuple
// 배열의 요소의 개수와 각 요소의 데이터 타입 미리 정의
// type const = readonly [1, 2]
const towNumberArr = [1, 2] as const;
// towNumberArr.push(5); // 오류
// towNumberArr[500] = 100; // 오류

// let towNumberArr2: readonly [1, 2]
let towNumberArr2 = [1, 2] as const;
// towNumberArr2[0] = 100; // 오류
```

# Casting (캐스팅)

- 타입 추론을 조금더 개발자가 구체화하는 것.
- 특정 타입으로 지정하는 것.
- js 에서는 없는 개념(ts 에만 존재)
- as 는 타입을 강제로 변환하는데 정말 조심하자.
- ts 에서는 오류가 아닌데, 런타임에서는 오류발생 가능성

```ts
/**
 * Casting (캐스팅)
 */
const numberVar = 20;
// const numberVar: 20 으로 추론
// 아래는 `문자열`을 대문자로 모두 고치기 함수
// numberVar.toUpperCase();  // 오류

const sampleNumber: any = 5;
// ts 에서 타입체크 못하고 런타임에 오류가 발생함.
sampleNumber.toUpperCase(); // 런타임 오류

let count = 20;

// 무수한 코드 진행 후  필요에 의해서 아래 코드 진행
// 아래 코드는 개발자가 이건 반드시 string 이니까 믿어줘.
// let num: string
let num = count as unknown as string;
// 오류는 해결했지만, 런타임에는 오류가 발생합니다.
num.toUpperCase(); //  대문자로 고치기
```

# Union 기초

- 타입들을 합칠(병합) 수 있는 여러 방법 중 하나이다.

```ts
/**
 * Union 기본
 */
type StringOrBool = string | boolean;
let sb: StringOrBool = "안녕";
sb = false;

type StringOrBoolOrNull = string | boolean | null;
let sbn: StringOrBoolOrNull = "안녕";
sbn = false;
sbn = null;

type StateType = "LOADING" | "DONE" | "ERROR" | "INIT";
let state: StateType = "DONE";
// state = "GO"; // 타입오류

// 배열(리스트)의 Union
type StringArrOrBoolArr = string[] | boolean[];
let saoba: StringArrOrBoolArr = ["아이유", "블랙핑크"];
saoba = [true, false, false];
// saoba = ["아이유", false]; // 타입 오류

type StringBoolArr = (string | boolean)[];
let sba: StringBoolArr = ["아이유", false];

// 인터페이스 Union
interface Animal {
  name: string;
  age: number;
}
interface Human {
  name: string;
  age: number;
  address: string;
}
type AnimalOrHuman = Animal | Human;
let aoh: AnimalOrHuman = { name: "아이유", age: 30, address: "서울" };

// let aoh: Human
aoh;
// (property) Human.address: string
aoh.address;
// (property) Human.name: string
aoh.name;
// (property) Human.number: string
aoh.age;

aoh = { name: "댕댕이", age: 5 };
// let aoh: Animal
aoh;
aoh.age;
aoh.name;
// 'Animal' 형식에 'address' 속성이 없습니다
// aoh.address; // 오류
// (aoh as Human).address // 런타임 오류발생함. 반드시 확인을 하는 것을 추천

// 위의 내용과는 완전 다르게 겹치는 속성이 없는 경우
// 위에서는 name 과  age 가 겹쳐 있었다.
type Person = {
  name: string;
  age: number;
};
type Cat = {
  breed: string;
  country: string;
};
type PersonOrCat = Person | Cat;

let iu: PersonOrCat = {
  name: "아이유",
  age: 30,
};

let cat: PersonOrCat = {
  breed: "스핑크스",
  country: "이집트",
};
let who: PersonOrCat = {
  name: "아이유",
  age: 30,
  breed: "스핑크스",
  country: "이집트",
};
let who2: PersonOrCat = {
  name: "아이유",
  age: 30,
  // breed: "스핑크스",
  // country: "이집트",
};
let who3: PersonOrCat = {
  // name: "아이유",
  // age: 30,
  breed: "스핑크스",
  country: "이집트",
};

let who4: PersonOrCat = {
  name: "아이유",
  // age: 30,
  breed: "스핑크스",
  country: "이집트",
};

let who5: PersonOrCat = {
  // name: "아이유",
  age: 30,
  breed: "스핑크스",
  country: "이집트",
};

let who6: PersonOrCat = {
  name: "아이유",
  age: 30,
  // breed: "스핑크스",
  country: "이집트",
};

let who7: PersonOrCat = {
  name: "아이유",
  age: 30,
  breed: "스핑크스",
  // country: "이집트",
};

// 아래는 오류가 발생한다.
// 어떤 타입이라도 필수 요소가 반드시 충족되고 추가되는 것은 상관없다.

// 어떤 타입에도 필수 요소가 충족되지 않으면 오류가 발생한다.
let who8: PersonOrCat = {
  name: "아이유",
  // age: 30,
  // breed: "스핑크스",
  country: "이집트",
};
```

# Intersection Type

- 타입을 합칠때 모든 타입을 만족하는 타입

```ts
/**
 * Intersection Type
 * Union 은 하나는 만족해야 돼, 즉 Or 의 조건
 * Intersectin 은 모두 만족해야 돼. 즉 And 의 조건
 */

// Interface
interface Human {
  name: string;
  age: number;
}
interface Contact {
  phone: string;
  address: string;
}

type HumanAndContact = Human & Contact;
let iu: HumanAndContact = {
  name: "아이유",
  age: 30,
  address: "서울",
  phone: "000",
};

// 예외사항 (기본형에서는 관례상 사용하지 않는다.)
// 절대로 존재할수 없다는 표현이 never
// type StringAndNumber = never
type StringAndNumber = string & number;
// let iu2:StringAndNumber = never; 오류
```

# Narrowing (타입 좁히기)

- Union 을 이용해서 만들어진 타입에 구체적인 타입으로 변환

```ts
/**
 * Narrowing
 */
let numberOrString: number | string;
// let numberOrString: string | number
numberOrString = "아이유";

// 타입 좁히기 가 일어났다.
// let numberOrString: string
numberOrString;

// 특정 값을 할당해서 타입 좁히기
let numberOrString2: number | string = "아이유";
// let numberOrString2: string
numberOrString2;

// typeof 연산자를 사용해서 타입 좁히기
// js 가 런타임 중에 값이 결정되는 상황을 만들어 봄
let numberOrString3: number | string = Math.random() > 0.5 ? 123 : "아이유";

if (typeof numberOrString3 === "string") {
  // let numberOrString3: string
  numberOrString3;
} else {
  // let numberOrString3: number
  numberOrString3;
}

// 조건문에서 특정 값을 할당해서 타입 좁히기
let nullOrString4: null | string[] =
  Math.random() > 0.5 ? null : ["아이유", "블랙핑크"];

if (nullOrString4) {
  // let nullOrString4: string[]
  nullOrString4;
} else {
  // let nullOrString4: null
  nullOrString4;
}

// 비교문을 이용해서 타입 좁히기
// JS 에서는 불가능하지만 TS 에서는 타입 비교를 사용할 수 있다.
let numberOrString5: number | string = Math.random() > 0.5 ? 123 : "아이유";
let stringOrBool: string | boolean = Math.random() > 0.5 ? "아이유" : true;

if (numberOrString5 === stringOrBool) {
  // let numberOrString5: string
  numberOrString5;
  // let stringOrBool: string
  stringOrBool;
} else {
  // let numberOrString5: string | number
  numberOrString5;
  // let stringOrBool: string | true
  stringOrBool;
}

let numberOrStringOrNull: number | string | null =
  Math.random() > 0.5 ? 123 : Math.random() > 0.5 ? "아이유" : null;
if (typeof numberOrStringOrNull === "number") {
  // let numberOrStringOrNull: number
  numberOrStringOrNull;
} else {
  // let numberOrStringOrNull: string | null
  numberOrStringOrNull;
}

// in 연산자로 타입 좁히기
interface Human {
  name: string;
  age: number;
}
interface Dog {
  name: string;
  type: string;
}
let human: Human = { name: "아이유", age: 30 };
let dog: Dog = { name: "뽀삐", type: "강아지" };

let humanOrdog: Human | Dog = Math.random() > 0.5 ? human : dog;
if ("age" in humanOrdog) {
  // let humanOrdog: Human
  humanOrdog;
} else {
  // let humanOrdog: Dog
  humanOrdog;
}

// instanceof 연산자로 타입 좁히기
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : "아이유";
if (dateOrString instanceof Date) {
  // let dateOrString: Date
  dateOrString;
} else {
  // let dateOrString: string
  dateOrString;
}

// Discriminated Union
// 특정 속성에 상수로 문자열을 배치해서 비교하여 타입 좁히기
interface Animal {
  type: "dog" | "human";
  height?: number;
  breed?: string;
}
let animal: Animal =
  Math.random() > 0.5
    ? { type: "human", height: 180 }
    : { type: "dog", breed: "스핑크스" };
if (animal.type === "human") {
  animal.height;
} else {
  animal.breed;
}
// 위의 사항은 정확한 타입을 좁혀준 상황이 아니다.
interface Human2 {
  type: "human";
  height: number;
}
interface Dog2 {
  type: "dog";
  breed: string;
}
type HumanOrDog2 = Human2 | Dog2;
let animal2: HumanOrDog2 =
  Math.random() > 0.5
    ? { type: "human", height: 180 }
    : { type: "dog", breed: "스핑크스" };
if (animal2.type === "human") {
  // let animal2: Human2
  animal2;
} else {
  // let animal2: Dog2
  animal2;
}
switch (animal2.type) {
  case "human":
    // let animal2: Human2
    animal2;
    break;
  case "dog":
    // let animal2: Dog2
    animal2;
    break;
}
```

# 함수

```ts
/**
 * 함수
 */
// 기본적으로 함수 파라메터는 any 로 생각합니다.
// 가능 하면 배제하고, 그래도 모르겠으면
// 차라리 unknown 주고 타입 좁히기 (Narrowing) 하는 걸 추천
function showName(name: any) {
  console.log(name);
}

function showName2(name: string) {
  console.log(name);
}

// 옵션 파라메터
function showMember(name: string, age?: number) {
  console.log(name, age);
}
showMember("홍", 12);
showMember("홍");

// Rest 파라메터
// ...rest 는 배열타입이다.
function showInfo(...args: string[]) {
  console.log(args);
}

function showInfo2(age: number = 0, ...args: string[]) {
  console.log(args);
}

// 함수의 리턴타입

// function add(a: number, b: number): number   추론됨
function add(a: number, b: number) {
  return a + b;
}
function add2(a: number, b: number): number {
  return a + b;
}

// function ran(): "아이유" | 123   추론
function ran() {
  return Math.random() > 0.5 ? "아이유" : 123;
}
function ran2(): "아이유" | 123 {
  return Math.random() > 0.5 ? "아이유" : 123;
}

// void 반환타입
// 아무것도 돌려주지 않아요.
function notReturn(): void {
  //  ...
}

// never 반환타입
// 존재할 수 없다.
function throwError(): never {
  throw new Error("내가 던지는 에러");
}
// 무한반복 절대로 결과값 안나오는 케이스
function loop(): never {
  while (true) {
    // 실행
  }
}
```

# 함수 시그니처로 타입선언

- 시그니처란? 선언 구조

```ts
/**
 * 함수 시그니처로 타입 구성
 */

// type 으로 함수의 타입 정의하기
const runner = () => {
  return ["아이유", "블랙핑크"].map((x) => x);
};

type Mapper = (x: string) => string;

const runner2 = (callback: Mapper) => {
  return ["아이유", "블랙핑크"].map(callback);
};

runner2((x) => `${x} 입니다`);

type TwoMembers = (a: number, b: number) => number;

// const twoFun: (a: number, b: number) => number
const twoFun = (a: number, b: number): number => a + b;
const twoFunT: TwoMembers = (a, b) => a + b;

const add = (a: number, b: number): number => a + b;
const minus = (a: number, b: number): number => a - b;
const multi = (a: number, b: number): number => a * b;
const divide = (a: number, b: number): number => a / b;

const add2: TwoMembers = (a, b) => a + b;
const minus2: TwoMembers = (a, b) => a - b;
const multi2: TwoMembers = (a, b) => a * b;
const divide2: TwoMembers = (a, b) => a / b;

// interface 로 함수의 타입 정의하기
interface ITwo {
  // 키명 : 키값
  (a: number, b: number): number;
}

const add3: ITwo = (a, b) => a + b;
const minus3: ITwo = (a, b) => a - b;
const multi3: ITwo = (a, b) => a * b;
const divide3: ITwo = (a, b) => a / b;
```

# 함수 오버로딩

- 이렇게 하시면 코드가 더 복잡해 질겁니다.
- 알아만 두시면 어떨지.

```ts
/**
 * 함수 오버로딩
 * 하나의 함수로 여러개의 처리를 진행하도록 구성
 */
// 매개 변수 1개, 매개변수 3개만 받아서 출력하는 함수
// 그런데 함수의 이름은 같다.

function showString1(a: string): void {
  console.log(a);
}

function showString3(a: string, b: string, c: string): void {
  console.log(a, b, c);
}

// 나는 3개로 처리할거야 ? 를 사용할 거야.
function showString(a: string, b?: string, c?: string): void {
  if (b && c) {
    console.log(a, b, c);
  } else {
    console.log(a);
  }
}

showString("A");
showString("A", "B", "C");
showString("A", "B"); // 오류는 아닌데 원하지않는 기능이라서 오류

// 함수 오버로딩
// 매개 변수 1개, 매개변수 3개만 받아서 출력하는 함수
// 그런데 함수의 이름은 같다.
function showStringOver(a: string): void;
function showStringOver(a: string, b: string, c: string): void;
// 오버로딩 구현체
function showStringOver(a: string, b?: string, c?: string): void {
  if (b && c) {
    console.log(a, b, c);
  } else {
    console.log(a);
  }
}
showStringOver("A");
showStringOver("A", "B", "C");
// showStringOver("A", "B"); // 오류는 오버로딩 정의에 없으니까
```

# Type Predicate(타입 프리디케이트)

- 어떤 종류의 데이터 타입인지를 확인해서 `데이터 타입 또는 boolean을 리턴`해줌.

```ts
/**
 * Type Predicate(타입 프리디케이트)
 */

// 숫자 데이터타입인지 아닌지 알아내는 함수
// true 또는 false 만 알수 있다.
// 리턴값의 타입은 알수 없다.
// 리턴값의 타입을 알아낼 수는 없을까?
function isNumber(변수명: any) {
  return typeof 변수명 === "number";
}
// let a: boolean
// 나는 a 가 number 라고 타입이 추론되기를 원했다.
// 그런데 a가 boolean 이다.
// 타입을 알아낼 수 없네.
let a = isNumber(123);

// let b: boolean
let b = isNumber("안녕");

// 나는 true / false 가 아니고
// 리턴되는 값의 타입을 알고 싶다.
// 그때 사용하는 게 타입 프리디케이트이다.
function isNumber2(변수명: any): 변수명 is number {
  return typeof 변수명 === "number";
}
// let a2: number
let a2 = 123;
if (isNumber2(a2)) {
  // let a2: number
  a2;
}

// let b2: string
let b2 = "안녕";

if (isNumber2(b2)) {
  // let b2: never;
  // 예는 원래 string 이었는데 never 로 변경되었다.
  // never 는 존재할 수 없는 타입이다.
  b2;
}

/**
 * interface 에서 타입알아내기
 */
interface Dog {
  name: string;
  age: number;
}
interface Cat {
  name: string;
  breed: string;
}
type DogOrCat = Dog | Cat;

// 나는 Dog 타입인지, Cat 타입인지 정확히 타입을 좁히고 싶다.
// Dog 타입이라면 Dog 에 대한 코딩 처리
// Cat 이라면 Cat 에 대한 코딩 처리
// 여기서는 true/false 가 아닌 타입을 리턴 받고 싶다.

// boolean 리턴
function isDog(변수명: DogOrCat): boolean {
  return (변수명 as Dog).age !== undefined;
}

// type 리턴
function isDogTypeReturn(변수명: DogOrCat): 변수명 is Dog {
  return (변수명 as Dog).age !== undefined;
}

const doge: DogOrCat = { name: "강아지", age: 5 };
// true / false 체크 및 boolean
// 분명히 const doge: DogOrCat 라고 타입을 정의했다.
if (isDog(doge) === true) {
  // 타입 좁히기 성공
  // const doge: Dog
  doge;
  doge.age;
} else {
  // const doge: Dog 라고 나오면 이상한거 아닌가요?
  doge;
  doge.age;
}
// 타입 체크 및 타입 리턴
// 분명히 const doge: DogOrCat 라고 타입을 정의했다.
// 아래 구문에서는
// const doge: Dog 로 변환이 된다.
if (isDogTypeReturn(doge)) {
  // 정확히 Dog 타입이 확인 되었으므로 dog 에 대한 코딩 처리 가능..
  doge;
  doge.age;
} else {
  // const doge: never 로 추론됨
  // 아래는 타입이 never 로 변경되었으므로 Dog 속성을 사용할 수 없다.
  doge;
  doge.age; // 오류 , 정확히 타입 체크 했으므로 오류가 맞다.
}
```

# type 과 interface 의 차이 4

- 1 번은 type 과 interface 는 만드는 법이 다르더라.

```ts
type A = { age: 1 };
interface A {
  age: 1;
}
```

- 2 번은 type 에는 데이터타입 할당, interface 는 할당못함

```ts
type A = string
interface string // 이런 문법 없다.
```

- 3번 type 과 interfac 의 함수 시그니처(구조) 정의 차이

```ts
type A = (x: number) => number;
interface A {
  // 키명: 키값
  (x: number): number;
}
```

```ts
/**
 * type 과 inteface 차이 4
 */

// type 에서만 가능해요.
type String = string;
type unionT = string | number;
type tupleT = [string, number];

// interface 에서만 가능해요.
// interface 합치기

// 같은 이름으로 정의가 가능하다.
interface Box {
  width: number;
}
interface Box {
  // 같은 이름은 사용가능하다.
  // 하지만 타입 변경은 불가능하다.
  // width: string; // 타입오류

  height: string;
}
// 합성된 예
const box: Box = { width: 10, height: "길다" };

// 타입은 같은 이름 안되요.
// type Go = {}
// type Go = {}

// 참고
class Review {
  // 속성: Property (인스턴스 에 소속)
  getX = (x: string) => {
    return x;
  };

  // 메소드 : Method (프로토타입 에 소속)
  getXY(x: string) {
    return x;
  }
}

// 프로퍼티 방식으로 Merging 하기
interface GetXnY {
  // 프로퍼티 형식
  getX: (x: number) => number;
  getY: (y: number) => number;
}
interface GetXnY {
  getX: (x: number) => number;
  // getY: (y: number) => number;
  // getY: (y: string) => number; // 오류 발생 (매개변수 타입 달라서)
  // getY: (y: number) => string; // 오류 발생 (리턴 타입 달라서)
}

// 메소드 방식으로 Merging 하기
interface GetXnYMethod {
  // 프로퍼티 형식
  // getXP: (x: number) => number;
  // getYP: (y: number) => number;

  // 메소드 형식
  getX(x: number): number;
  getY(y: number): number;
}

interface GetXnYMethod {
  // 메소드 형식
  // getX(x: number): number;
  // getY(y: number): number;
  // getY(y: string): number; // 매개변수 타입 바꿔도 됩니다.
  getY(y: string): string; // 리턴 타입 바꿔도 됩니다.
  // getY(y: string, z: number): string; // 매개변수 개수를 바꾸어도 된다.
}

const testM: GetXnYMethod = {
  // (parameter) x: number
  getX(x) {
    return x;
  },

  // (parameter) y: string | number
  // 아래 오류 해결 필요
  getY(y) {
    if (typeof y === "string") {
      return y; // string을 반환
    } else {
      return y; // number를 반환
    }
  },
};

// 아래 코드로 진행 요청 1

interface GetXnYMethod {
  getX(x: number): number;
  getY(y: number): number;
  getY(y: string): string;
}

const testM: GetXnYMethod = {
  getX(x) {
    return x;
  },

  getY(y: number | string) {
    return y as any;
  },
};

// 아래 코드로 진행 요청 2
interface GetXnYMethod {
  getX(x: number): number;
  getY(y: number): number;
  getY(y: string): string;
}

const testM2: GetXnYMethod = {
  getX(x) {
    return x;
  },

  getY(y: any): any {
    return y;
  },
};
```

# type 의 확장과 interface 의 확장

```ts
/**
 * type 의 확장과 interface 의 확장
 * 누군가가 정의한 type 과 interface 에 필요로 한
 * 타입들을 추가로 기재하는 법
 */
// interface 확장 ( extends )
interface IName {
  name: string;
}
interface IAge extends IName {
  age: number;
}
const iu: IAge = { age: 10, name: "아이유" };

// type 의 확장 ( & 를 통해서 확장을 한다.)
type TName = {
  name: string;
};
type TAge = TName & {
  age: number;
};
const bp: TAge = { age: 10, name: "아이유" };

// 인터페이스를 type 을 이용해서 확장하기
interface INameAge extends TName {
  age: number;
}
const bts: INameAge = { age: 30, name: "bts" };

// 인터페이스를 이용해서 인터섹션 가능하다.
type TNameAge = IName & {
  age: number;
};

/**
 * 타입 여러개를 상속받아서 확장 하는 법
 * & 를 이용한다.
 */
type DogName = {
  name: string;
};
type DogAge = {
  age: number;
};
type DogBreed = {
  breed: string;
};

type Dog = DogName & DogAge & DogBreed;
/**
 * interface 여러개를 상속받아 확장
 */
interface CatName {
  name: string;
}
interface CatAge {
  age: number;
}
interface Cat extends CatName, CatAge {
  breed: string;
}

/**
 * Overriding
 */
type THeight = {
  height: number;
};
type TRectangle = THeight & {
  height: string;
  width: number;
};
// string 과 number 를  & 하시면 never 타입이 나옴
// never 는 존재할 수 없는 타입이다.
const box: TRectangle = {
  // height: never
  // height: 10, // 오류발생

  // height: never
  // height: "10", // 오류발생

  width: 10,
};

// 위와 같은 상황을 해결하려면
type TWidth = {
  width: string | number;
};
type TRectangle2 = TWidth & {
  width: number;
  height: number;
};
const box2: TRectangle2 = {
  height: 10,
  // (property) width: number
  // 타입 좁히기로 해결함.
  // 좋지는 않은 거 같아요.
  width: 10,
};

// 인터페이스의 예
// 타입을 반드시 맞추어준다.
interface IHeight {
  height: number;
}
interface IWidth {
  width: number;
}
interface IRectangle extends IHeight {
  height: number; // 타입을 반드시 맞추어준다.
  // height:string // 타입 오류가 발생
  width: number;
}
```

# Tuple

- js 에는 존재하지 않음.

```ts
/**
 * Tuple
 * 요소의 데이터 타입과, 개수를 지정할 수 있다.
 * 무조건 순서에 맞는 타입의 요소를 넣어야 한다.
 * Tuple 도 배열
 */

let idolMembers: string[] = ["아이유", "핑클", "블랙핑크"];

// 튜플
let idolMembersTuple: [string, string, string] = ["아이유", "핑클", "블랙핑크"];
// 무조건 순서에 맞는 타입의 요소를 넣어야 한다.
let iu: [number, string] = [30, "아이유"];

iu.push("소녀시대"); // js 에서 배여롤 바뀌므로 오류없음. [30, "아이유", "소녀시대"]

// Tuple의 요소 개수를 지켜주려면
let blackPink: readonly [number, string] = [32, "제시"];
// blackPink.push("홍길동"); // 오류 :  readonly 에 의해서 유지됨.

// 배열 값을 tuple 로 정의하는 법
// let iodls: readonly [30, "아이유"]
let iodls = [30, "아이유"] as const;

/**
 * Named Tuple
 * 요소 타입의 이름을 주는 문법
 */
let actors: [string, number] = ["이병헌", 50];
let actors2: [name: string, age: number] = ["이병헌", 50];

/**
 * Tuple 과 Tuple 을 할당
 */
let ages: [number, number] = [1, 2];
// 아래는 가능
let sampleAges: [number, number] = ages;

// 아래는 타입이 맞지 않아서 오류
// let sampleAges2: [string, number] = ages;

// 요소 개수가 맞지 않아서 오류
// let sampleAges3: [number, number, number] = ages;

/**
 * Multi Dimenstion Tuple
 * */
const idol2DTuple: [string, number][] = [
  ["아이유", 30],
  ["블랙핑크", 32],
];
```

# TS 객체 상세히 알아보기

```ts
/**
 * 객체
 */
let obj: {
  age: number;
  name: string;
} = {
  age: 30,
  name: "아이유",
};

interface IPerson {
  age: number;
  name: string;
}

type TPerson = {
  age: number;
  name: string;
};

/**
 * 속성 초과 검사
 * - 객체 리터럴로 값을 할당하는 경우에만 ts 가 검사
 */

// 객체 리터럴로 정의한 객체
// 속성이 초과되었는지 검사를 ts 가 실행합니다.
// 아래의 예는 타입 정의가 없어서 실행하지 않고 있음.
const iu = {
  name: "아이유",
  age: 30,
};

type TName = {
  name: string;
};

// 객체 리터럴로 정의
const iu2: TName = {
  name: "아이유",
  // age: 30, // 오류발생 (속성이 초과됨)
};

type TAge = {
  age: number;
};

// 객체 리터럴로 정의
const iu3: TAge = {
  age: 30,
  // name: "아이유" // 오류 발생 (속성이 초과됨)
};

// 아래 부터 조심해야 합니다.
const bpink = {
  age: 32,
  name: "블랙핑크",
};
// 변수 즉 객체리터럴이 아닌 경우는 초과검사를 ts 가 안함.
const bpink1: TAge = bpink; // 이게 됩니다.? (초과 검사 안함.)

bpink1.age; // 정상임
// 실행시에 오류를 일으킴
// bpink1.name; // 오류로 잡습니다.
```

```ts
/**
 * 중첩 속성 객체
 * - 중첩 속성을 가능하면 정의하지 않습니다.
 * - 별도의 정의를 진행하는 것이 좋음.
 */
type Person = {
  identity: {
    name: string;
    age: number;
  };
  county: string;
};
const iu: Person = {
  identity: {
    name: "아이유",
    age: 30,
  },
  county: "한국",
};

// 중첩은 배제하자.
type Identity = {
  name: string;
  age: number;
};
type TPerson = {
  identity: Identity;
  country: string;
};
const iu2: TPerson = {
  identity: {
    name: "아이유",
    age: 30,
  },
  country: "한국",
};
```

```ts
/**
 * 객체 끼리의 Union
 */
const dogCat =
  Math.random() > 0.5
    ? { name: "멍멍이", age: 3 }
    : { name: "야옹", breed: "샴" };

/*
const dogCat: {
    name: string;
    age: number;

    breed?: undefined;

} | {
    name: string;
    breed: string;

    age?: undefined;

}
*/

dogCat;

// (property) name: string
dogCat.name;

// (property) age?: number | undefined
dogCat.age;

// (property) breed?: string | undefined
dogCat.breed;

// 타입스크립트는 가능하면 타입 유추에 의해서 오류가 발생하는 것을 제거가능하면 해주자.
interface Dog {
  name: string;
  age: number;
}
interface Cat {
  name: string;
  breed: string;
}
type DogCat = Dog | Cat;
const dogCat2: DogCat =
  Math.random() > 0.5
    ? { name: "멍멍이", age: 3 }
    : { name: "야옹", breed: "샴" };
dogCat2.name; // 정상
// dogCat2.age; // 오류 발생
// dogCat2.breed; // 오류 발생

// 타입 좁히기로 데이터 파악
if ("age" in dogCat2) {
  // const dogCat2: Dog
  dogCat2;
} else {
  // const dogCat2: cat
  dogCat2;
}
```

```ts
/**
 * 객체 끼리의 인터섹션 &
 * 참고 (never)
 * type A = number & string
 */
type PersonT = {
  name: string;
  age: number;
};
type CompanyT = {
  company: string;
  comNumber: number;
};
type PersonAndCompany = PersonT & CompanyT;

// 모두 만족해야 한다.
const iu: PersonAndCompany = {
  age: 30,
  name: "아이유",
  comNumber: 111,
  company: "회사",
};
```

# Key Value 맵핑

- 키와 Value 값을 자동으로 맵핑 시키는 법

```ts
/**
 * Key Value 맵핑
 */
enum State {
  LOADING,
  SUCCESS,
  ERROR,
  INITIAL,
}
// API 타입 1
type ApiState = {
  getUser: State | string | number | undefined;
  paginateUser: State | undefined;
  defeceUser: State | null;
  getPost: State;
};

// API 타입 2
type UserApiState = {
  getUser: State | string | number;
  paginateUser: State | undefined;
  defeceUser: State | null;
};

// API 타입 3
// 아래처럼 구성하면 타입이 변경이 일어나도 추가 작업이 없다.
// 속성이 변화가 일어나도 한번에 모두 변화가 일어난다.
type UserApiState2 = {
  getUser: ApiState["getUser"];
  paginateUser: ApiState["paginateUser"];
  defeceUser: ApiState["defeceUser"];
};

// API 타입 4
type UserApiState3 = {
  [key in "getUser" | "paginateUser" | "defeceUser"]: ApiState[key];
};

// API 타입 5
// 유틸리티 타입 (수요일 쯤에 정리해 드릴께요.)

// Pick 원하는 것만 뽑을 경우
type UserApiState4 = Pick<ApiState, "getUser" | "paginateUser" | "defeceUser">;

// Omit 원하는 것만 제외하는 경우
type UserApiState5 = Omit<ApiState, "getPost">;

/**
 * keyof
 * 속성 값을 타입으로 알아내기
 */
type Allkeys = keyof ApiState;
const key1: Allkeys = "getUser";
const key2: Allkeys = "paginateUser";
const key3: Allkeys = "defeceUser";
const key4: Allkeys = "getPost";
// const key5: Allkeys = "Gogo"; // 오류

// API 타입 6
// 속성 모두 가져오기
type UserApiState6 = {
  [key in keyof ApiState]: ApiState[key];
};

// 유틸리티 사용해 보기
// 항목 한개 빼기
type UserApiState7 = {
  // getPost 속성은 제거하고 나머지를 뽑아서 정의하라
  [key in Exclude<keyof ApiState, "getPost">]: ApiState[key];
};

// 항목 한개 빼고 모두 옵션으로 바꾸어라
type UserApiState8 = {
  // getPost 속성은 제거하고 나머지를 뽑아서 정의하라
  [key in Exclude<keyof ApiState, "getPost">]?: ApiState[key];
};
```

# class

- 우리가 정의하기보다는 라이브러리들이 정의되어진 경우가 많다.

```ts
/**
 * 클래스
 */
// 정의하는 법
class SampleClass {}

// 기본형
class Game {
  // 속성
  name: string;
  country: string;
  count: number;
  // new Game(...) 하면 실행되는 인스턴스 생성자 함수
  constructor(name: string, country: string, count: number) {
    this.name = name;
    this.country = country;
    this.count = count;
  }
  // 메소드
  hi(): void {
    console.log(this.name, this.country, this.count);
  }
}
```

```ts
// 읽기 전용 속성
class Idol {
  // 속성 (읽기 전용)
  readonly name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const iu = new Idol("아이유", 30);
iu.name = "iu"; // 오류(읽기 전용)
iu.age = 10;
```

```ts
// 속성 초기화 하는 방법
class Person {
  // 필수로 값을 할당해야 합니다.(constructor 함수)
  name: string;
  // 초기값이 셋팅 되었어요.
  age: number = 20;
  // optional 선언
  pet?: string;
  // 아래는 undefined 라서 필수값 아님.
  petAge: number | undefined;

  constructor(name: string) {
    this.name = name;
  }
}
```

```ts
// 초기값은 내가 보증할게
class Go {
  // 반드시 있다는 표현 !
  stack!: string[];

  constructor() {
    this.init();
  }

  init() {
    this.stack = [];
  }
}
```

```ts
// 클래스는 데이터 타입으로 인정
// 클래스는 값의 타입으로 인정
class Dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  bark() {}
}

// let dog: Dog
let dog = new Dog("멍멍이");
// dog  = 123; // 타입오류
// dog = "댕이"; // 타입오류

dog = {
  name: "야용이",
  bark: () => {
    console.log("하이");
  },
};
```

```ts
// interface 를 구현(implements)
// 약속을 지켜서 모든 내용을 채워라
interface Animal {
  name: string;
  age: number;
  jump(): string;
}

class Dog2 implements Animal {
  // 구현을 해야 하는 항목
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  jump(): string {
    return this.name;
  }
  // 클래스 만의 기능
  go(): void {}
}

interface Pet {
  legs: number;
  bark(): void;
}
class Cat implements Animal, Pet {
  // Animal 구현
  name: string;
  age: number;
  // Pet 구현
  legs: number;
  constructor(name: string, age: number, legs: number) {
    this.name = name;
    this.age = age;
    this.legs = legs;
  }
  // Animal 구현
  jump(): string {
    return this.name;
  }
  // Pet 구현
  bark(): void {}
}

// 타입으로
type AnimalAndPet = Animal & Pet;

class Cat2 implements AnimalAndPet {
  // Animal 구현
  name: string;
  age: number;
  // Pet 구현
  legs: number;
  constructor(name: string, age: number, legs: number) {
    this.name = name;
    this.age = age;
    this.legs = legs;
  }
  // Animal 구현
  jump(): string {
    return this.name;
  }
  // Pet 구현
  bark(): void {}
}
```

```ts
// 아래 내용은 상당히 고급 내용인데 활용이 많이 됩니다.
// constructor 가 있는 인터페이스 정의
// 특히 제네릭에서 많이 활용

class IU {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
interface IConstructor {
  new (name: string, age: number): IU;
}

function createIU(constructor: IConstructor, name: string, age: number) {
  return new constructor(name, age);
}

let iu = createIU(IU, "아이유", 30);
```

```ts
/**
 * 클래스
 */

// 상속 (유전자 내려받고 확장한다.)
class Parent {
  name: string;
  // new Parent(...) 을 통해 인스턴스 생성됨.
  constructor(name: string) {
    this.name = name;
  }
}
class Child extends Parent {
  age: number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
}

let father = new Parent("홍판서");
father.name;

let son = new Child("홍길동", 10);
son.name;
son.age;
```

```ts
/**
 * 클래스
 *
 * 접근 제한자 (Visibility Keyword)
 * 1. public : 코드 어디서나 접근 가능
 * 2. protected : 현재 클래스와 자식 클래스에서 접근 가능
 * 3. private : 현재 클래스에서만 접근 가능
 */
class Mom {
  public publicProperty: string = "public";
  protected protectedProperty: string = "protected";
  private privateProperty: string = "private";
  // js 존재하는 문법
  #jsPrivate: string = "jsPrivate";

  test() {
    this.publicProperty;
    this.protectedProperty;
    this.privateProperty;
  }
}

class Son extends Mom {
  gogo() {
    this.publicProperty; // 가능 (public 접근 가능)
    this.protectedProperty; // 가능 (상속이므로 protected 접근 가능)
    // this.privateProperty; // 불가능 (상속이더라도 private 라서)
    // this.#jsPrivate; // 불가능 (상속이더라도 private 라서)
  }
}

const instance = new Son();
instance.publicProperty;
// instance.protectedProperty; // protected 라서 외부에서 접근불가
// instance.privateProperty; // private 라서 외부에서 접근불가
// instance.#jsPrivate; // # 라서 외부에서 접근불가
```

# Generic

- 타입을 마치 변수처럼 전달하기

```ts
/**
 * 제네릭
 * 함수에서 제네릭 사용하기
 */
function whatVale(value: any) {
  return value;
}

// const v: any
const v = whatVale("안녕");
// v.toFixed(3) // 이건 오류입니다.

// 변수타입을 전달할 수 없을까? 실행중에
// Generic 을 이용하여 보자.
// T는 아무 의미가 없어요.
function genericWhatVale<T>(value: T): T {
  return value;
}
// const a: string
const a = genericWhatVale<string>("안녕");
// const b: number
const b = genericWhatVale<number>(1);

// 여러개의 변수타입을 전달가능
function genericMulti<T, U>(a: T, b: U): { a: T; b: U } {
  return { a, b };
}
// const d: {  a: string;  b: number; }
const d = genericMulti<string, number>("아이유", 30);

// 클래스에서 제네릭 사용하기
class Idol {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Car {
  brand: string;
  codeName: string;
  constructor(brand: string, codeName: string) {
    this.brand = brand;
    this.codeName = codeName;
  }
}
// 인스턴스를 자동으로 만들어주는 함수
// 형태만 보아둡시다. 앞으로 일단 복사해서 씁시다.
function makeInstance<T extends { new (...args: any[]): {} }>(
  constructor: T,
  ...args: any[]
) {
  return new constructor(...args);
}

// const go = new Idol("아이유", 30);
// const go2 = new Car("BWM", "M80");

const iu = makeInstance(Idol, "아이유", 30);
const bmw = makeInstance(Car, "BWM", "M80");
```

```ts
/**
 * 제네릭
 * 인터페이스에서 제네릭 사용하기
 */
// interface DataCache {
//   data: string[];
//   lastUpdate: Date;
// }
// interface DataCache2 {
//   data: number[];
//   lastUpdate: Date;
// }

interface DataCache<T> {
  data: T[];
  lastUpdate: Date;
}

const data: DataCache<string> = {
  data: ["a", "b", "c"],
  lastUpdate: new Date(),
};

const data2: DataCache<number> = {
  data: [1, 2, 3],
  lastUpdate: new Date(),
};

// 기본 타입을 지정할 수 도 있다.
interface DefineType<T = string> {
  data: T;
}
interface DefineType2<T = {}> {
  data: T;
}
// 아래는 기본타입 적용됨
const a: DefineType = {
  data: "안녕",
};
// 아래는 사용자가 타입 지정
const b: DefineType<number> = {
  data: 100,
};
```

```ts
/**
 * 제네릭
 * 타입에서 제네릭 사용하기
 */
type Sample = string;
type Sample2 = number;
type Sample3 = boolean;

type GenricSample<T> = T;
// const a: string
const a: GenricSample<string> = "안녕";
// const b: number
const b: GenricSample<number> = 100;
// const c: boolean
const c: GenricSample<boolean> = true;

interface DoneState<T> {
  data: T[];
}
interface LoadingState {
  data: Date;
}
interface ErrorState {
  data: Error;
}

type State<T = string> = DoneState<T> | LoadingState | ErrorState;

let state: State = {
  data: ["a", "b", "c"],
};

state = {
  data: new Date(),
};

state = {
  data: new Error("로딩 실패"),
};

interface TodoType {
  id: number;
  title: string;
}

let todoState: State<TodoType> = {
  data: [
    { id: 1, title: "안녕" },
    { id: 2, title: "안녕2" },
    // {id:3} 오류
  ],
};
```

```ts
/**
 * 제네릭
 * 클래스 정의에서 제네릭 사용하기
 */
class Pagination<T, U> {
  // 초기화 함
  data: T[] = [];
  message?: U;
  lastDate?: T;
}
let p = new Pagination<number, string>();
let p2 = new Pagination<string, string>();

class Pagination2<T, U, S> {
  // 초기화 함
  data: T[] = [];
  message?: U;
  lastDate?: S;
  // 컨스트럭터에 제네릭 적용하기
  constructor(data: T[], message?: U, lastDate?: S) {
    this.data = data;
    this.message = message;
    this.lastDate = lastDate;
  }
}
let p3 = new Pagination2<string, string, Date>(
  ["a", "b", "c"],
  "안녕",
  new Date()
);
```

```ts
/**
 * 제네릭
 * 클래스 상속에서 제네릭 사용하기
 */
class Base<T> {
  // 초기값 있는 경우
  data: T[] = [];
}
class StringBase extends Base<string> {}
const a = new StringBase();
// (property) Base<string>.data: string[]
a.data;

// 자식 클래스가 타입변수 정의됨
class NumberBase<U> extends Base<U> {}
const b = new NumberBase<number>();
// (property) Base<number>.data: number[]
b.data;

// interface 상속
interface BasicI {
  name: string;
}

class Idol<T extends BasicI> {
  // 초기값이 없으므로 constructor 에서 셋팅
  information: T;
  constructor(information: T) {
    this.information = information;
  }
}
// let iu: Idol<{  name: string;  age: number; }>
let iu = new Idol({ name: "아이유", age: 30 });

// keyof 를 같이 사용하기
const obj = { a: 1, b: 2, c: 3 };

function objectParser<T, U extends keyof T>(v1: T, v2: U) {
  return v1[v2];
}

const e = objectParser(obj, "a");

// 3 항연산자 예제
class Idol2 {
  // 초기화가 필요하므로 constructor 에서 할당.
  // 하지만 옵션으로 설정하였다.
  type?: string; // string | undefined
}
class FemaleIdol extends Idol2 {
  type = "여자 아이돌";
}
class MaleIdol extends Idol2 {
  type = "남자 아이돌";
}
type SpecialIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;

const idol1: SpecialIdol<FemaleIdol> = new FemaleIdol();
idol1.type; // 여자 아이돌

const idol2: SpecialIdol<MaleIdol> = new MaleIdol();
idol2.type; // 남자 아이돌
```

```ts
/**
 * 제네릭
 * 클래스 메서드에서 제네릭 사용하기
 */
class Idol<T> {
  // 필드
  id: T;
  name: string;
  constructor(id: T, name: string) {
    this.id = id;
    this.name = name;
  }
  // 메소드에 제네릭 적용하기
  sayHello<M>(memo: M) {
    return memo;
  }
}
const iu = new Idol<string>("iu1004", "아이유");
// iu.sayHello<string>("안녕");
iu.sayHello("안녕");
// iu.sayHello<number>(1990);
iu.sayHello(1990);

// 아래는 한번 체크합시다.
class Idol2<T> {
  sayHello<T>(memo: T) {
    return memo;
  }
}
const iu2 = new Idol2<string>();
iu2.sayHello<number>(1990);
iu2.sayHello(1990);
```

```ts
/**
 * 제네릭
 * 클래스 Implmentation 에서 제네릭 사용하기
 */
// 약속을 지켜라
interface Singer<T, U> {
  name: T;
  sing(year: U): void;
}
class Idol implements Singer<string, number> {
  // 초기값 필요
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  // 메소드
  sing(year: number): void {
    console.log(year);
  }
}

const iu = new Idol("아이유");

class Idol2<T, U> implements Singer<T, U> {
  // 초기값 필요
  name: T;
  constructor(name: T) {
    this.name = name;
  }
  // 메소드
  sing(year: U): void {
    console.log(year);
  }
}
const iu2 = new Idol2<string, number>("아이유");
```

```ts
/**
 * 제네릭
 * Promise 에서 제네릭 사용하기
 */
const afterTwoTime = function (): Promise<string> {
  return new Promise((resolve) => {
    resolve("hi");
  });
};
```

# Utility 타입

```ts
/**
 * Utility
 */

// Partial Type (가장 많이 사용하는 Utility 타입)
// 모든 속성에 ? 을 붙인다.
// 객체의 일부분만 수정이 가능하도록
interface Idol {
  name: string;
  age: number;
  groupName: string;
}
const suji: Idol = {
  name: "수지",
  age: 32,
  groupName: "black pink",
};

type IdolPartial = Partial<Idol>;

function updateIdol(origin: Idol, update: IdolPartial): Idol {
  return { ...origin, ...update };
}
const suji2 = updateIdol(suji, { age: 24 });

// Required (모두 필수 속성으로 바꿈)
interface Cat {
  name: string;
  age?: number;
  breed?: string;
}
type CatRequire = Required<Cat>;

// Readonly (모두 읽기 전용 속성으로 바꿈)
interface Cat2 {
  name: string;
  age?: number;
  breed?: string;
}
type CatReadonly = Readonly<Cat>;

// Pick (특정 속성만 선택해서 사용)
interface Cat3 {
  name: string;
  age?: number;
  breed?: string;
}
type CatPick = Pick<Cat, "age" | "breed">;

// Omit (특정 속성만 제외해서 선택)
interface Cat4 {
  name: string;
  age?: number;
  breed?: string;
}
type CatOmit = Omit<Cat, "name">;

// Exclude (특정 타입을 제외하고 사용)
type NoString = Exclude<string | boolean | number, string>;
type Candy = "초코" | "딸기" | "바나나" | "사과";
type RemainingCandy = Exclude<Candy, "초코" | "바나나">;

// Extract (특정 타입을 추출해서 사용)
type NoString2 = Extract<string | boolean | number, string>;
type Candy2 = "초코" | "딸기" | "바나나" | "사과";
type RemainingCandy2 = Extract<Candy, "초코" | "바나나">;

// Parameters (매개 변수 타입을 사용)
function fun(x: number, y: number, z: boolean) {}
// type TParams = [x: number, y: number, z: boolean]
type TParams = Parameters<typeof fun>;
// type TParamsVoid = [a: number]
type TParamsVoid = Parameters<(a: number) => void>;

// ConstructorParameters (생성자 함수의 타입)
class Idol {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// type TCS = [name: string, age: number]
type TCS = ConstructorParameters<typeof Idol>;

// ReturnType (함수의 리턴타입)
type sFn = (a: number) => number;
// type RT = number
type RT = ReturnType<sFn>;
// type RT2 = void
type RT2 = ReturnType<() => void>;

// Template Literal Type
type IU = "Iue";
// type UIU = "IUE"
type UIU = Uppercase<IU>;
// type sIU = "iue"
type sIU = Lowercase<IU>;
// type cIU = "Iue"
type cIU = Capitalize<IU>;
// type uIU = "iue"
type uIU = Uncapitalize<IU>;
```
