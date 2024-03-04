import { useForm } from "react-hook-form";
import { useState } from "react";
import { InputLogin } from "./InputLogin";
import { inputTypesArray } from "../helpers/inputsTypes";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const arrayInputs = inputTypesArray(location.pathname);

  const [data, setData] = useState({
    login: "",
    clave: "",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="login_form"
      initial={{ opacity: 0.5, x: -20 }}
      animate={{ opacity: 1 ,x: 0 }}
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
      <input type="submit" className="login_form_button" />
    </motion.form>
  );
};
