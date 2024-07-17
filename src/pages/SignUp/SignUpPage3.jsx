import React, { useState, useEffect, useRef, useCallback } from "react";
import SignUpTextInput from "../../components/SignUp/SignUpTextInput.jsx";
import Wrapper from "../../components/Wrapper";
import styled from "styled-components";
import { SignUpContainer, Title } from "./SignUpStyle";
import { theme } from "../../styles/theme";
import useValid from "../../hooks/useValid";
import useIdCheck from "../../hooks/useIdCheck";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

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
  const MySwal = withReactContent(Swal);
  const navigate=useNavigate();
  //useValid 커스텀 훅
  const { validText, isValid , setIsValid} = useValid({ changeValue: form });
  const { idCheck, handleChange, isDuplicated } = useIdCheck(form);
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [formValidationComplete, setFormValidationComplete] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const dialogRef = useRef();

  const handleInputChange = useCallback((key, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [key]: value,
    }));
    if (key === "id") {
      setIsIdChecked(false);
    }
    if (key == "isPasswordConfirm") {
      setIsPasswordConfirm(value);
    }
  }, []);

  useEffect(() => {
    const isAllValid = Object.values(isValid).every((valid) => valid === true);
    const isAllFieldsFilled = Object.values(form).every(
      (value) => value !== ""
    );
    const newFormValidationComplete =
      isAllValid && isAllFieldsFilled && isIdChecked;

    console.log("Validation Status:", {
      isAllValid,
      isAllFieldsFilled,
      isIdChecked,
      newFormValidationComplete,
    });

    setFormValidationComplete(newFormValidationComplete);
  }, [isValid, form, isIdChecked]);

  // 디버깅을 위한 로그 추가
  useEffect(() => {
    console.log("Current form state:", form);
    console.log("Current isValid state:", isValid);
    console.log("isIdChecked:", isIdChecked);
    console.log("formValidationComplete:", formValidationComplete);
  }, [form, isValid, isIdChecked, formValidationComplete]);

  const handleIdCheck = useCallback(async () => {
    const result = await idCheck(form.id);
    setIsIdChecked(true);
    if (result === false) {
      MySwal.fire({
        icon: "success",
        title: "사용 가능한 아이디",
        text: "이 아이디를 사용할 수 있습니다.",
      });
    } else if (result === true) {
      MySwal.fire({
        icon: "error",
        title: "중복된 아이디",
        text: "이미 사용 중인 아이디입니다. 다른 아이디를 선택해주세요.",
      });
    } else {
      MySwal.fire({
        icon: "warning",
        title: "오류 발생",
        text: "아이디 중복 확인 중 오류가 발생했습니다. 다시 시도해주세요.",
      });
    }
  }, [form.id, idCheck]);

  console.log("Form Validation Complete:", formValidationComplete); // 최종 유효성 검증 결과
  // const handle = () => {
  //   Report.failure(
  //     "중복된 아이디",
  //     "중복된 아이디입니다. 다시 시도하세요.",
  //     "확인"
  //   );
  // };

  //테스트 서버주소
  const TEST_URL = "http://localhost:3001";

  //회원가입 제출

  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 제출 방지
    console.log("회원가입 시도"); // 디버깅을 위한 로그

    // 폼 유효성 검증 로직
    if (!formValidationComplete) {
      console.log("폼 유효성 검증 실패"); // 유효성 검증 실패 시 로그
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "모든 필드를 올바르게 입력하고 아이디 중복 확인을 완료해주세요.",
      });
      return;
    }

    // API 요청 (회원가입 로직)
    try {
      const response = await axios.post(`${TEST_URL}/users`, {
        id: form.id,
        password: form.password,
        name: form.name,
        email: form.email,
      });

      if (response.status === 201) {
        MySwal.fire({
          icon: "success",
          title: "회원가입 성공",
          text: "회원가입이 성공적으로 완료되었습니다.",
        }).then(()=>{
          navigate('/login');
        });
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생", error);
      MySwal.fire({
        icon: "error",
        title: "회원가입 실패",
        text: "회원가입 중 오류가 발생했습니다. 다시 시도해주세요.",
      });
    }
  };

  return (
    // component파일의 SignUpInput 컴포넌트를 봐야함.
    <Wrapper>
      <SignUpContainer>
        <form onSubmit={handleSubmit}>
          <Title>정보입력</Title>
          <InfoContainer>
            {INPUT_ITEM.map((item) => (
              <SignUpTextInput
                form={form}
                handleIdCheck={handleIdCheck}
                item={item}
                key={item.key}
                value={form[item.key]}
                onChange={handleInputChange}
                valid={isValid[item.validName]}
                errorMessage={validText[item.key]}
                isValid={isValid}
                setIsValid={setIsValid}
                idCheck={item.key === "id" ? handleIdCheck : undefined}
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
//===================================================================================

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
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
