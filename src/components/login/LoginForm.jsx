import { useForm } from "react-hook-form";
import { useState } from "react";
import { InputLogin } from "./InputLogin";
import { inputTypesArray } from "../helpers/inputsTypes";
import { motion } from "framer-motion";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

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
      {inputTypesArray.map((type) => {
        return (
          <InputLogin
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
