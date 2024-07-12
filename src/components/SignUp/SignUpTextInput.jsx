import React, { useState, useEffect, useRef, memo, useCallback } from "react";
import styled from "styled-components";
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
const SignUpTextInput = ({
  item,
  value,
  onChange,
  valid,
  errorMessage,
  isValid,
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
  };

  const [isHidePwd, setIsHidePwd] = useState(false);
  const passwordRef = useRef(null);

  const handleShowPwdChecked = async () => {
    const password = await passwordRef.current;
    if (password === null) return;

    await setIsHidePwd(!isHidePwd);
    if (!isHidePwd) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };
  //alert
  const MySwal = withReactContent(Swal);

  const handleIdCheck = async () => {
    const isDup = await idCheck(inputValue);
    setIsIdDuplicated(isDup);
    // if (dialogRef.current) {
    //   dialogRef.current.open();
    // }
    if (isDup) {
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
            onClick={handleIdCheck}
            $isValid={isValid.isId}
          >
            중복확인
          </DupButton>
        </RowContainer>
        {!valid && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {/* <Dialog ref={dialogRef} isDuplicated={isIdDuplicated} /> */}
        {/* Dialog 추가 */}
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
};

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
