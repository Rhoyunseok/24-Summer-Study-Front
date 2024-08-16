//CSR(Client Side Rendering) 방식으로 ui 표시하기
//CSR은 서버에서 렌더링을 하지 않고, 브라우저에서 자바스크립트를 이용해 렌더링을 하는 방식
import { useState, useEffect } from "react";
//공통 타입 참조하기
import { IArticle, ArticleTypeCode, BoardTypeCode } from "@/interfaces/article";
const CSR = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  // //화면이 최초로 렌더링 되는 시점(마운팅 시점)을 캐치하기 위해 useEffect훅을 사용
  // useEffect(() => {
  //   //최초 화면 랜더링(CSR) 되기전에 백엔드에서 API에서 게시글 목록 가져오기 구현
  //   //동기 방식의 ECMAScript 표준 AJAX 통신 기능인 fetch API를 사용
  //   fetch("http://localhost:5000/api/article/list")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log("백엔드 RESTFUL API에서 전달된 게시글 데이터목록", result);
  //       setArticles(result.data);
  //     });
  // }, []);

  //비동기 방식으로 useEffect훅과 fetch 함수를 사용한 데이터 처리하기
  useEffect(() => {
    //비동기 방식으로 데이터 처리하기
    const fetchData = async () => {
      //비동기 방식으로 백엔드 RESTFUL API에 데이터 요청하기
      const res = await fetch("http://localhost:5000/api/article/list"); //찐찐찐

      //next.js 방식
      // const res = await fetch("http://localhost:3000/api/article/list");

      if (!res.ok) {
        throw new Error("HTTP 호출 에러발생");
      } else {
      }
      const result = await res.json();
      setArticles(result.data);
    };
    //비동기 fetching함수를 호출하고 에러발생 예외처리 함
    fetchData().catch((e) => {
      console.log("백엔드 호출에러 발생", e);
    });
  }, []);

  return (
    <div>
      <h1>CSR 예시코드</h1>
      <table className="W=full">
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>조회수</th>
            <th>아이피</th>
            <th>등록일시</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <td>{article.article_id}</td>
              <td>{article.title}</td>
              <td>{article.view_count}</td>
              <td>{article.ip_address}</td>
              <td>{article.reg_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CSR;
