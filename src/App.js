import "./App.css";
import "./components/Main/Slider.js";
import { Routes, Route } from "react-router-dom";
import TextInput from "./components/Main/TextInput.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpPage2 from "./pages/SignUp/SignUpPage2.jsx";
import SignUpPage1 from "./pages/SignUp/SignUpPage1.jsx";
import Wrapper from "./components/Wrapper.js";
import LoginPage from "./pages/Login_SignUp/LoginPage.js";
import SignUpPage3 from "./pages/SignUp/SignUpPage3.jsx";
import Slider from "./components/Main/Slider.js";
import place0 from "./img/place0.jpeg";
import place1 from "./img/place1.jpeg";
import place2 from "./img/place2.jpg";
import place3 from "./img/place3.jpeg";
import Banner from "./components/Main/Banner.jsx";
import PlanBoard from "./components/Main/PlanBoard.jsx";
import LoginHandler from "./components/Login/LoginHandler.js";
import PlanBoard2 from "./components/Main/PlanBoard2.jsx";
import ContainerBelt from "./components/Main/ContainerBelt.jsx";
import PopularTrip from "./components/Main/PopularTrip.jsx";
import Footer from "./components/Main/Footer.jsx";
import MyTravelType from "./components/Mbti/MyTravelType.jsx";
import MyTripBoard from "./pages/MyTripBoard.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { ThemeProvider } from "styled-components";
import { GlobalStyle,theme } from "./styles/theme.js";

function App() {
  const slideData = [
    {
      index: 0,
      headline: "SEOUL",
      src: place0,
    },
    {
      index: 1,
      headline: "BUSSAN",
      src: place1,
    },
    {
      index: 2,
      headline: "JEJU",
      src: place2,
    },
    {
      index: 3,
      headline: "DEAGU",
      src: place3,
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {/* 상단 바 서버통신X */}
        <NavBar />
        <Wrapper>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <div className="App-header">
                    <TextInput />
                    <Slider heading="Example Slider" slides={slideData} />
                    {/* components파일 -> Banner파일  이미지 4개를 가져오는데 공공데이터를 이용해서 이미지4개+장소명4개 통신 */}
                    <Banner />
                    <PlanBoard />
                    <PlanBoard2 />
                    <ContainerBelt />
                    <PopularTrip />
                    <Footer />
                  </div>
                </div>
              }
              // 다른페이지 이동 로직 (서버X)
            ></Route>
            <Route
              path="/login/oauth2/callback/kakao"
              element={<LoginHandler />}
            />
            <Route path="/signup1" element={<SignUpPage1 />}></Route>
            <Route path="/signup2" element={<SignUpPage2 />}></Route>
            <Route path="/signup3" element={<SignUpPage3 />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/loginSuccess" element={<h1>로그인 성공</h1>}></Route>
            <Route path="/loginFailure" element={<h1>로그인 실패</h1>}></Route>
            <Route path="/MyTravelType" element={<MyTravelType />}></Route>
            <Route path="/MyTripBoard" element={<MyTripBoard />}></Route>
          </Routes>
        </Wrapper>
      </div>
    </ThemeProvider>
  );
}

export default App;
