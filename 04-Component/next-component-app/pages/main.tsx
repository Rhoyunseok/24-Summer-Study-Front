//react 라이브러리에서 useState 함수 참조하기
import { useState } from 'react';

//폰트스타일을 구글 폰트 참조하기
import { Inter } from 'next/font/google';

// 폰트스타일을 구글 폰트 참조하기
const inter = Inter({ subsets: ['latin'] });

import { GuideType, IGuide } from '@/interface/main';

//각종 재사용 컴포넌트 참조하기
import Header from '@/components/header';
import LogoContents from '@/components/logo-contents';
import Guide from '@/components/guide';

// type Guide = {
//   href: string;
//   title: string;
//   desc: string;
// };
// interface IGuide {
//   href: string;
//   title: string;
//   desc: string;
// }

function Main() {
  //제목 상태값 정의하기
  //userState(초기설정값)은 반환값으로 설정된 변수값과 값을 변경하는 전용세터함수를 반환합니다.
  //state값은 반드시 지정된 setter함수를 통해 변경해야합니다.
  const [title, setTitle] = useState('메인페이지');

  //next.js 로고 이미지 경로 데이터 정의
  const logoPath = '/next.svg';

  const guides: GuideType[] = [
    {
      href: 'https://nextjs.org',
      title: 'Next.js',
      desc: 'Next.js 의 최신 기술을 경험해 보세요.',
    },
    {
      href: 'https://tailwindcss.com',
      title: 'Tailwind CSS',
      desc: 'Tailwind CSS 의 최신 기술을 경험해 보세요.',
    },
    {
      href: 'https://jslangchain.com',
      title: 'LangChain.js',
      desc: 'LangChain.js 의 최신 기술을 경험해 보세요.',
    },
    {
      href: 'https://mixedcode.com',
      title: 'mixedCode.com',
      desc: '여러분의 기술과 경험을 공유해보세요.',
    },
  ];

  //자식 컴포넌트에서 발생한 이벤트 처리 함수
  const handleChildClick = (url: string) => {
    console.log('이동할 url데이터 : ', url);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>{title}</h1>
      {/* 헤더 컴포넌트 영역 */}
      <Header mainPage="pages/main.tsx" onClick={handleChildClick}>
        전달하기
      </Header>
      {/* 로고 컴포넌트 영역 */}
      <LogoContents logoPath={logoPath} />
      {/* 가이드 컴포넌트 영역-Props방식으로 자식 컴포넌트에게 읽기 전용 데이터를 전달 */}
      <Guide guides={guides} />
    </main>
  );
}

export default Main;
