import React, { useState, useEffect, useRef, useCallback } from "react";
import SignUpTextInput from "../../components/SignUp/SignUpTextInput.jsx";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import { SignUpContainer, Title } from "./SignUpStyle";
import { theme } from "../../styles/theme";
import useValid from "../../hooks/useValid";
import useIdCheck from "../../hooks/useIdCheck";
import { Report } from "notiflix/build/notiflix-report-aio";

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

export default function SignUpPage3() {
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
  const { idCheck, handleChange, isDuplicated } = useIdCheck(form);
  const dialogRef = useRef();

  const handleInputChange = useCallback((key, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [key]: value,
    }));
  }, []);

  // const handleIdCheck = useCallback(async () => {
  //   const result = await idCheck(form.id);
  //   if (result === false) {
  //     Report.success(
  //       "사용 가능한 아이디",
  //       "이 아이디를 사용할 수 있습니다.",
  //       "확인"
  //     );
  //   } else if (result === true) {
  //     Report.failure(
  //       "중복된 아이디",
  //       "이미 사용 중인 아이디입니다. 다른 아이디를 선택해주세요.",
  //       "확인"
  //     );
  //   } else {
  //     Report.warning(
  //       "오류 발생",
  //       "아이디 중복 확인 중 오류가 발생했습니다. 다시 시도해주세요.",
  //       "확인"
  //     );
  //   }
  // }, [form.id, idCheck]);

  const formValidationComplete = Object.values(isValid).every(Boolean);

  // const handle = () => {
  //   Report.failure(
  //     "중복된 아이디",
  //     "중복된 아이디입니다. 다시 시도하세요.",
  //     "확인"
  //   );
  // };
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
                onChange={handleInputChange}
                valid={isValid[item.validName]}
                errorMessage={validText[item.key]}
                isValid={isValid}
                //handleIdCheck={item.key === "id" ? handleIdCheck : undefined}
              />
            ))}
          </InfoContainer>
          <SubmitButton type="submit" disabled={!formValidationComplete}>
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
