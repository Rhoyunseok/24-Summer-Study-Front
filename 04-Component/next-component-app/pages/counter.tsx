//리엑트 로컬데이터 상태관리 확인 useState 훅을 참조한다
// 각종 훅은 use 라는 접두사를 사용한다.
import { useState } from 'react';

const Couter = () => {
  //카운트 상태값을 관리할count 변수, 세터함수를 생성한다.
  //useState(초기값)은 상태값과 상태값을 변경하는 세터함수를 반환한다.
  //useState(0)함수는 0으로 초기화된 count 변수와 count 변수를 변경하는 setCount 함수를 반환한다.
  const [count, setCount] = useState<number>(0);

  //plus 버튼 클릭시 실행할 함수
  const handlePlus = (): void => {
    console.log('Pre SetCounter', count);
    //count 상태값을 변경하려면 무조건 setCount 함수를 통해 변경해야합니다.
    setCount(count + 1);

    //변경되기 이전의 count 상태값을 출력합니다.
    setCount((prevCount) => prevCount + 1);

    console.log('After SetCounter', count);
    //setter 함수가 실행되는 handlePlus 함수가 종료되면 count 상태값이 변경됩니다.
  };

  const handleMinus = (): void => {
    setCount(count - 1);
  };
  const handleInit = (): void => {
    setCount(0);
  };

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-[60px] font-semibold text-indigo-600">{count}</p>
        <p className="mt-6 text-base leading-7 text-gray-600">
          버튼을 클릭해 숫자를 증가 또는 감소 시켜보세요.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={handlePlus}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Plus
          </button>
          <button
            onClick={handleMinus}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Minus
          </button>
          <button
            onClick={handleInit}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Init
          </button>
        </div>
      </div>
    </main>
  );
};

export default Couter;
