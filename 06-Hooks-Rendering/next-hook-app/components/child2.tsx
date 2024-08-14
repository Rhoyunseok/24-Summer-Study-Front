import { useContext, useState } from "react";

import { AppContext } from "@/pages/_app";

const Child2 = ({ children }: { children: React.ReactNode }) => {
  //const {변수명, 변수변경함수명} = useContext(전역데이터참조객체명);
  const { msg, setMsg } = useContext(AppContext);
  return (
    <div className="h-[300px] bg-red-400">
      Child2:{msg}
      <button
        onClick={() => {
          setMsg("변경완료 입니다요");
        }}
        className="rounded-md px-3 bg-indigo-400 text-white"
      >
        ddd
      </button>
      <div>{children}</div>
    </div>
  );
};

export default Child2;
