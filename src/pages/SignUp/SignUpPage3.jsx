import React, { useState, useEffect } from "react";
import SignUpTextInput from "../../components/SignUp/SignUpTextInput";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import { SignUpContainer, Title } from "./SignUpStyle";
import { theme } from "../../styles/theme";
import { sync } from "framer-motion";

const INPUT_ITEM = [
  { title: "아이디", placeHolder: "6~20자 영문,숫자", key: "id" },
  { title: "비밀번호", placeHolder: "8~12자 영문,숫자", key: "password" },
  {
    title: "비밀번호 확인",
    placeHolder: "8~12자 영문,숫자",
    key: "passwordCheck",
  },
  { title: "이름", placeHolder: "한글로 입력해 주세요.", key: "name" },
  { title: "이메일", placeHolder: "", key: "email" },
];

//input상자 유효성 완료함수
function formValidationComplete() {}
function SignUpPage3() {
  //폼 상태
  const [form, setForm] = useState({
    id: "",
    password: "",
    passwordCheck: "",
    name: "",
    email: "",
  });
  const handleInputChange = (key, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [key]: value,
    }));
  };
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
              />
            ))}
          </InfoContainer>
          <SubmitButton>가입완료</SubmitButton>
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
  background-color: ${formValidationComplete
    ? `${theme.color.globalGray}`
    : `${theme.color.globalBlue}`};
  width: ${({ theme }) => theme.size.inputSize.width};
  height: ${({ theme }) => theme.size.inputSize.height};
  border-radius: 20px;
  border: none;
  color: white;
`;
export default SignUpPage3;
