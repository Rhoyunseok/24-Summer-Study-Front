function add1(a: number, b: number): number {
  return a + b;
}


function add2(a: number, b: number): void {
  console.log("function add2 : ", a + b);
}

const result1: number = add1(10, 10);
console.log("result1 : ", result1);

const data1: number = 20;
const data2: number = 30;
add2(data1, data2);

//일반함수
function greet1(name: string): string {
  return `greet1 : Hello ${name}`;
}

//익명함수
let greet2 = function(name: string): string {
  return `greet2 : Hello ${name}`;
}

//화살표 함수
let greet3 = (name: string): string => {
  return `greet3 : Hello ${name}`;
}

console.log(greet1("루피"));
console.log(greet2("에이스"));
console.log(greet3("조로"));

//선택적(optional) 속성/변수?선언하기 = 해당값 반드시 전달하지 않아도 된다.
function greet(name:string="이름", msg?:string):string{
    if(msg){
        return `greet : ${name}님 ${msg}`;
    }else{
        return `greet : ${name}`;
    }
}

console.log(greet());
console.log(greet("루피"));
console.log(greet("에이스", "죽지마요"));


type calFuncType = (a: number, b: number) => number;

function plus(a: number, b: number) {
    return a + b;
}

function minus(a: number, b: number) {
    return a - b;
}

function calculate(a: number, b: number, calFunc: calFuncType): number {
    return calFunc(a, b);
}

calculate(10, 20, plus);

calculate(400, 200, minus);



function calculate1(a: number, b: number, calFunc: (a:number,b:number)=>number) {
    return calFunc(a, b);
}

