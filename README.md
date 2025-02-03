# 클래스

- 여러개의 인스턴스를 만들기 위한 객체의 `설계도`
- JS, React 와 Next에서 클래스는 활용도가 엄청 낮습니다.
- 대게 함수를 기반으로 프로젝트 진행하므로.
- typescript를 기반으로 백엔드를 구축합니다. (Node.js, Express.js, Nest.js)
- 예) java를 기반으로 백엔드를 구축한다.(JSP, Spring)
- 예) SQL 구문 기반으로 DB를 제어한다.(JPA, TypeORM)

## 1. 일반 객체로 생성하는 경우

```js
let car = {
  // Property(속성)
  name: "벤츠",
  brand: "현대",
  price: 100,
  year: 50,
  // Method(행동)
  move() {
    console.log("운전");
  },
  stop() {
    console.log("멈춤");
  },
};
let car2 = {
  // Property(속성)
  name: "그랜저",
  brand: "현대",
  price: 1000,
  year: 20,
  // Method(행동)
  move() {
    console.log("운전");
  },
  stop() {
    console.log("멈춤");
  },
};
```

## 2. 클래스의 기본형

```js
// 클래스로 구현해 본다
class 클래스이름 {
  // 속성 필드
  속성명1;
  속성명2;
  // 인스턴스 생성자(이름변경 불가)
  constructor() {}
  // 메서드 필드
  메서드명1() {}
  메서드명2() {}
}

// 인스턴스 생성
let 인스턴스 = new 클래스이름();
```

## 3. 클래스의 속성 필드 정의

- let, var, const 키워드는 작성 못함
- 객체 속성과는 다르게` 세미콜론(;)`으로 마감한다.
- 초기값 셋팅은 constructor 에서 진행

```js
let car = {
  // Property (속성)
  name: "소나타",
  brand: "현대",
  price: 100,
  year: 50,
  // Method (행동)
  move() {
    console.log("운전");
  },
  stop() {
    console.log("멈춤");
  },
};
let car2 = {
  // Property (속성)
  name: "그랜저",
  brand: "현대",
  price: 1000,
  year: 20,
  // Method (행동)
  move() {
    console.log("운전");
  },
  stop() {
    console.log("멈춤");
  },
};
// 클래스로 구현해 본다.
class Car {
  // 속성 필드
  name;
  brand;
  price;
  year;
  // 인스턴스 생성자(이름 변경 불가)
  constructor(name, brand, price, year) {
    // this 는 new 로 생성되어질 instance 를 가르킴.
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.year = year;
  }
  // 메소드 필드
  move() {
    console.log(`${this.name}을 운전합니다.`);
  }
  stop() {
    console.log(`${this.name}을 멈춥니다.`);
  }
}

// 인스턴스 생성
let 그랜저 = new Car("현대", "그랜저", 1000, 20);
// {name: "현대", brand: "그랜저", price: 1000, year: 20}
let 아반떼 = new Car("현대", "아반떼", 100, 30);
// {name: "현대", brand: "아반떼", price: 100, year: 30}
```

## 4. 상속을 통한 클래스 확장

```js
// 상속 즉 확장을 통한 클래스 정의
class ElectricCar extends Car {
  // 자식 클래스에 해당하는 속성 필드
  batteryLevel;
  constructor(name, brand, price, year, batteryLevel) {
    // 부모의 constructor 를 먼저 실행해 주어야 함.
    super(name, brand, price, year);
    this.batteryLevel = batteryLevel;
  }
  // 자식 클래스에 해당하는 메소드 필드
  level() {
    console.log(`${this.batteryLevel} 입니다.`);
  }
}

let 캐스퍼 = new ElectricCar("캐스퍼", "현대", 1000, 5, 100);
캐스퍼.move();
캐스퍼.stop();
캐스퍼.level();
```

## 5. 최종 코드

