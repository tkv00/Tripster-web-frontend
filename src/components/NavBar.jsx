import { Link,useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
export function NavBar() {
    const location = useLocation(); // 현재 위치 추적
    useEffect(() => {
      const handleScroll = () => {
        console.log(window.scrollY);
        if (window.scrollY > 50) {
          console.log("Setting isScrolled to true");
          setIsScrolled(true);
        } else {
          console.log("Setting isScrolled to false");
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    const [isScrolled, setIsScrolled] = useState(false);
    const isMainPage = location.pathname === "/"; // 메인 페이지 여부 확인
    const topMenuClass = `topMenu ${isScrolled ? "scrolled" : ""}`;
    // 스크롤 상태 및 현재 페이지에 따른 클래스 이름 결정
    const linkClass = `menuItem linkItem${isMainPage ? " mainPage" : ""}${
      isScrolled ? " scrolled" : ""
    }`;
  
    return (
      <div className={topMenuClass}>
        <Link className={`${linkClass} menuItemHome`} to="/">
          HOME
        </Link>
  
        <Link
          className={`${linkClass} menuItemStartPlanning`}
          to="/start-planning"
        >
          START PLANNING
        </Link>
  
        <Link className={`${linkClass} menuItemLogin`} to="/login">
          로그인
        </Link>
  
        <Link className={`${linkClass} menuItemSignUp`} to="/signup1">
          회원가입
        </Link>
      </div>
    );
  }
  