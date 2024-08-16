//SSG (Static Site Generation) 예시코드
//정적인 웹페이지 소스를 개발환경 빌드 타입에 미리 만들어서 서버에 배포하고
//배포된 서버의 소스를 그냥 웹브라우저로 해석해주는 방식 적용
//정적웹사이트(단순 웹사이트-db프로그래밍이 필요 없는)만들고 싶을때
//빌드타입을 SSG로 설정하면 된다.
//데이터 등록/변경 주기가 긴 웹사이트를 개발할때 주로 사용함
//기본적으로 next.js의 모든 컴포넌트 파일은 JSX만 표시할때는 SSG방식으로 작동합니다.
//방법 : getStaticProps()함수를 사용하여 정적인 데이터를 미리 만들어서 웹페이지에 표시함
/*기본적으로 NEXT.JS 의 모든 컴포넌트는 기본적으로 CSR이지만 데이터 연동이 없는 단순 컴포넌트는 SSG방식으로 렌더링이 된다 */

import { IArticle, ArticleTypeCode, BoardTypeCode } from "@/interfaces/article";

const SSG = ({ articles }: { articles: IArticle[] }) => {
  return (
    <div>
      <h1>SSG 예시코드</h1>
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

//getStaticProps()함수는 SSG(StaticSiteGeneration)방식으로 개발자 컴퓨터 (환경)에서 빌드타임에
//restapi를 호출하여 빌드 타임의 데이터를 기준으로 정적 웹페이지를 생성해주는 함수입니다.
//SSG실행 순서 : 개발자환경 npm run build -> getStaticProps()함수 실행 및 결과값 props 전달 -> 해당컴포넌트 실행 (props)-서버에서 실행-> 브라우저에 렌더링
//-->컴포넌트별 getStaticProps()함수실행 ->실행 결과 반환데이터를 해당 컴포넌트의 props로 전달하여 정적 웹페이지 생성
//최종 서버에 배포하면 빌드타임에 생성된 정적웹페이지가 메뉴 클릭시 웹브라우저로 전달 표시함
// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:5000/api/article/list");
//   const result = await res.json();

//   return {
//     //백엔드에서 게시글 데이터를 조회해와서 해당 컴포넌트의 props 데이터로 파라메터를 형식으로 전달한다.
//     props: { articles: result.data },
//   };
// };

//ISR (Incremental Static Regeneration)은 SSG와 비슷하지만 다른점은
//빌드타임에 정적인 웹페이지를 생성하는 것이 아니라 사용자 요청시에
//필요한 페이지만 정적으로 생성하는 방식이다.
//사용방법은 getStaticProps()함수에 revalidate라는 파라메터를 추가하고
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/article/list");
  const result = await res.json();

  return {
    //백엔드에서 게시글 데이터를 조회해와서 해당 컴포넌트의 props 데이터로 파라메터를 형식으로 전달한다.
    props: { articles: result.data },
    revalidate: 30, //페이지의 유효기간(수명)을 초단위로 지정한다.
  };
};

export default SSG;
