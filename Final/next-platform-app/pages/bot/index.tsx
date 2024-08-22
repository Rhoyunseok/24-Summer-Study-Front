//사용자간 기초 채팅기능 구현 컴포넌트
import { useState, useEffect, use } from 'react';
import { IMessage } from '@/interfaces/message';
import { useRouter } from 'next/router';

//채팅 클라이언트 소켓 객체 생성
import { socket } from '@/library/socket';

//챗봇 컴포넌트 정의
const Bot = () => {
  //라우터 객체 생성
  const router = useRouter();

  //현재 사용자 고유번호 상태값 정의
  const [memberId, setMemberId] = useState<number>(1);

  //채팅 메시지 입력 요소 바인딩 텍스트 상태값 정의
  const [message, setMessage] = useState<string>('');

  //채팅 메시지 목록(채팅이력정보) 상태값 정의하기
  const [messageList, setMessageList] = useState<IMessage[]>([]);

  //useEffect훅은 CSR 환경에서 작동되고 과 useRoter훅은 기본적으로 SSR/CSR순서로 2번 작동되므로
  //useEffect훅에서 userRouter훅이용해 URL키값을 추출안되는 문제는 userRouter.isReady값을 이용해 해결가능
  //userRouter.isReady 값이 기본은 false->true 로 변경되는 시점에 관련 기능 구현하면됨...
  useEffect(() => {
    console.log('현재 URL 사용자 고유 번호 추출하기 : ', router.query.id);

    if (router.query.id != undefined) {
      setMemberId(Number(router.query.id)); //query.id는 string으로 전달되므로 숫자로 변환
    } else {
      alert('????');
    }
  }, [router.isReady]);

  //최초1회 화면이 렌더링되는 시점(마운팅)에 실행되는 useEffect함수
  //프로젝트 루트에 next.config.mjs 에서 reactStrictMode: false 로 변경해야 정확히 1회만 실행됨
  //채팅서버와 연결되는 클라이언트 채팅 소켓 객체 생성및 각종 채팅 이벤트 기능 구현영역
  useEffect(() => {
    //최초 화면이 랜더링되는 시점(최초1회)에 서버 소켓 연결하기
    socket.connect();
    //클라이언트 소켓과 연결이 **완료**되면 실행되는 이벤트처리함수
    //서버 소켓과 연결이 완료되면 자동으로 connect 이벤트가 발생됨
    //connect이벤트가 실행되면 처리하는 핸들러 함수를 정의하면됨
    //소케 시스템 이벤트
    socket.on('connect', () => {
      console.log('정상적으로 서버소켓과 연결이 완료됨');
    });

    //서버 소켓이 끊어진경우 발생하는 이벤트
    //서버와의 연결 소켓이 끊어진 경우 처리할 기능을 핸들러 함수에서 처리합니다.
    //소켓 시스템 이벤트
    socket.on('disconnect', () => {
      console.log('서버소켓 연결이 끊어짐');
    });

    //개발자 정의 클라이언트 소켓 이벤트 수신기 정의하기
    // socket.on('클라이언트 이벤트 수신기명', 서버에서 전달해준 데이터를 받는 함수);
    socket.on('gptMessage', (msg: IMessage) => {
      console.log('서버로부터 받은 메시지 확인 - gptMessage: ', msg);
      setMessageList(prev => [...prev, msg]);
    });

    //해당 채팅 컴포넌트가 화면에서 사라질때 (언마우팅시점)
    //소켓관련 이벤트를 모두 제거해줘야 합니다. 그렇지 않으면 메시지를 여러번 수신할 수 있음
    return () => {
      //socket.off('이벤트명') : 해당 이벤트 수신기를 제거하는 함수
      socket.off('receiveAll');
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  //채팅 메시지 전송 이벤트 처리 함수
  const sendMessage = () => {
    //채팅서버 소켓으로 메시지를 전송합니다.
    // socket.emit('서버 이벤트 수신기명', 전달할 데이터);

    const msgData = {
      member_id: memberId,
      name: `사용자-${memberId.toString()}`,
      profile: `http://localhost:5000/img/user${memberId.toString()}.png`,
      message: message,
      send_date: Date.now().toString(),
    };

    //채팅 서버소켓으로 메시지 전송하기
    //socket.emit('서버 이벤트 수신기명', 전달할 데이터);
    socket.emit('gpt', msgData);

    //메시지 입력박스 초기화
    setMessage('');
  };

  return (
    <div className="flex h-screen antialiased text-gray-800 mt-14 pb-10">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            {/* 메시지 목록 출력영역 */}
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  {messageList.map((msg, index) =>
                    msg.member_id === memberId ? (
                      // 오른쪽
                      <div
                        key={index}
                        className="col-start-6 col-end-13 p-3 rounded-lg"
                      >
                        <div className="flex items-center justify-start flex-row-reverse">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                            A
                          </div>
                          <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                            <div>{msg.message}</div>
                            <div className="absolute w-[200px] text-right text-xs bottom-0 right-0 -mb-5 text-gray-500">
                              {msg.name} {msg.send_date}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // 왼쪽
                      <div
                        key={index}
                        className="col-start-1 col-end-8 p-3 rounded-lg"
                      >
                        <div className="flex flex-row items-center">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                            A
                          </div>
                          <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                            <div>{msg.message}</div>
                            <div className="absolute w-[200px] text-left text-xs bottom-0 left-0 -mb-5 text-gray-500">
                              {msg.name} {msg.send_date}
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* 메시지 입력 및 보내기 영역 */}
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
              {/* 파일첨부버튼영역 */}
              <div>
                <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                  </svg>
                </button>
              </div>

              {/* 메시지 입력요소 영역 */}
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    name={message}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                </div>
              </div>

              {/* 메시지 전송버튼 영역 */}
              <div className="ml-4">
                <button
                  type="button"
                  onClick={sendMessage}
                  className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                >
                  <span>Send</span>
                  <span className="ml-2">
                    <svg
                      className="w-4 h-4 transform rotate-45 -mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bot;
