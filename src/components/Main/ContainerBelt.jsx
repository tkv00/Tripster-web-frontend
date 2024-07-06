import React from "react";
import styled, { keyframes } from "styled-components";
import img_jeju from "../../img/img_jeju.png";
import img_seoul from "../../img/img_seoul.png";
import img_busan from "../../img/img_busan.png";
import img_suwon from "../../img/Suwon.jpg";
import img_gyeongju from "../../img/Gyeongju.jpg";
import img_gangneung from "../../img/Gangneung.jpg";

const originalSlides = [
  { src: img_busan, text: "BUSAN" },
  { src: img_seoul, text: "SEOUL" },
  { src: img_jeju, text: "JEJU" },
  { src: img_suwon, text: "SUWON" },
  { src: img_gangneung, text: "GANGNEUNG" },
  { src: img_gyeongju, text: "GYEONGJU" },
];

const slides = [...originalSlides, ...originalSlides];

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-1 * (17.3611vw + 8.3333vw) * 6));
  }
`;

const SliderContainer = styled.div`
  margin-top: -10%;
  align-items: center;
  display: flex;
  height: 6.9444vw;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  border-top: solid 0.1vw #0038ff;
  border-bottom: solid 0.1vw #0038ff;
`;

const Slider = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 6.9444vw;
    width: 13.8889vw;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }
`;

const SlideTrack = styled.div`
  animation: ${scroll} 40s linear infinite;
  display: flex;
  width: calc((17.3611vw + 8.3333vw) * 12);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8.3333vw;
`;

const SlideImage = styled.img`
  height: 4.5139vw;
  width: 10.0694vw;
  display: block;
  border-radius: 50px;
`;

const SlideText = styled.span`
  color: #0038ff;
  font-size: 1.9792vw;
  display: block;
  margin-left: 2.0833vw;
`;

export default function ContainerBelt() {
  return (
    <SliderContainer>
      <Slider>
        <SlideTrack>
          {slides.map((slide, index) => (
            <Slide key={index}>
              <SlideImage
                src={slide.src}
                alt={slide.text}
              />
              <SlideText className="unbounded-font">
                {slide.text}
              </SlideText>
            </Slide>
          ))}
        </SlideTrack>
      </Slider>
    </SliderContainer>
  );
}