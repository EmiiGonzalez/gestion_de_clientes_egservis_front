import { useEffect, useState } from "react";

const useTokenVerification = (token, navigate) => {
const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    if (!token.autorizado) {
      navigate("/login");
    }
    setIsVerifying(true);
  }, [token.autorizado, navigate]);

  return isVerifying;
};

export default useTokenVerification;
