import styled from "styled-components";
import { theme } from "../../styles/theme.js";
import React, { useState, ChangeEvent,useEffect } from "react";

//위 배열은 로그인 페이지에다가 넣고 구현하자
export default function SignUpTextInput({ item, value, onChange }) {
  //이메일 상태관리
  const [inputValue, setInputValue] = useState("");
  const [emailList, setEmailList] = useState([]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  //이메일 도메인 목록
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
    onChange(newValue);

    if (item.key === "email") {
      const userEmails = freEmails.map((email) =>
        newValue.includes("@")
          ? newValue.split("@")[0] + email
          : newValue + email
      );
      setEmailList(userEmails);
    }
  };
  //아이디 input상자,중복확인
  if (value === "id") {
    return (
      <Container>
        <Text>{item.title}</Text>
        <RowContainer>
          <SmallInput
            type="text"
            placeholder={item.placeHolder}
            value={inputValue}
            onChange={handleInputChange}
          ></SmallInput>
          <DupButton>중복확인</DupButton>
        </RowContainer>
      </Container>
    );
    //이메일 input상자,이메일도메인 확인
  } else if (value === "email") {
    return (
      <Container>
        <Text>{item.title}</Text>
        <Input
          type="text"
          placeholder={item.placeHolder}
          value={inputValue}
          onChange={handleInputChange}
          list="email"
        />
        <datalist id="email">
          {emailList &&
            emailList.map((email, index) => (
              <option value={email} key={index}></option>
            ))}
        </datalist>
      </Container>
    );
    //비밀번호,비밀번호확인,이름
  } else {
    return (
      <Container>
        <Text>{item.title}</Text>
        <Input
          //비밀번호와 텍스트입력 구별
          type={item.key.includes("password") ? "password" : "text"}
          placeholder={item.placeHolder}
          onChange={handleInputChange}
          value={value}
        ></Input>
      </Container>
    );
  }
}

//=============================================================================================================================

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
  text-align: left;
`;
const RowContainer = styled.section`
  flex-direction: row;
  display: flex;
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
  width: calc(${({ theme }) => theme.size.inputSize.width}*0.7);
  height: ${({ theme }) => theme.size.inputSize.height};
`;
const DupButton = styled.button`
  padding: 0 10px;
  border: none;
  border-radius: 20px;
  color: white; //아이디 상태변화로 버튼색 변화.
  margin-left: 10px;
  width: calc(${({ theme }) => theme.size.inputSize.width}*0.28);
  height: ${({ theme }) => theme.size.inputSize.height};
  background-color: ${({ theme }) => theme.color.globalGray};
  text-align: center;
`;
//이메일 도메인 선택
