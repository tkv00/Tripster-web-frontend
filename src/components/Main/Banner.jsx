import React, { useState } from "react";
import styled from "styled-components";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import back1 from "../../img/back1.png";
import back2 from "../../img/back2.png";
import back3 from "../../img/back3.png";
import back4 from "../../img/back4.png";

const BannerContainer = styled.div`
  background-color: white;
  width: 89.5833vw;
  height: 31.3542vw;
  border-radius: 30px;
  box-shadow: 0px 0px 28.700000762939453px -5px #d9d9d9;
  flex-direction: column;
  margin-left: 4.5%;
  margin-top: 20%;
`;

const BannerText = styled.div`
  font-size: 3.3333vw;
  font-family: "Unbounded", sans-serif;
  text-align: left;
  margin: 25px;

  @media (max-width: 768px) {
    font-size: 1.9722vw;
  }
`;

const MoreLabel = styled.label`
  display: flex;
  margin-top: -2%;
  margin-left: 92%;
  color: #c2c2c2;
  font-size: 1.25vw;
  cursor: pointer;
`;

const BannerButtons = styled.div`
  display: flex;
  margin-top: -20px;
  margin-left: 30px;
  gap: 0.6944vw;
`;

const Button = styled.button`
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-align: center;
  align-items: center;
  border-radius: 50px;
  width: 7.7083vw;
  height: 3.8194vw;
  border: none;
  color: ${(props) => (props.active ? "white" : "#0038ff")};
  background-color: ${(props) => (props.active ? "#0038ff" : "#ededed")};
`;

const ImageContainer = styled.div`
  padding: 1vw;
  display: flex;
  border: none;
  gap: 1.3889vw;
  margin: 1.3889vw;
`;

const ImageItem = styled.div`
  flex: 1;
  margin: 0 10px;
  position: relative;

  img {
    width: 100%;
    height: 90%;
  }
`;

const ImageText = styled.div`
  transform: translate(5%, -120%);
  color: white;
  font-size: 1.7188vw;
  z-index: 20;
  text-align: left;
`;

const HeartIcon = styled.div`
  transform: translate(0%, 0%);
  position: absolute;
  top: 0;
  right: 0;
  margin: 15px;
  z-index: 40;
  font-size: 35px;
  cursor: pointer;
  transition: transform 0.4s ease;

  &:active {
    transform: scale(1.5);
  }

  &:hover {
    transform: scale(1.2);
  }
`;

export default function Banner() {
  const [images, setImages] = useState([
    { src: back1, alt: "Image 1", text: "서울 남산타워", liked: false },
    { src: back2, alt: "Image 2", text: "경복궁", liked: false },
    { src: back3, alt: "Image 3", text: "DDP", liked: false },
    { src: back4, alt: "Image 4", text: "서울 스타필드", liked: false },
  ]);
  const [activeButton, setActiveButton] = useState("local");

  const toggleLike = (index) => {
    const newImages = [...images];
    newImages[index].liked = !newImages[index].liked;
    setImages(newImages);
  };

  return (
    <BannerContainer>
      <BannerText>{`Today\'s Trip Route`}</BannerText>
      <MoreLabel>더보기</MoreLabel>
      <BannerButtons>
        <Button
          active={activeButton === "local"}
          onClick={() => setActiveButton("local")}
        >
          국내
        </Button>
        <Button
          active={activeButton === "international"}
          onClick={() => setActiveButton("international")}
        >
          해외
        </Button>
      </BannerButtons>
      <ImageContainer>
        {images.map((image, index) => (
          <ImageItem key={index}>
            <img src={image.src} alt={image.alt} />
            <ImageText>{image.text}</ImageText>
            <HeartIcon>
              {image.liked ? (
                <HeartFilled
                  onClick={() => toggleLike(index)}
                  style={{ color: "red" }}
                />
              ) : (
                <HeartOutlined
                  onClick={() => toggleLike(index)}
                  style={{ color: "white" }}
                />
              )}
            </HeartIcon>
          </ImageItem>
        ))}
      </ImageContainer>
    </BannerContainer>
  );
}
