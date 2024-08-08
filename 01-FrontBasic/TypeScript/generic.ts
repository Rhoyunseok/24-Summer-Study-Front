
//<T>는 제네릭 타입으로, 함수를 호출할 때 전달되는 타입을 나타낸다.
function getRandomElement<T>(list: T[]): T {
    
    //전달된 배열목록에서 random하게 배열 단일아이템을 반환한다.
    const randIndx = Math.floor(Math.random() * list.length);
    return list[randIndx];
}

function getRadomString(list: string[]): string {
    
    //전달된 배열목록에서 random하게 배열 단일아이템을 반환한다.
    const randIndx = Math.floor(Math.random() * list.length);
    return list[randIndx];
}


//특정타입에 최적화된 함수를 별도로 만들고 사용하기
const randomString = getRadomString(["A","B","C"]);
console.log("문자열 배열에서 랜덤한 문자 추출하기 : ", randomString);

//제네릭 함수를 사용하여 다양한 타입의 배열에서 랜덤한 아이템을 추출하기
const randomNum = getRandomElement([1,2,3,4,5]);
console.log("숫자 배열에서 랜덤한 숫자 추출하기 : ", randomNum);
const randomBool = getRandomElement([true,false]);
console.log("불리언 배열에서 랜덤한 불리언 추출하기 : ", randomBool);

//제너릭 타입을 이용한 타입에 제한없이 사용가능한 함수 사용하기
const randomStr = getRandomElement(["A","B","C"]);
const randomNum2 = getRandomElement([1,2,3,4,5]);
const randomUser1 = getRandomElement([
    {name:"루피",email:"해적왕@루피.com"},
    {name:"조로",email:"검술사@조로.com"},
    {name:"상디",email:"요리사@상디.com"}
]);

console.log("getRandomElement-string", randomString)
console.log("getRandomElement-number", randomNum2)
console.log("getRandomElement-object", randomUser1)


