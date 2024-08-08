
let genderType : "Male" | "Female";

genderType = "Male";
console.log("genderType: ", genderType);

type User = {
    name: string;
    age: number;
    userType: "Admin" | "User";
    address: {city: string, country: string};
};

//user: User는 User type을 따르는 객체를 할당하는 것
const user: User = {
    name: "노윤석",
    age: 20,
    userType: "Admin",
    address: {
        city: "CB", 
        country: "KR",
    },
};

//함수를 만들고 함수의 반환값을 특정값으로 제약하기
function getUserType(user:User):1|2{
    if(user.userType === "Admin"){
        return 1;
    }else{
        return 2;
    }
}

//getUserType(user);

console.log("getUserType(user): ", getUserType(user));

//열거형 enum
//열거형은 숫자형 값 또는 문자열 값 집합을 정의하는 것
//특정값의 범위를 상수처럼 한번 할당해서 값의 범위를 제약한다.

enum DisplayType {
    NoneDisplay = 0,
    Display = 1,
};

const displayCode = 1; //1게시 0 게시안함
//displaycode as DisplayType는 displayCode를 DisplayType으로 변환하는 것
const display = displayCode as DisplayType;

const displayTestCode:DisplayType = 1;
const displayTestCode1:DisplayType = DisplayType.NoneDisplay;
const displayTestCode2 = DisplayType.Display;


//열거형을 정의해서 사용하는 주요 목적은
//코드성 데이터를 소스내에 직접 박아서 사용하는 것은 좋지 않아서
//반복적으로 또는 값이 범위가 제한되어 있는 데이터들을 enum타입을 이용해
//값의 설명과 실제값을 표시하고 사용한다.
if(display === DisplayType.Display){
    console.log("해당 게시글은 게시중 상태입니다.");
}


//회원가입시 SNS으로 가입한 경우 시스템에서 제공하는 SNS가입유형코드 관리
enum SNSType {
    None = "None",
    Facebook = "Facebook",
    Twitter = "Twitter",
    Instagram = "Instagram",
};


//enum타입은 실제 값을 할당하지 않으면 0부터 시작하는 숫자값이 자동으로 할당됩니다.
enum EntryState {
    Inactive, //0
    Active, //1
    Pending, //2
};

enum MemberType {
    Admin = 2,
    User = 1,
    Guest = 0,
};

type Member = {
    id: number;
    email: string;
    password: string;
    entryStatus: EntryState,
    memberType: MemberType,
    snsType: SNSType,
};

const snsTypeCode:string = "Facebook";

let member:Member = {
    id: 1,
    email: "test@test.com",
    password:"11111111111",
    memberType: MemberType.Admin,
    snsType: SNSType.Facebook,
    entryStatus: EntryState.Active,

}; 