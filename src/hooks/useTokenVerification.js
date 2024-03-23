import { useEffect, useState } from "react";

const useTokenVerification = (token, navigate) => {
const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    if (!token.autorizado) {
      navigate("/login");
    }
    if (token.accesRegister){
      navigate("/register");
    }
    if (token.autorizado ) {
      if (location.pathname === "/register" || location.pathname === "/login") {
        navigate("/");
      }
    }
    setIsVerifying(true);
  }, [token.autorizado, token.accesRegister, navigate]);

  return isVerifying;
};

export default useTokenVerification;
