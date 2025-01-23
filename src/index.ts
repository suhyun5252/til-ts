type Cat = { kind: "CAT"; sound: string; color: string };
type Dag = { kind: "DOG"; sound: string; food: string };
type Bird = { kind: "BIRD"; sound: string; fly: boolean };
type Animal = Cat | Dag | Bird;

// 동물의 소리를 출력하는 기능
function song(what: Animal) {
  switch (what.kind) {
    case "CAT":
      console.log("고양이");
      break;
    case "DOG":
      console.log("강아지");
      break;
    case "BIRD":
      console.log("새");
      break;
  }
}
