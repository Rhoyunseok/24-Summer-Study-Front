// SSR(Server Side Rendring)은 최초로 해당 컴포넌트의 UI를 생성하는 위치가
//사용자 요청시 서버에서 HTML+DATA 결과물을 동적으로 생성하고
//동적으로 서버에서 만들어진 HTML소스를 웹브라우저로 가져와 해당 영역에 표시한다.
//SEO(검색엔진 최적화시 주로 사용하거나 또는 CSR로딩 지연이 발생시 SSR로 대체 가능)

// import { useState } from "react"; //필요 없음?ㄷㄷ이걸 사용한다는 것은 클라이언트에서 사용한다는 거니깐 필요 없다고 하네요
import { IArticle, ArticleTypeCode, BoardTypeCode } from "@/interfaces/article";

const SSR = ({ articles }: { articles: IArticle[] }) => {
  return (
    <div>
      <h1>SSR 예시코드</h1>
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

//SSR 구현을 위한 getServerSideProps 함수 호출하기
//SSR 구현을 위한 이미 정해져 있는 getServerSideProps 함수의 기능만 구현해주면 됨
//getServerSideProps()함수는 해당 컴포넌트를 최초로 화면에 렌더링시에 자동으로 먼저 호출됨
/*d여기서 데이터 가져와서 위에서 props 로 뿌려줌 실행순서 참조*/
//SSR 실행순서 : getServerSideProps() 함수 실행 및 결과값 porps 전달 -> 해당컴포넌트 실행 (props)-서버에서 실행-> 브라우저에 렌더링
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/api/article/list");
  const result = await res.json();

  return {
    //백엔드에서 게시글 데이터를 조회해와서 해당 컴포넌트의 props 데이터로 파라메터를 형식으로 전달한다.
    props: { articles: result.data },
  };
};

export default SSR;