```js
class Car {
  name;
  brand;
  price;
  year;
  constructor(name, brand, price, year) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.year = year;
  }
  move() {
    console.log(`${this.name}을 운전합니다.`);
  }
  stop() {
    console.log(`${this.name}을 멈춥니다.`);
  }
}
// 상속
class ElectricCar extends Car {
  batteryLevel;
  constructor(name, brand, price, year, batteryLevel) {
    super(name, brand, price, year);
    this.batteryLevel = batteryLevel;
  }
  level() {
    console.log(`${this.batteryLevel} 입니다.`);
  }
}

// 인스턴스 생성
let 그랜저 = new Car("현대", "그랜저", 1000, 20);
// {name: "현대", brand: "그랜저", price: 1000, year: 20}
그랜저.move();
그랜저.stop();
let 아반떼 = new Car("현대", "아반떼", 100, 30);
// {name: "현대", brand: "아반떼", price: 100, year: 30}

let 캐스퍼 = new ElectricCar("캐스퍼", "현대", 1000, 5, 100);
캐스퍼.move();
캐스퍼.stop();
캐스퍼.level();
```

## 6. 타입스크립트로 속성 필드 타입 정의하기

```ts
class Car {
  // 속성필드 타입정의
  name: string;
  brand: string;
  price: number;
  year: number;
  constructor(name: string, brand: string, price: number, year: number) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.year = year;
  }
  move() {
    console.log(`${this.name}을 운전합니다.`);
  }
  stop() {
    console.log(`${this.name}을 멈춥니다.`);
  }
}
```

## 7. 타입스크립트로 속성 필드 초기값 정의하기

- 방식 1

```ts
class Car {
  // 속성필드 타입정의
  name: string = "";
  brand: string = "";
  price: number = 0;
  year: number = 0;
  constructor(name: string, brand: string, price: number, year: number) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.year = year;
  }
  move() {
    console.log(`${this.name}을 운전합니다.`);
  }
  stop() {
    console.log(`${this.name}을 멈춥니다.`);
  }
}
```

## 8. 클라스 상속을 통한 확장

```ts
class Car {
  // 속성필드 타입정의
  name: string = "";
  brand: string = "";
  price: number = 0;
  year: number = 0;
  constructor(name: string, brand: string, price: number, year: number) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.year = year;
  }
  move() {
    console.log(`${this.name}을 운전합니다.`);
  }
  stop() {
    console.log(`${this.name}을 멈춥니다.`);
  }
}
// 상속
class ElectricCar extends Car {
  batteryLevel: number = 100;
  constructor(
    name: string,
    brand: string,
    price: number,
    year: number,
    batteryLevel: number
  ) {
    super(name, brand, price, year);
    this.batteryLevel = batteryLevel;
  }
  level() {
    console.log(`${this.batteryLevel} 입니다.`);
  }
}
```

## 9. 접근(속성 또는 메서드)제어자

- public, private, protected
- public : 모든 곳에 접근가능
- private : 클래스 내부에서만 접근 가능
- protected : 클래스 내부 또는 상속된 클래스에서만 접근 가능

## 9.1 public

```ts
class Car {
  // 속성필드 타입정의
  public name: string = ""; // 자동으로 public 셋팅
  public brand: string = ""; // 자동으로 public 셋팅
  public price: number = 0; // 자동으로 public 셋팅
  public year: number = 0; // 자동으로 public 셋팅
  constructor(name: string, brand: string, price: number, year: number) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.year = year;
  }
  public move() {
    console.log(`${this.name}을 운전합니다.`);
  }
  public stop() {
    console.log(`${this.name}을 멈춥니다.`);
  }
}

let 아반떼 = new Car("아반떼", "현대", 1000, 50);
아반떼.name;
아반떼.brand;
아반떼.price;
아반떼.year;
// public 속성 갑 변경
아반떼.price = 5000;
```

- 가능하면 메서드는 public 으로 정의한다.
- 외부에서 메서드를 통해서 속성에 접근하는 것이 정석임.

### 9.2 private

