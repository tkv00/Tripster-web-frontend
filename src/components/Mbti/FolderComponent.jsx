import React from "react";
import styled, { keyframes } from "styled-components";
import TripBoardImage from "../../img/plip.png"; // 업로드된 이미지 경로를 확인하세요

// 폴더 이미지가 올라오는 애니메이션
const rise = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
`;

// 컨테이너 스타일 설정
const Container = styled.div`
  display: flex;
  flex-direction: column; // 세로로 배열
  align-items: center; // 수평 중앙 정렬
  justify-content: center; // 수직 중앙 정렬
  position: relative;
  width: 100%; // 컨테이너 너비를 부모에 맞춤
  height: 100%; // 컨테이너 높이를 부모에 맞춤
`;

// 폴더 스타일 설정
const Folder = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  width: 20.8333vw; // 이미지 크기에 맞게 조정
  height: 13.8889vw; // 이미지 크기에 맞게 조정
  perspective: 500px;

  &::before {
    content: "";
    position: absolute;
    top: -20px; // 폴더 위쪽에 감지 영역 추가
    width: 100%;
    height: 40px; // 감지 영역의 높이 설정
    background: transparent;
  }
  &:hover div {
    filter: blur(2px);
  }

  &:hover div:nth-child(1) {
    animation: ${rise} 0.3s forwards;
    filter: blur(0);
  }
`;

// 폴더 이미지 스타일 설정
const FolderImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${TripBoardImage});
  background-size: cover;
  opacity: ${(props) => props.opacity};
  transform: translateZ(${(props) => props.depth}px);
  transition: filter 0.3s, transform 0.3s;
`;

const FolderText = styled.p`
  position: relative;
  font-size: 26px;
  font-weight: 400;
  margin: 0;
  top: 1px;
  font-family: "Unbounded", sans-serif;
  color: white;
  z-index: 1;
  display: flex;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: row; // 가로로 텍스트 배치
  position: absolute;
  text-align: center;
  justify-content: center;
`;
function FolderComponent() {
  return (
    <Container>
      <TextContainer>
        <FolderText>Trip Board List</FolderText>
      </TextContainer>
      <Folder top={100}>
        <FolderImage opacity="1" depth="0" />
      </Folder>
      <Folder top={60}>
        <FolderImage opacity="0.8" depth="-40" />
      </Folder>
      <Folder top={30}>
        <FolderImage opacity="0.6" depth="-60" />
      </Folder>
      <Folder top={0}>
        <FolderImage opacity="0.2" depth="-80" />
      </Folder>
    </Container>
  );
}

export default FolderComponent;
