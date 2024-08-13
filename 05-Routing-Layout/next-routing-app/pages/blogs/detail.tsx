import { useRouter } from "next/router";
import { useState } from "react";

const BlogDetail = () => {
  const router = useRouter();

  //localhost:3000/blogs/detail?id=1&name=nextjs
  //Query String 방식의 키값 추출하는 방법
  const id = router.query.id;
  const name = router.query.name;

  return (
    <div className="h-[700-px]">
      Blog Detail Web Page:{id}={name}
    </div>
  );
};

export default BlogDetail;
