import { useContext, useState } from "react";

import { AppContext } from "@/pages/_app";

const Child4 = () => {
  const { msg, setMsg } = useContext(AppContext);
  return <div className="h-[200px] bg-red-200">Child4:{msg}</div>;
};

export default Child4;
