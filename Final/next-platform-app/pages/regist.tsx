//import { GetServerSideProps } from "next";
//신규회원가입 페이지 컴포넌트
//호출주소 : http://localhost:3000/regist
//회원가입 페이지

//화면상에 데이터 관리를 위한 useState 훅 참조하기
import { useState } from 'react';

//프론트엔드 라우팅 주소 이동처리를 위한 useRouter next/router 라이브러리 참조하기
import { useRouter } from 'next/router';

//신규회원 가입정보 인터페이스 타입 참조하기
import { IEntryMember } from '@/interfaces/member';

const Regist = () => {
  //useRouter() 함수를 사용하여 라우터 객체를 가져온다.
  const router = useRouter();

  //신규회원가입 정보 상태 데이터 정의 및 값 초기화처리
  //useSatte(초기값) 함수는 [변수, 변수값변경 세터함수] 배열을 반환한다.
  const [member, setMember] = useState<IEntryMember>({
    email: '',
    password: '',
    name: '',
  });

  //사용자 입력요소의 값이 변경될때마다 데이터 소스와 동기화 처리해주는 이벤트 처리 함수
  const memberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMember({
      ...member, //기존 member 객체내용을 복사해서 가져온다.
      [e.target.name]: e.target.value, //name 은 속성값 -> name ="???" 에서 name 을 의미한다.
    });
    console.log('변경됨ㅋㅋㅋ');
  };

  //registSubmit(회원가입버튼) 함수 정의
  const registSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //Form Submit 이벤트가 호출되면 어떤식으로든 화면을 리프레시하는 기능이 작동되므로 해당 form submit 이벤트를 취소하여
    //화면 리프레시를 막아준다.
    e.preventDefault();

    //백엔드 RESTful API 중 신규 회원가입 API를 fetch() ajax호출기능을 통해 가입정보를 백엔드로 전달한다.
    //예시1) ES2015 자바스크립트 기본 AJAX 통신 내장 라이브러리인 fetch를 이용해 백엔드와 통신하기
    //await fetch("백엔드API호출주소", 호출옵션);
    //fetch() 함수를 통해 데이터를 백엔드로 전달할 때는 반드시 json 문자열 형태로 전달합니다.
    //json.stringify(json데이터); json데이터를 json 문자열로 변경해주는 내장함수

    try {
      const response = await fetch('http://localhost:5000/api/member/entry', {
        method: 'POST',
        body: JSON.stringify(member),
        headers: {
          //프론트엔드에서 제공하는 데이터 타입의 유형을 지정 필수
          'Content-Type': 'application/json',
        },
      }); //전달할 데이터를 json 문자열로 변경하여 전달한다.

      //fetch()함수 호출결과 백엔드 반환 실제 데이터 추출하기
      const result = await response.json();

      if (result.code == 200) {
        console.log('신규 회원가입이 완료되었습니다.', result.data);
        //정상적으로 회원가입된 경우 로그인 페이지 컴포넌트로 이동처리
        //Next.js 에서는 페이지 이동시 router.push() 함수를 사용한다.
        //router.push('이동시키고 하는 프론트엔드 도메인주소를 제외한 url 주소 정보');
        router.push('/login');
      } else {
        console.log('백엔드 서버 에러 발생', result.msg, result.code);
        if (result.msg == '이메일 중복입니다.') {
          alert('이미 가입된 회원입니다.');
        }
      }
    } catch (err) {
      console.error('백엔드 REST API 호출중에 에러가 발생했습니다.');
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Regist your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* 신규 회원가입  폼영역 */}
          <form className="space-y-6" onSubmit={registSubmit}>
            {/* 메일주소 입력요소 영역 */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={member.email}
                  onChange={memberChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* 사용자 암호 입력요소 영역 */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={member.password}
                  onChange={memberChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* 사용자 이름 입력요소 영역 */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={member.name}
                  onChange={memberChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* 회원가입 버튼 표시영역 */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Regist
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{' '}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Regist;
