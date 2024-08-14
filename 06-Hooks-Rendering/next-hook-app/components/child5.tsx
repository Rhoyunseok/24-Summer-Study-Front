import { useContext, useState } from "react";

import { AppContext } from "@/pages/_app";

const Child5 = () => {
  const { msg, setMsg } = useContext(AppContext);
  return <div className="h-[200px] bg-red-200">Child5:{msg}</div>;
};

export default Child5;
