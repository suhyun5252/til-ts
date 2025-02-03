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
