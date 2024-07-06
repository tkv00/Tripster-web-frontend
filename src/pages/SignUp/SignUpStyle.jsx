import styled from "styled-components";

export const SignUpContainer = styled.div`
  
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  overflow: visible;
  flex-direction: column;
  display: flex; /* Updated from 'position: flex' to 'display: flex' */
  background: white;
`;

export const Title = styled.h2`
  font-size: 39px;
  font-weight: 600;
  justify-content: center;
  margin-top: 150px;
  @font-face {
    font-family: "Pretendard-Black";
    src: url("../../fonts/Pretendard-Black.otf");
  }
  font-family: "Pretendard-Black";
`;

export const IconImage = styled.img`
  height: 34px;
  width: 36px;
  position: relative;
  right: 298px;
  bottom: 19px;
  margin-block-start: 38px;
`;
export const EmailText = styled.div`
  color: ${(props) => (props.buttonName === 2 ? "#391C1C" : "white")};
  text-align: center;
  font-size: 23px;
  font-weight: 600;
  font-family: "Pretendard";
  position: absolute;
  left: 62px;
  top: 21px;
`;

export const MainContent = styled.div`
  width: 811px;
  height: 604px;
  top: 200px;
  flex-direction: column; /* 내부 요소를 세로로 정렬 */
  align-items: center; /* 가로축 중앙 정렬 */
  justify-content: center; /* 세로축 중앙 정렬 */

  display: flex;
  overflow: visible;
  position: absolute;
  align-items: center;
`;
export const ContentBox = styled.div`
  width: 811px;
  height: 604px;
  position: absolute;
  background: white;
  border-radius: 30px;
  border: 2px #c2c2c2 solid;
`;
export const SpecialTripText = styled.div`
  width: 572px;
  height: 55px;
  left: 120px;
  top: 82px;
  position: absolute;
  text-align: center;
  color: #0038ff;
  font-size: 42px;
  font-family: "Unbounded";
  font-weight: 400;
  word-wrap: break-word;
`;
export const SignUpPrompt = styled.div`
  left: 203px;
  top: 158px;
  position: absolute;
  text-align: center;
  color: #3b3b3b;
  font-size: 18px;
  font-family: "Pretendard";
  font-weight: 400;
  word-wrap: break-word;
`;

export const OrText = styled.div`
  left: 388px;
  top: 335px;
  position: absolute;
  text-align: center;
  color: #3b3b3b;
  font-size: 20px;
  font-family: "Pretendard";
  font-weight: 400;
  word-wrap: break-word;
`;
export const DividerLeft = styled.div`
  left: 81px;
  top: 347px;
  position: absolute;
  width: 281px;
  height: 0;
  border: 2px #c2c2c2 solid;
`;
export const DividerRight = styled.div`
  width: 281px;
  height: 0;
  border: 2px #c2c2c2 solid;
  left: 449px;
  top: 347px;
  position: absolute;
`;
export const NextBtn = styled.button`
  width: 616px;
  height: 71px;
  background-color: ${(props) =>
    props.isNextButtonEnabled ? "#275efe" : "#c2c2c2"};
  font-size: 23px;
  font-family: "Pretendard";
  font-weight: 600;
  margin-top: 30px;
  color: white;
  text-align: center;
  border-radius: 20px;
  border: none;
  cursor: ${(props) => (props.isNextButtonEnabled ? "pointer" : "not-allowed")};
`;
export const Title2 = styled.div`
  padding-right: 310px;
  padding-top: 50px;
  font-size: 23px;
  font-weight: 600;
`;
export const Rectangle = styled.div`
  box-sizing: border-box;
  align-items: center;
  top: 530px; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%);
  justify-content: center;
  position: relative;
  background: white;
  border: 1px solid #c2c2c2;
  border-radius: 30px;
  width: 616px;
  height: 464px;
  position: absolute;
  overflow: visible;
`;
export const DialogContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 87px;
`;
export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  --active: #275efe;
  --active-inner: #fff;
  --focus: 2px rgba(39, 94, 254, 0.3);
  --border: #bbc1e1;
  --border-hover: #275efe;
  --background: #fff;
  --disabled: #f6f8ff;
  --disabled-inner: #e1e6f9;
  appearance: none;
  outline: none;
  display: inline-block;
  position: relative;
  margin: 0;
  cursor: pointer;
  border: 1px solid var(--bc, var(--border));
  background: var(--b, var(--background));
  transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;

  &:checked {
    --b: var(--active);
    --bc: var(--active);
  }

  &:checked:after {
    opacity: 1;
    transform: rotate(43deg);
  }

  &:disabled {
    --b: var(--disabled);
    cursor: not-allowed;
    opacity: 0.9;
  }

  &:disabled:checked {
    --b: var(--disabled-inner);
    --bc: var(--border);
  }

  &:hover:not(:checked):not(:disabled) {
    --bc: var(--border-hover);
  }

  &:focus {
    box-shadow: 0 0 0 var(--focus);
  }
`;

export const CheckBoxLabel = styled.label`
  font-size: 19px;
  font-weight: 400;
  color: #828282;
  padding: 5px;
  cursor: pointer;
`;
