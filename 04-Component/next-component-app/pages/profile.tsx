import Company from '@/components/company';
import Personal from '@/components/personal';

const Profile = () => {
  return (
    <>
      {/* 자식요소에 props로 읽기 전용 데이터를 전달한다 */}
      <Personal
        name="강창훈"
        email="test@test.com"
        phone="010-1234-5678"
        age={50}
      >
        <b>사용자 기본 프로필</b>
      </Personal>
      {/* 자식컴포넌트의 children 속성을 사용하여 부모 컴포넌트에서 자식 컴포넌트에게 전달한 데이터를 출력한다. */}
      <Company
        company="엠소프트웨어"
        role="풀스택개발자"
        address="서울시 강남구 테헤란로"
      >
        <span>회사정보</span>
      </Company>
    </>
  );
};

export default Profile;
