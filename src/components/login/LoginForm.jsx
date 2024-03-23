import { useForm } from "react-hook-form";
import { useState } from "react";
import { InputLogin } from "./InputLogin";
import { inputTypesArray } from "../helpers/inputsTypes";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginForm = ({ setToken, url, setIsVerifying }) => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  const arrayInputs = inputTypesArray(location.pathname);

  const [data, setData] = useState({
    login: "",
    clave: "",
  });

  const [credentialFail, setCredentialFail] = useState(false);

  const onSubmit = async () => {
    try {
      const response = await axios.post(`${url}auth/login`, data);
      setToken({ jwt: response.data.token, autorizado: true , accesRegister: false});
      setIsVerifying(true);
      navigate("/");
    } catch (error) {
      if (error.response.status === 401) {
        setCredentialFail(true);
      }
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="login_form"
      initial={{ opacity: 0.5, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {arrayInputs.map((type) => {
        return (
          <InputLogin
            route={location.pathname}
            register={register}
            errors={errors}
            trigger={trigger}
            data={data}
            setData={setData}
            type={type}
            key={type}
          />
        );
      })}
      {credentialFail && (
        <motion.div className="login-error-container"
        {...{ initial: { opacity: 0 }, animate: { opacity: 1 } }}>
          <i className="bi bi-exclamation-circle icon-error-login" ></i>
          <p className="login-error-p">Credenciales incorrectas</p>
        </motion.div>
      )}
      <input type="submit" className="login_form_button" />
    </motion.form>
  );
};
