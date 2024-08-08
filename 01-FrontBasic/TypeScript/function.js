function add1(a, b) {
    return a + b;
}
function add2(a, b) {
    console.log("function add2 : ", a + b);
}
var result1 = add1(10, 10);
console.log("result1 : ", result1);
var data1 = 20;
var data2 = 30;
add2(data1, data2);
//일반함수
function greet1(name) {
    return "greet1 : Hello ".concat(name);
}
//익명함수
var greet2 = function (name) {
    return "greet2 : Hello ".concat(name);
};
//화살표 함수
var greet3 = function (name) {
    return "greet3 : Hello ".concat(name);
};
console.log(greet1("루피"));
console.log(greet2("에이스"));
console.log(greet3("조로"));
//선택적(optional) 속성/변수?선언하기 = 해당값 반드시 전달하지 않아도 된다.
function greet(name, msg) {
    if (name === void 0) { name = "이름"; }
    if (msg) {
        return "greet : ".concat(name, "\uB2D8 ").concat(msg);
    }
    else {
        return "greet : ".concat(name);
    }
}
console.log(greet());
console.log(greet("루피"));
console.log(greet("에이스", "죽지마요"));
