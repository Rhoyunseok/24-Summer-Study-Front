const user: {id: number; name: string; email: string; telephone?: string} = {
    id: 1,
    name: '루피',
    email: '해적왕@onepiece.com',
    telephone: '123-456-7890'
};

console.log(
    `id: ${user.id}, name: ${user.name}, email: ${user.email}, telephone: ${user.telephone}`
);

//객체 타입을 정의하는 방법1 : 인터페이스를 이용하는 방법
//일반적인 현업 코딩 컨벤션(코딩규칙)으로 json data와 같은 data객체들은 주로 인터페이스로 타입을 정의하는 편
interface User {
    id: number;
    name: string;
    email: string;
    telephone?: string;
}

type UserType = {
    id: number;
    name: string;
    email: string;
    telephone?: string;
};

let user2:User = {
    id: 2,
    name: '조로',
    email: '초사랑@onepiece.com'
};


let user3:UserType = {
    id: 3,
    name: '상디',
    email: '쿠키@onepiece.com'
};