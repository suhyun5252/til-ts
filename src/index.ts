/**
 * key Value 맵핑
 */

enum State {
  LOADING,
  SUCCESS,
  ERROR,
  INITIAL,
}

//  API 타입 1
type ApiState = {
  getUser: State;
  paginateUser: State | undefined;
  defeceUser: State | null;
  getPost: State;
};

// API 타입 2
type UserApiState = {
  getUser: State;
  paginateUser: State | undefined;
  defeceUser: State | null;
};

//  API 타입 3
// 아래처럼 구성하면 타입이 변경이 일어나도 추가 잡업이 없다
//  속성이 변화가 일어나도 한번에 모두 변화가 일어난다.
type UserApiState2 = {
  getUser: ApiState["getUser"];
  paginateUser: ApiState["paginateUser"];
  defeceUser: ApiState["defeceUser"];
};

//  API 타입 4
type UserApiState3 = {
  [key in "getUser" | "paginateUser" | "defeceUser"]: ApiState[key];
};

//  API 타입 5
// 유틸리티 타입
// Pcik : 내가 원하는 것만 뽑기
type UserApiState4 = Pick<ApiState, "getUser" | "paginateUser" | "defeceUser">;
// Omit : 원치 않는것을 제외하는 경우
type UserApiState5 = Omit<ApiState, "getPost">;

/**
 * keyof
 * 속성 값을 타입으로 알아내기
 */

type AllKeys = keyof ApiState;
const Key1: AllKeys = "getUser";
const Key2: AllKeys = "paginateUser";
const Key3: AllKeys = "defeceUser";
const Key4: AllKeys = "getPost";
// const Key5:AllKeys = "Gogo" // 오류

// API 타입 6
//  속성 모두 가져오기
type UserApiState6 = {
  [key in keyof ApiState]: ApiState[key];
};

// 유틸리티 사용해 보기
// 앙목 한개 빼기
type UserApiState7 = {
  // getPost 속성을 제거하고 나머지 뽑아서 정의하라
  [key in Exclude<keyof ApiState, "getPost">]: ApiState[key];
};

//  항목 하나 빼고 모두 옵션으로 바꿔라
type UserAPiState8 = {
  // getPost 속성을 제거하고 나머지 뽑아서 정의하라
  [key in Exclude<keyof ApiState, "getPost">]: ApiState[key];
};
