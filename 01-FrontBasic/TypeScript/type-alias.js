var sample;
sample = "hello";
console.log("sample:", sample);
sample = 123;
console.log("sample", sample);
//할당!하는거
var member = {
    name: "노윤석",
    age: 20,
    address: { city: "서울", country: "한국" }
};
function printPersonInfo(member) {
    console.log("name: ".concat(member.name, ", age: ").concat(member.age, ", city: ").concat(member.address.city, ", country: ").concat(member.address.country));
}
printPersonInfo(member);
function plus(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function calculate(a, b, func) {
    return func(a, b);
}
console.log("calculate : 10 + 5 = ", calculate(10, 5, plus));
console.log("calculate : 10 - 5 = ", calculate(10, 5, minus));
