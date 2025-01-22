let num: number = 10 as never;
// 10은 number 이고
// never 는 모든 타입의 서브타입
// 10 수퍼타입이므로 단언이 가능함.
let num2 = 10 as unknown;
// 10 은 number 이고
// unknow 은 최상위 수퍼타입
// 10 은 unknow 의 서브 타입이므로 단언이 가능

let num3 = 10 as string;
//  10 은 number 이고
// string 은 number 의 수퍼 또는 서브 타입이 아님
//  단언이 불가

//  아래는 좋지 않은 단언 샘플
let num4 = 10 as unknown as string;
