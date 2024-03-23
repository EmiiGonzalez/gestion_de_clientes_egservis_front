import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const useUserInfo = (token) => {
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    if (token.autorizado) {
      const user = jwtDecode(token.jwt).sub;
      setUserInfo(user);
    } else {
      setUserInfo("Sin usuario");
    }
  }, [token]);

  return userInfo;
};
