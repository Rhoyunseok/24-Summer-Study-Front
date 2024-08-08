//인터페이스의 목적은
//데이터 타입을 정의하건
//특정 인터페이스를 상속받아 기능을 확장가능하며(extend)하며
//특정 클래스에서 해당 인터페이스를 상속받으면 반드시 해당 인터페이스의 기능과 속성을 클래스에서 구현(implement)해줘야한다
interface User { 
    name: string; 
    age: number; 
}

type MemberType = {
    name: string;
    age: number;
};

function greet(user: User): string {
    return `Hello, ${user.name}`;
}

let user:User = { name: 'Ace', age: 30 };
console.log(greet(user));

interface Person { 
    name: string;
}

interface Person {
    age: number;
}

interface Person {
    address: string;
}

interface Group {
    group: string;
}

//Employee interface 는 extends(확장) 키워드를 사용하여 특정 interface를 상속받아
//기능을 확장할 수 있습니다.
interface Employee extends Person, Group {
    department: string;
    //최종적으로 Employee interface는 name, age, address, group, department 총 5개의 속성을 가지게 됩니다.
}

let employee: Employee = {
    name: '루피',
    age: 20,
    address: '고잉메리',
    group: '밀짚모자 해적단',
    department: '선장',
    //test: 'test' //이러면 에러가 납니다.
};

console.log(employee);

//객체지향적으로 인터페이스를 사용해보자
//OOP(Object Oriented Programming)의 특징 중 하나인 추상화를 구현할 수 있습니다.
interface Movable {
    speed: number;
    move(): void;
}

class Ship implements Movable {
    speed: number;
    //생성자 함수
    constructor(speed: number) {
        this.speed = speed;
    }
    move() {
        console.log(`Ship is moving at ${this.speed} knots`);
    }
}

let ship = new Ship(100);
ship.move();