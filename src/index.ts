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
