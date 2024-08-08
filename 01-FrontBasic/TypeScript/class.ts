class Animal {
    //일반화된 특성(속성) 정의
    name: string;

    //일반화된 행동(메서드) 정의
    move(){
        //console.log(this.name + " 움직임");
        console.log(`${this.name} 움직임`);
    }
    //생성자 함수 정의
    constructor(externalName: string){
        this.name = externalName;
    }
}

//클래스는 클래스를 상속받아 기능과 속성을 """확장"""할 수 있어요.
class Dog extends Animal{
    bark(){
        console.log(`${this.name}이 짖고 있음`);
    }
}

let myDog = new Dog('누렁이');
console.log("내 강아지의 이름:", myDog.name);
myDog.move();
myDog.bark();

//클래스는 인터페이스를 상속받으면 """반드시""'" 인터페이스의 기능과 속성을 구현(implements)해줘야한다.


/*

*/

//접근제어자 (Access Modifiers) 사용 및 이해하기
enum UserType {
    Admin = "admin",
    User = "user",
    Guest = "guest"
}

enum AdminRole {
    SystemAdmin = "SA",
    GeneralAdmin = "GA",
}

class User {
    //클래스의 공통 속성
    public name: string; //클래스 외부에 노출되는 속성
    private password: string; //클래스 내에서만 사용가능한 속성
    protected email: string; //해당 클래스를 상속받은 자식클래스에서만 접근이 가능한 속성
    protected userType: UserType;

    //생성자 함수 정의하기
    constructor(name:string,password:string,email:string){
        this.name = name;
        this.password = password;
        this.email = email;
        this.userType = UserType.User;
    }

    //클래스의 주요 기능을 구현한다.
    //클래스 외부에서 호출가능
    public greet(){
        console.log(`안녕 ${this.name}`);
    }

    private config(){
        this.sendEmail('개인화 정보를 설정합니다.');
        console.log('개인화 정보를 설정합니다.');
    }

    protected sendEmail(message:string){
        console.log(`${this.email}로 이메일을 보냅니다. 내용: ${message}`);
    }

    changePassword(newPassword:string){
        this.password = newPassword;
        this.sendEmail(`비밀번호가 ${this.password} 로 변경되었습니다.`);
    }
}

let user = new User("루피","1234","test@test.com");
user.greet();
console.log("현재 사용자의 이름", user.name);
user.name = "조로";



//접근제어자가 private 선언되어 있어서 객체 내부에서만 접근이 가능하다.
//user.password = "1234"; //에러발생