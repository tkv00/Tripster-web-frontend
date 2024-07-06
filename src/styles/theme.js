import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard-Black";
    src: url("/fonts/Pretendard-Black.otf");
  }
`;

export const theme = {
  fontSize: {
    title: "39px",
  },
  fontWeight: {
    semiBold: 600,
  },
  size: {
    inputSize: { width: "550px", height: "60px" },
  },
  color: {
    globalBlue: "#2D62F1",
    globalGray: "#C2C2C2",
  },
};
