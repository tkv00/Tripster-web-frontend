import React from "react";
import styled from "styled-components";
import FolderComponent from "../components/Mbti/FolderComponent";
const HeaderContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 50px;
`;

const MainContainer = styled.div`
  display: grid;
  margin: 10%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`;

const FolderCard = styled.div`
  grid-area: 1 / 4 / 2 / 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalenderCard = styled.div`
  grid-area: 1 / 2 / 2 / 4;
`;

const MapCard = styled.div`
  grid-area: 2 / 2 / 3 / 5;
`;
const TripBoard = styled.div`
  grid-area: 1/ 1 / 3 / 2;
`;
const MainText = styled.div`
  color: #0038ff;
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: max(3.3854vw, 10px);
  text-align: left;
  padding-bottom: 10px;
  padding-left: 10%;
`;

const SubText = styled.p`
  color: black;
  text-align: left;
  font-size: 15px;
  margin: 0px;
  padding-left: 10%;
  @media (max-width: 800px) {
    display: none;
  }
`;
const BoardCreateButtonContainer = styled.div`
  width: 433px;
  height: 65px;
  margin-right: 10%;
  justify-content: space-between;
  margin-left: 30px;
  border: 2px solid #2d62f1;
  border-radius: 40px;
  background-color: white;
  text-align: left;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const HeaderContainer2 = styled.div`
  display: inline-flex;
  justify-content: space-between;
`;
const BoardCreateButton = styled.button`
  width: 96px;
  height: 45px;
  border-radius: 28px;
  border: none;
  background-color: #2d62f1;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Test1 = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;
const Test12 = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;
const Test3 = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`;
function MyTripBoard() {
  return (
    <>
      <HeaderContainer>
        <MainText>MY TRIP BOARD</MainText>
        <HeaderContainer2>
          <SubText>
            평소에 여행 계획을 짜기 위해서 메모장에 기록해두거나 정확한 위치와
            거리를 볼 수 없어서 답답했나요?
            <br />
            당신만의 여행 계획 보드를 설계해보세요!
          </SubText>
          <BoardCreateButtonContainer>
            새로운 여행 보드 생성하기
            <BoardCreateButton>
              <svg
                width="37"
                height="17"
                viewBox="0 0 37 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.168945 8.90195H35.4209M35.4209 8.90195L25.93 1.85156M35.4209 8.90195L25.93 15.9523"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-linejoin="round"
                />
              </svg>
            </BoardCreateButton>
          </BoardCreateButtonContainer>
        </HeaderContainer2>
      </HeaderContainer>
      <MainContainer>
        <TripBoard>
          <Test12></Test12>
        </TripBoard>
        <CalenderCard>
          <Test3></Test3>
        </CalenderCard>
        <FolderCard>
          <FolderComponent></FolderComponent>
        </FolderCard>
        <MapCard>
          <Test1 style={{ backgroundColor: "black" }}></Test1>
        </MapCard>
      </MainContainer>
    </>
  );
}
export default MyTripBoard;