- 기본적으로 private 를 추천합니다.
- 속성 읽기 및 수정은 메서드를 통해서 예외처리를 하면서 접근함.

```ts
class Car {
  // 속성필드 타입정의
  public name: string = ""; // 자동으로 public 셋팅
  public brand: string = ""; // 자동으로 public 셋팅

  // 사용자가 외부에서 데이터값을 변경 못하도록 하겠다
  private price: number = 0; // 수동으로 private 셋팅

  public year: number = 0; // 자동으로 public 셋팅
  constructor(name: string, brand: string, price: number, year: number) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.year = year;
  }
  move() {
    console.log(`${this.name}을 운전합니다.`);
  }
  stop() {
    console.log(`${this.name}을 멈춥니다.`);
  }
  // private 속성에 price 에 접근하는 읽기 메서드
  // private 속성에 price 에  접근하는 쓰기 메서드
  getPrice() {
    console.log(this.price);
  }
  setPrice(p: number) {
    if (p < 0) {
      console.log("가격은 0보다 커야 합니다.");
    }
    this.price = p;
  }
}

let 아반떼 = new Car("아반떼", "현대", 1000, 50);
아반떼.name;
아반떼.brand;
// 아반떼.price; //private 이라서 읽기 접근 금지
아반떼.year;
// public 속성 갑 변경
//private 이라서 쓰기 접근 금지
// 아반떼.price = 5000;
아반떼.setPrice(1000);

// 상속
class ElectricCar extends Car {
  batteryLevel: number = 100;
  constructor(
    name: string,
    brand: string,
    price: number,
    year: number,
    batteryLevel: number
  ) {
    super(name, brand, price, year);
    this.batteryLevel = batteryLevel;
  }
  level() {
    console.log(`${this.batteryLevel} 입니다.`);
  }
}
```

### 9.3 protected

- 클래스에서 직접 접근하거나 상속된 클래스에서는 접근 가능

```ts
class Car {
  // 속성필드 타입정의
  public name: string = ""; // 자동으로 public 셋팅
  public brand: string = ""; // 자동으로 public 셋팅

  // 사용자가 외부에서 데이터값을 변경 못하도록 하겠다
  private price: number = 0; // 수동으로 private 셋팅

  // 클래스 내부 또는 상속된 클래스에서만 접근가능
  protected year: number = 0; // 수동으로 public 셋팅
  constructor(name: string, brand: string, price: number, year: number) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.year = year;
  }
  move() {
    console.log(`${this.name}을 운전합니다.`);
  }
  stop() {
    console.log(`${this.name}을 멈춥니다.`);
  }
  // private 속성에 price 에 접근하는 읽기 메서드
  // private 속성에 price 에  접근하는 쓰기 메서드
  getPrice() {
    console.log(this.price);
  }
  setPrice(p: number) {
    if (p < 0) {
      console.log("가격은 0보다 커야 합니다.");
    }
    this.price = p;
  }
  // protected 속성 year 접근
  getYear() {
    console.log(this.year);
  }
}

// 상속
class ElectricCar extends Car {
  batteryLevel: number = 100;
  constructor(
    name: string,
    brand: string,
    price: number,
    year: number,
    batteryLevel: number
  ) {
    super(name, brand, price, year);
    this.batteryLevel = batteryLevel;
  }
  level() {
    console.log(`${this.batteryLevel} 입니다.`);
  }
  // 부모 protected
  showYear() {
    console.log(this.year);
  }
}

let 아반떼 = new Car("아반떼", "현대", 1000, 50);
아반떼.name;
아반떼.brand;
// 아반떼.price; //private 이라서 읽기 접근 금지
아반떼.getPrice();
//아반떼.year; // protected 라서 읽기 접근 금지
// public 속성 갑 변경
//private 이라서 쓰기 접근 금지
// 아반떼.price = 5000;
아반떼.setPrice(1000);

let EV5 = new ElectricCar("EV5", "현대", 1000, 5, 100);
EV5.price; // private 이라서 외부 접근 에러
EV5.year; // protected 이라서 외부 접근 에러
```

