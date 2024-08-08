//변수별  타입을 지정하고 값을 할당합니다.
var memberName: string = "강창훈";
let age: number = 30;
let price: number = 5000;
const isMale: boolean = true;

let totalPayPrice: number = 0;


//함수가 반환값이 없을경우 void를 사용합니다.
//함수에 전달되는 파라메터에도 타입을 지정합니다.
//함수의 결과값에는 void 값을 할당합니다.
function showTotalPrice(p: number, count: number): void {
  totalPayPrice = p * count;
  console.log(`totalPayPrice: ${totalPayPrice}`);
}

console.log("사용자명:", memberName);
console.log("나이:", age);
console.log("가격:", price);
console.log("성별:", isMale);

showTotalPrice(price, 2);
