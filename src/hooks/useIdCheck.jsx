import { useState, useCallback } from "react";
import axios from "axios";
import { Report } from "notiflix/build/notiflix-report-aio";

export default function useIdCheck(initialForm) {
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
    // 여기서는 아무 것도 하지 않습니다. 상태 업데이트는 부모 컴포넌트에서 처리합니다.
  }, []);

  return { idCheck, handleChange, isDuplicated };
}
