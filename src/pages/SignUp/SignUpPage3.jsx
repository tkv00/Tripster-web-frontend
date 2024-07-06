import React, { useState, useEffect } from "react";
import SignUpTextInput from "../../components/SignUp/SignUpTextInput";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import { SignUpContainer, Title } from "./SignUpStyle";
import { theme } from "../../styles/theme";
import useValid from "../../hooks/useValid";

const INPUT_ITEM = [
  {
    title: "아이디",
    placeHolder: "6~20자 영문,숫자",
    key: "id",
    validName: "isId",
  },
  {
    title: "비밀번호",
    placeHolder: "8~12자 영문,숫자",
    key: "password",
    validName: "isPassword",
  },
  {
    title: "비밀번호 확인",
    placeHolder: "8~12자 영문,숫자",
    key: "passwordCheck",
    validName: "isPasswordConfirm",
  },
  {
    title: "이름",
    placeHolder: "한글로 입력해 주세요.",
    key: "name",
    validName: "isName",
  },
  { title: "이메일", placeHolder: "", key: "email", validName: "isEmail" },
];

function SignUpPage3() {
  //폼 상태
  const [form, setForm] = useState({
    id: "",
    password: "",
    passwordCheck: "",
    name: "",
    email: "",
  });

  //useValid 커스텀 훅
  const { validText, isValid } = useValid({ changeValue: form });

  const handleInputChange = (key, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [key]: value,
    }));
  };

  const formValidationComplete = Object.values(isValid).every(Boolean);

  return (
    // component파일의 SignUpInput 컴포넌트를 봐야함.
    <Wrapper>
      <SignUpContainer>
        <form>
          <Title>정보입력</Title>
          <InfoContainer>
            {INPUT_ITEM.map((item) => (
              <SignUpTextInput
              
                item={item}
                key={item.key}
                value={form[item.key]}
                onChange={(value) => handleInputChange(item.key, value)}
                valid={isValid[item.validName]}
                errorMessage={validText[item.key]}
              />
            ))}
          </InfoContainer>
          <SubmitButton disabled={!formValidationComplete}>
            가입완료
          </SubmitButton>
        </form>
      </SignUpContainer>
    </Wrapper>
  );
}
//====================================================

const InfoContainer = styled.div`
  align-items: center;
  overflow: visible;
`;

const SubmitButton = styled.button`
  text-align: center;
  background-color: ${(props) =>
    props.disabled ? `${theme.color.globalGray}` : `${theme.color.globalBlue}`};
  width: ${({ theme }) => theme.size.inputSize.width};
  height: ${({ theme }) => theme.size.inputSize.height};
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 600;
`;
export default SignUpPage3;
