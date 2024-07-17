import React, { useState, useEffect, useRef, memo, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Custom hook for ID check
export function useIdCheck(initialForm) {
  const [isDuplicated, setIsDuplicated] = useState(null);
  const [idForm, setIdForm] = useState(initialForm);

  const SERVER_URL = process.env.REACT_APP_BACKEND_URL;
  const TEST_URL = "http://localhost:3001";

  const idCheck = useCallback(async (id) => {
    setIsDuplicated(null);
    try {
      const response = await axios.get(`${TEST_URL}/users?id=${id}`);
      const isDup = response.data.length > 0;
      setIsDuplicated(isDup);
      return isDup;
    } catch (error) {
      console.error("아이디 중복 확인 실패", error);
      setIsDuplicated(null);
      return null;
    }
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setIdForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);

  return { idCheck, handleChange, isDuplicated };
}

// SignUpTextInput component
const SignUpTextInputBase = memo(
  ({
    item,
    value,
    onChange,
    valid,
    errorMessage,
    isValid,
    handleIdCheck,
    form,
    setIsValid
  }) => {
    const [inputValue, setInputValue] = useState(value);
    const [isIdDuplicated, setIsIdDuplicated] = useState(false);
    const [emailList, setEmailList] = useState([]);

    const { idCheck } = useIdCheck({
      id: "",
      password: "",
      passwordCheck: "",
      name: "",
      email: "",
    });

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    const freEmails = [
      "@naver.com",
      "@gmail.com",
      "@hanmail.net",
      "@yahoo.com",
      "@daum.net",
      "@nate.com",
      "@kakao.com",
    ];

    const handleInputChange = (e) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      onChange(item.key, newValue);

      if (item.key === "email") {
        const userEmails = freEmails.map((email) =>
          newValue.includes("@")
            ? newValue.split("@")[0] + email
            : newValue + email
        );
        setEmailList(userEmails);
      }

      // 비밀번호 확인 로직 추가
      if (item.key === "passwordCheck") {
        const isPasswordMatch = newValue === form.password;
        onChange("isPasswordConfirm", isPasswordMatch);
      }
    };

    const [isHidePwd, setIsHidePwd] = useState(false);
    const passwordRef = useRef(null);

    const handleShowPwdChecked = () => {
      setIsHidePwd(!isHidePwd);
      if (passwordRef.current) {
        passwordRef.current.type = isHidePwd ? "password" : "text";
      }
    };

    const MySwal = withReactContent(Swal);
    const navigate=useNavigate();

    const handleIdCheckInternal = async () => {
      const isDup = await idCheck(inputValue);
      setIsIdDuplicated(isDup);
      if (handleIdCheck) {
        handleIdCheck(!isDup); // ID가 중복되지 않았을 때만 true를 전달
      }
      if (isDup) {
        setIsValid((prev) => ({ ...prev, isId: false }));
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "이미 사용중인 아이디입니다.",
        });

      } else {
        MySwal.fire({
          icon: "success",
          title: "Okay",
          text: "사용가능한 아이디입니다.",
        });
      }
    };

    if (item.key === "id") {
      return (
        <Container>
          <Text>{item.title}</Text>
          <RowContainer>
            <SmallInput
              type="text"
              placeholder={item.placeHolder}
              value={inputValue}
              onChange={handleInputChange}
              name="id"
            />
            <DupButton
              disabled={!isValid.isId}
              type="button"
              onClick={handleIdCheckInternal}
              $isValid={isValid.isId}
            >
              중복확인
            </DupButton>
          </RowContainer>
          {!valid && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Container>
      );
    } else if (item.key === "email") {
      return (
        <Container>
          <Text>{item.title}</Text>
          <Input
            type="text"
            placeholder={item.placeHolder}
            value={inputValue}
            onChange={handleInputChange}
            list="email"
            name="email"
          />
          <datalist id="email">
            {emailList &&
              emailList.map((email, index) => (
                <option value={email} key={index}></option>
              ))}
          </datalist>
          {!valid && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Container>
      );
    } else {
      return (
        <Container>
          <Text>{item.title}</Text>
          <RowContainer>
            <Input
              type={
                item.key.includes("password")
                  ? !isHidePwd
                    ? "password"
                    : "text"
                  : "text"
              }
              placeholder={item.placeHolder}
              onChange={handleInputChange}
              value={inputValue}
              ref={passwordRef}
              name={item.key}
            />
            {item.key.includes("password") ? (
              <EyeIconContainer onClick={handleShowPwdChecked}>
                {!isHidePwd ? (
                  <AiFillEyeInvisible style={{ fontSize: "30px" }} />
                ) : (
                  <AiFillEye style={{ fontSize: "30px" }} />
                )}
              </EyeIconContainer>
            ) : null}
          </RowContainer>
          {!valid && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Container>
      );
    }
  }
);

const SignUpTextInput = memo(SignUpTextInputBase);
SignUpTextInputBase.displayName = 'SignUpTextInput';

export default SignUpTextInput;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
  text-align: left;
`;

const RowContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
`;

const Text = styled.h2`
  text-align: left;
  font-size: 22px;
  @font-face {
    font-family: "Pretendard-Black";
    src: url("../../fonts/Pretendard-Black.otf");
  }
  font-family: "Pretendard-Black";
  font-weight: 600;
  margin: 5px 0px;
`;

const Input = styled.input`
  padding: 0px 10px;
  border: #c2c2c2 solid 2px;
  border-radius: 20px;
  width: ${({ theme }) => theme.size.inputSize.width};
  height: ${({ theme }) => theme.size.inputSize.height};
`;

const SmallInput = styled.input`
  padding: 0px 10px;
  border: #c2c2c2 solid 2px;
  border-radius: 20px;
  width: calc(${({ theme }) => theme.size.inputSize.width} * 0.7);
  height: ${({ theme }) => theme.size.inputSize.height};
`;

const DupButton = styled.button`
  padding: 0 10px;
  border: none;
  font-size: 20px;
  font-weight: 600;
  border-radius: 20px;
  color: white;
  margin-left: 10px;
  width: calc(${({ theme }) => theme.size.inputSize.width} * 0.28);
  height: ${({ theme }) => theme.size.inputSize.height};
  background-color: ${(props) => (props.$isValid ? "#2D62F1" : "#c2c2c2")};
  text-align: center;
  cursor: ${(props) => (props.$isValid ? "pointer" : "not-allowed")};
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 0px;
`;

const EyeIconContainer = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
`;
