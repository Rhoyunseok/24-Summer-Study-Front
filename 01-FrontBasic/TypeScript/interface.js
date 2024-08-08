function greet(user) {
    return "Hello, ".concat(user.name);
}
var user = { name: 'Ace', age: 30 };
console.log(greet(user));
var employee = {
    name: '루피',
    age: 20,
    address: '고잉메리',
    group: '밀짚모자 해적단',
    department: '선장',
    //test: 'test' //이러면 에러가 납니다.
};
console.log(employee);
var Ship = /** @class */ (function () {
    function Ship(speed) {
        this.speed = speed;
    }
    Ship.prototype.move = function () {
        console.log("Ship is moving at ".concat(this.speed, " knots"));
    };
    return Ship;
}());
var ship = new Ship(100);
ship.move();
