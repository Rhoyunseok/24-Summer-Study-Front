//useReduce 훅을 이용한 데이터 관리하기
import { useReducer } from "react";

//리듀서함수를 이용한 상태값 관리하기
import { CountActionType } from "@/interfaces/common";
import { countReducer } from "@/utils/reducers";
//리듀서 함수 정의하기
//리듀서함수(관리하는 상태값 매개변수, 로직처리타입)
// function countReducer(state: number, action: string): number {
//   //처리 로직 유형에 따른 비지니스로직 처리후
//   //관리하는 상태값 반환하기, 기본값은 현재 상태값 변환
//   switch (action) {
//     case "plus":
//       return state + 1;
//     case "minus":
//       return state - 1;
//     case "init":
//       return 0;
//     default:
//       return state;
//   }
// }

const ReducerCount = () => {
  // useReducer 훅을 이용한 카운트 값 상태 데이터 정의 및 값 초기화
  // useReduce(리듀서 함수, 초기값)
  // useReducer함수는 관리하는 상태값과 해당 리듀서함수를 호출하는 디스패치함수를 반환합니다.
  // 디스패치함수를 호출하면 리듀서함수가 실행되고 상태값이 변경됩니다.
  //dispattch함수명은 임의로 지정할 수 있습니다. ex) dispatchCount
  //UI이벤트 발생->디스패치함수 호출->리듀서함수 실행->상태값 변경
  const [count, dispatchCount] = useReducer(countReducer, 100);

  return (
    <>
      <div>
        Count
        {/* 현재 카운트값 표시 영역 */}
        <div className="text-center mt-6">
          <h1 className="text-lg">{count}</h1>
        </div>
        {/* 카운트 값 증감 버튼 */}
        <div className="text-center mt-4">
          <button
            onClick={() => dispatchCount({ type: CountActionType.PLUS })}
            className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            증가
          </button>
          <button
            onClick={() => dispatchCount({ type: CountActionType.MINUS })}
            className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            감소
          </button>
          <button
            onClick={() => dispatchCount({ type: CountActionType.INIT })}
            className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            초기화
          </button>
        </div>
      </div>
    </>
  );
};

export default ReducerCount;