## 10. 혹시 이럴수도 있습니다. (문법 및 라이브러리 소스 보시면 자주 나옵니다.)

- 생성자 즉 constructor 에서 필드를 생략하는 경우를 볼수 있다

```ts
 constructor(
    public name: string = "",
    public brand: string = "",
    private price: number = 0,
    protected year: number = 0
  ) {
    // 아래 생략되어도 같은 효과를 봄
    // this.name = name;
    // this.brand = brand;
    // this.price = price;
    // this.year = year;
  }
```

- 상속받은 클래스 생성자 축약형

```ts
 // 상속받은 경우의 생성자 축약형
  constructor(
    name: string = "",
    brand: string = "",
    price: number = 0,
    year: number = 0,
    public batteryLevel: number = 0
  ) {
    super(name, brand, price, year);
  }
```

## 11. 전체 코드

```ts
class Car {
  constructor(
    public name: string = "",
    public brand: string = "",
    private price: number = 0,
    protected year: number = 0
  ) {
    // 아래 생략되어도 같은 효과를 봄
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.year = year;
  }
  public move() {
    console.log(`${this.name}을 운전합니다.`);
  }
  public stop() {
    console.log(`${this.name}을 멈춥니다.`);
  }
  // private 속성 price 에 접근하는 읽기 메서드
  // private 속성 price 에 접근하는 쓰기 메서드
  getPrice() {
    console.log(this.price);
  }
  setPrice(p: number) {
    if (p < 0) {
      console.log("가격은 0 보다 커야 합니다.");
    }
    this.price = p;
  }
  // protected 속성 year 접근
  getYear() {
    console.log(this.year);
  }
}

// 상속
class ElectricCar extends Car {
  // 상속받은 경우의 생성자 축약형
  constructor(
    name: string = "",
    brand: string = "",
    price: number = 0,
    year: number = 0,
    public batteryLevel: number = 0
  ) {
    super(name, brand, price, year);
    // this.batteryLevel = batteryLevel; 상속받은경우 생략가능
  }

  level(): void {
    console.log(`배터리 레벨이 ${this.batteryLevel}% 입니다.`);
  }

  // 부모 protected 속성에 접근
  showYear(): void {
    console.log(`생산년도: ${this.year}년`);
  }
}

let 아반떼 = new Car("아반떼", "현대", 1000, 50);
아반떼.name;
아반떼.brand;
//아반떼.price; // private 이라서 읽기 접근금지
아반떼.getPrice();
// 아반떼.year; // protected 라서 읽기 접근금지

// public 속성 값 변경
// 아반떼.price = 5000; // private 이라서 쓰기 접근금지
아반떼.setPrice(1000);

let EV5 = new ElectricCar("EV5", "현대", 1000, 5, 100);
// EV5.price ; // private 이라서 외부 접근 에러
// EV5.year ;  // protected 라서 외부 접근 에러
```

## 12. 인터페이스

- `약속`을 지켜서 클래스를 만드세요.
- 클래스 만드는 것은 좋은데, 이러한 속성 필드와, 이러한 속성 메서드는 `반드시 구현`하라
- 인터페이스에서는 무조건 `public`

```ts
// 약속을 지켜라
interface CarInterface {
  name: string;
  brand: string;
  price: number;
  stop(): void;
  move(): void;
}
interface ElectricInterface {
  baterry: number;
  isBaterry: boolean;
}
// 인터페이스를 구현
class ElectricCar implements CarInterface, ElectricInterface {
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public baterry: number,
    public isBaterry: boolean // 1. public 추가 2. 철자 수정
  ) {}
  stop() {
    console.log("멈춰");
  }
  move() {
    console.log("움직여");
  }
}

let 자동차 = new ElectricCar("캐스퍼", "현대", 1000, 10, true);
자동차.stop();
자동차.move();
```
