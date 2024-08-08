//새로운 타입을 만드는데 string type 과 number type을 지정합니다.
type StringOrNumber = string | number;
let sample: StringOrNumber;
sample = "hello";
console.log("sample:", sample);

sample = 123;
console.log("sample", sample);

//복잡한 type도 별칭으로 정의할 수 있다.
//정의!하는거
type MemberType = {
    name: string;
    age: number;
    address: {city: string; country: string};
}
//할당!하는거
let member: MemberType = {
    name: "노윤석",
    age: 20,
    address: {city: "서울", country: "한국"}
}

function printPersonInfo(member: MemberType): void {
    console.log(`name: ${member.name}, age: ${member.age}, city: ${member.address.city}, country: ${member.address.country}`);
}

printPersonInfo(member);



//함수 구조로 타입 정의하기
type calFuncType = (a: number, b: number) => number;

function plus(a: number, b: number) {
    return a + b;
}

function minus(a: number, b: number) {
    return a - b;
}

function calculate(a: number, b: number, func: calFuncType): number {
    return func(a, b);
}

console.log("calculate : 10 + 5 = ", calculate(10, 5, plus));
console.log("calculate : 10 - 5 = ", calculate(10, 5, minus));

//함수 파라메터인수와 반환값을 위한 type 정의
type OperationInput = {
    a: number;
    b: number;
};

type OperationOutput = {
    result: number;
};

function addNumbers(input: OperationInput): OperationOutput {
    const {a, b} = input;
    return {result: a + b};
}

const input: OperationInput = {a: 10, b: 20};
const output: OperationOutput = addNumbers(input);
console.log("output:", output); // {result: 30}
