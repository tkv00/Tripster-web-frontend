import { useEffect, useState } from "react";

export default function useValid({ changeValue }) {
  const [validText, setValidText] = useState({
    id: "",
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
  });

  const [isValid, setIsValid] = useState({
    isId: false,
    isPassword: false,
    isPasswordCheck: false,
    isName: false,
    isEmail: false,
  });

  //아이디 유효성검사
  useEffect(() => {
    const exp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
    if (!exp.test(changeValue.id)) {
      setValidText((prev) => ({ ...prev, id: "ID는 6~20자의 영문과 숫자를 조합해야 합니다." }));
      setIsValid((prev) => ({ ...prev, isId: false }));
    } else {
      setValidText((prev) => ({ ...prev, id: "" }));
      setIsValid((prev) => ({ ...prev, isId: true }));
    }
  }, [changeValue.id]);

  //이메일 유효성 검사
  useEffect(() => {
    const exp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (!exp.test(changeValue.email)) {
      setValidText((prev) => ({ ...prev, email: "이메일을 다시 확인해 주세요." }));
      setIsValid((prev) => ({ ...prev, isEmail: false }));
    } else {
      setValidText((prev) => ({ ...prev, email: "" }));
      setIsValid((prev) => ({ ...prev, isEmail: true }));
    }
  }, [changeValue.email]);

  //비밀번호 유효성검사
  useEffect(() => {
    const exp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/;
    if (!exp.test(changeValue.password)) {
      setValidText((prev) => ({ ...prev, password: "비밀번호는 8~12자의 영문, 숫자, 특수문자를 조합해야 합니다." }));
      setIsValid((prev) => ({ ...prev, isPassword: false }));
    } else {
      setValidText((prev) => ({ ...prev, password: "" }));
      setIsValid((prev) => ({ ...prev, isPassword: true }));
    }
  }, [changeValue.password]);

  //비밀번호 일치검사
  useEffect(() => {
    if (changeValue.password !== changeValue.passwordCheck) {
      setValidText((prev) => ({ ...prev, passwordCheck: "비밀번호가 일치하지 않습니다." }));
      setIsValid((prev) => ({ ...prev, passwordCheck: false }));
    } else {
      setValidText((prev) => ({ ...prev, passwordCheck: "" }));
      setIsValid((prev) => ({ ...prev, passwordCheck: true }));
    }
  }, [changeValue.password, changeValue.passwordCheck]);

  //이름 유효성검사
  useEffect(()=>{
    const exp=/^[가-힣]+$/;
    if(!exp.test(changeValue.name)){
      setValidText((prev)=>({...prev,name:"한글을 입력해주세요."}));
      setIsValid((prev)=>({...prev,isName:false}));
    }else{
      setIsValid((prev)=>({...prev,name:""}));
      setIsValid((prev)=>({...prev,isName:true}));
    }
  },[changeValue.name]);

  return { validText, isValid };
}
