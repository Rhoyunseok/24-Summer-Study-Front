//메뉴 링크를 위한 Link 컴포넌트를 import 합니다.
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex bg-gray-400 m-1 p-1">
      <div className="w-8/12 mt-4 px-4">
        <Link href="/">HOME</Link>|<Link href="/company/intro">회사소개</Link>|
        <Link href="/products/1/price">제품분류</Link>|
        <Link href="/blogs/">블로깅상세</Link>|
        <Link href="/company/contact">문의하기</Link>
      </div>
      <div className="w-4/12 mt-4 px-4">
        <Link href="/blogs/">로그인</Link>|<Link href="/blogs/">회원정보</Link>|
        <Link href="/blogs/">프로필</Link>|<Link href="/blogs/">환경설정</Link>|
      </div>
    </div>
  );
};

export default Header;
