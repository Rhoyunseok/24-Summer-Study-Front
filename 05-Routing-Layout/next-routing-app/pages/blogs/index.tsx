import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { BlogType } from "@/interface/blog";

const BlogList = () => {
  const router = useRouter();

  //게시글 목록 데이터 상태 정의 및 초기화(빈배열)
  const [blogs, setBlogs] = useState<BlogType[]>([
    {
      id: 1,
      title: "제목입니다1",
      content: "첫 번째 게시글 내용",
      viewCnt: 0,
      display: true,
      createdAt: "2021-10-01",
      updatedAt: "2021-10-01",
    },
    {
      id: 2,
      title: "제목입니다2",
      content: "두 번째 게시글 내용",
      viewCnt: 0,
      display: true,
      createdAt: "2021-10-02",
      updatedAt: "2021-10-02",
    },
    {
      id: 3,
      title: "제목입니다3",
      content: "세 번째 게시글 내용",
      viewCnt: 0,
      display: true,
      createdAt: "2021-10-03",
      updatedAt: "2021-10-03",
    },
  ]);

  //신규 게시글 작성 페이지로 이동
  const moveDetail = () => {
    router.push("/blogs/new");
  };

  return (
    <div className="h-[700px] ml-4">
      <h1>블로깅 목록</h1>
      <div className="text-right">
        <button
          onClick={moveDetail}
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          신규 게시글 작성
        </button>
      </div>

      <table className="w-full ml-4 mr-4 mt-2">
        <thead>
          <tr>
            <th>글번호</th>
            <th>글제목</th>
            <th>조회수</th>
            <th>등록일시</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>
                <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
              </td>
              <td>{blog.viewCnt}</td>
              <td>{blog.createdAt}</td>
            </tr>
          ))}
          <tr>
            <td>1</td>
            <td>제목입니다1</td>
            <td>1</td>
            <td>2021-10-01</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
