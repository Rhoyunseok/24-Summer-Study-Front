//넥슽 프론트엔드 클라이언트측 Socket.io 공통 모듈 구현
//npm i socke.io-client 프론트엔드 프로젝트에 socket.io 지원 모듈 설치 필요

//socketio client io 객체를 생성합니다
import { io } from 'socket.io-client';

//서버 URL
const chatServerURL = 'http://localhost:5000';

//socket.io 클라이언트 객체 생성하고 반환한다
//io(서버소켓주소, 연결옵션{autoConnect:false || true})
export const socket = io(chatServerURL, { autoConnect: false });
