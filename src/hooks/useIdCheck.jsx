import { useState, useCallback } from "react";
import axios from "axios";
import { Report } from "notiflix/build/notiflix-report-aio";

export default function useIdCheck(initialForm) {
  const [idCheck, setIdCheck] = useState(false);
  const [idForm, setIdForm] = useState(initialForm);

  const SERVER_URL = process.env.REACT_APP_BACKEND_URL;
  const TEST_URL = "http://localhost:3001";

  const handleIdCheck = useCallback(async () => {
    setIdCheck(false);
    try {
      const response = await axios.get(`${TEST_URL}/users?id=${idForm.id}`);

      if (response.data.length === 0) {
        Report.success("사용가능 아이디", "사용가능한 아이디입니다.", "확인");
        setIdCheck(true);
      } else {
        Report.failure(
          "중복된 아이디",
          "중복된 아이디입니다. 다시 시도하세요.",
          "확인"
        );
        setIdCheck(false);
      }
    } catch (error) {
      console.error("아이디 중복 확인 실패", error);
      Report.failure(
        "오류발생",
        "아이디 중복 확인 중 오류가 발생했습니다.",
        "확인"
      );
    }
  }, [idForm.id]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setIdForm((prevForm) => ({ ...prevForm, [name]: value }));
  }, []);

  return { idForm, setIdForm, idCheck, handleIdCheck, handleChange };
}
