import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import flight from "../../img/imgPlanepng.png";

const PlaneContainer = styled.div`
  height: 50vw;
  width: 100%;
  margin-top: 10%;
  display: flex;
  margin-left: 8%;
`;

const ContentWrapper = styled.div`
  display: flex;
  height: 50vw;
  flex-direction: column;
`;

const PlaneImg = styled.img`
  width: max(36.4583vw, 300px);
  height: max(36.4583vw, 300px);
  margin-right: 5%;
`;

const Text = styled.div`
  text-align: left;
  font-size: max(3.3854vw, 10px);
  font-weight: 600;
  color: #0038ff;
`;

const BtnMakeBoard = styled.button`
  background-color: #0038ff;
  font-size: max(10px, 1.0417vw);
  color: white;
  border: none;
  width: 18.0208vw;
  height: 4.3036vw;
  font-weight: 600;
  border-radius: 50px;
  margin-top: 3vw;

  @media (max-width: 1000px) {
    width: 200px;
    height: 70px;
    font-size: 18px;
  }
`;

const ContentText = styled.div`
  text-align: left;
  font-size: max(1.3542vw, 15px);
  font-weight: 600;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const UnboundedFont = styled.div`
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
`;

const HeaderFlexContainer = styled.div`
  display: flex;
  margin-top: -30%;
  align-items: center;
  width: 100%;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HorizontalLine = styled.hr`
  border: solid 1px #3B3B3B;
  position: relative;
  width: 40vw;
  flex: 1;
`;

const PlaneSvg = styled.svg`
  margin-left: 1vw;
`;

export default function PlanBoard() {
  const navigate = useNavigate();
  const useNavigateToMyTravelType = () => {
    navigate("/MyTripBoard");
  };

  return (
    <PlaneContainer>
      <PlaneImg src={flight} alt="Plane" />
      <ContentWrapper>
        <Text as={UnboundedFont}>
          <div>FOR</div>
          <div>PERFECT</div>
          <div>TRAVEL LIFE</div>
        </Text>
        <Divider>
          <HorizontalLine />
          <PlaneSvg width="58" height="54" viewBox="0 0 58 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M52.4712 33.2764L12.0542 43.7178L5.07544 31.6303L9.00646 30.8258L13.2095 34.5529L25.4715 31.4293L15.3841 13.9573L20.414 12.5185L37.5603 28.2593L50.3253 24.9918C51.2947 24.7252 52.2222 24.7879 53.1079 25.18C53.9936 25.5722 54.6797 26.1895 55.1661 27.032C55.864 28.2407 55.9299 29.4969 55.3639 30.8004C54.7978 32.104 53.8336 32.9293 52.4712 33.2764Z" fill="#3B3B3B"/>
          </PlaneSvg>
        </Divider>
        <ContentText>
          평소에 여행 계획을 짜기 위해서 메모장에 기록해두거나
        </ContentText>
        <ContentText>
          정확한 위치와 거리를 볼 수 없어서 답답했나요?
        </ContentText>
        <br />
        <ContentText>
          당신만의 여행 계획 보드를 설계해보세요!
        </ContentText>
        <BtnMakeBoard onClick={useNavigateToMyTravelType}>
          <svg style={{ marginRight: "1.0417vw" }} width="1.6146vw" height="2.0313vw" viewBox="0 0 31 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6097 39C9.70938 34.7545 6.04934 30.8111 3.6296 27.1698C1.20987 23.5286 0 20.1585 0 17.0596C0 12.4112 1.46858 8.70798 4.40574 5.94994C7.34291 3.1919 10.7442 1.81287 14.6097 1.81287C15.4315 1.81287 16.2457 1.8826 17.0523 2.02205C17.8589 2.1615 18.6426 2.35518 19.4035 2.6031L16.4359 5.67104C16.1316 5.60906 15.8348 5.57032 15.5457 5.55483C15.2565 5.53933 14.9445 5.53159 14.6097 5.53159C11.5356 5.53159 8.94084 6.60846 6.82548 8.76222C4.71011 10.916 3.65243 13.6818 3.65243 17.0596C3.65243 19.2598 4.55032 21.7777 6.3461 24.6132C8.14188 27.4487 10.8964 30.6019 14.6097 34.0727C18.323 30.6019 21.0776 27.4487 22.8733 24.6132C24.6691 21.7777 25.567 19.2598 25.567 17.0596C25.567 16.6877 25.5518 16.3159 25.5214 15.944C25.4909 15.5721 25.4453 15.2157 25.3844 14.8749L28.3976 11.8069C28.6716 12.6126 28.877 13.4493 29.014 14.317C29.151 15.1847 29.2194 16.0989 29.2194 17.0596C29.2194 20.1585 28.0096 23.5286 25.5898 27.1698C23.1701 30.8111 19.5101 34.7545 14.6097 39ZM24.106 3.11442L12.7835 14.6424V18.5471H16.6186L27.9411 7.01907L24.106 3.11442ZM29.2194 5.71752L30.4978 4.41597C30.8326 4.07509 31 3.64124 31 3.11442C31 2.5876 30.8326 2.15375 30.4978 1.81287L29.2194 0.511323C28.8846 0.170441 28.4585 0 27.9411 0C27.4237 0 26.9975 0.170441 26.6627 0.511323L25.3844 1.81287L29.2194 5.71752Z" fill="white"/>
          </svg>
          여행 보드 생성하기
        </BtnMakeBoard>
      </ContentWrapper>
    </PlaneContainer>
  );
}