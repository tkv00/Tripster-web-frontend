import Wrapper from "../../components/Wrapper";
import {
  SignUpContainer,
  IconImage,
  EmailText,
  MainContent,
  ContentBox,
  SpecialTripText,
  SignUpPrompt,
  OrText,
  DividerLeft,
  DividerRight,
} from "./SignUpStyle.jsx";
import { useNavigate } from "react-router-dom";
import emailIcon from "../../img/img1.png"; // 예시 경로, 실제 경로에 맞게 조정 필요
import kakaoIcon from "../../img/img2.png";
import NaverIcon from "../../img/img3.png";
import axios from "axios"; // Axios import
// 이미지 매핑 객체
const icons = {
  Email: emailIcon,
  Kakao: kakaoIcon,
  Naver: NaverIcon,
};
function SignUpPage1() {
  return (
    <Wrapper>
      <SignUpContainer>
        <MainContent>
          <ContentBox></ContentBox>
          <SpecialTripText>Make your trip special</SpecialTripText>
          <SignUpPrompt>
            지금 회원가입 하시고 다양한 여행 서비스를 경험해보세요!
          </SignUpPrompt>
          <OrText>또는</OrText>
          {/* 이메일 가입버튼(회원가입 페이지로 이동 서버X) */}
          <BtnLoginTheme buttonName={1} />
          <DividerLeft></DividerLeft>
          <DividerRight></DividerRight>
          {/* 카카오 로그인으로 이동 버튼 */}
          <BtnLoginTheme buttonName={2} />
          {/* 네이버 로그인으로 이동 버튼 */}
          <BtnLoginTheme buttonName={3} />
        </MainContent>
      </SignUpContainer>
    </Wrapper>
  );
}

function BtnLoginTheme({ buttonName }) {
  //버튼 클릭 훅 사용
  let navigate = useNavigate();
  let name = ["이메일로 가입하기", "카카오로 가입하기", "네이버로 가입하기"];
  let altName = ["Email", "Kakao", "Naver"];
  let index = buttonName - 1;
  let icon = icons[altName[index]];

  const handleKakaoLogin = async () => {
    try {
      // 백엔드 서버의 카카오 로그인 요청 엔드포인트로 요청을 보냅니다.
      // 이 URL은 백엔드 구현에 따라 달라집니다.
      const response = await axios.get("/api/v1/auth/kakao/login");
      // 백엔드 서버로부터 받은 리디렉션 URL로 사용자를 리디렉션합니다.
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error("카카오 로그인 요청 실패:", error);
    }
  };
  const handleClick = () => {
    if (buttonName === 1) {
      // 이메일로 가입하기 버튼일 경우
      navigate("/signup2"); // 회원가입 경로로 이동
    } else if (buttonName === 2) {
      handleKakaoLogin(); // 카카오 로그인 버튼일 경우의 처리
    }
  };

  return (
    <div
      className={`authButton authButton` + altName[index]}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div style={{ position: "relative", left: "200px" }}>
        <EmailText buttonName={buttonName}>{name[index]}</EmailText>
        <IconImage src={icon} alt={altName[index]} />
      </div>
    </div>
  );
}

export default SignUpPage1;
