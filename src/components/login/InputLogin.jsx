import { useState } from "react";
import { InputLoginError } from "./InputLoginError";
import { inputTypes } from "../helpers/inputsTypes.js";

export const InputLogin = ({
  register,
  errors,
  trigger,
  data,
  setData,
  type,
  route,
}) => {
  const [classInput, setClassInput] = useState("");
  const [classLabel, setClassLabel] = useState("");
  const inputType = inputTypes(route);

  const handleInputChange = async (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    await trigger(e.target.name);
    const hasError = errors[type] ? true : false;
    const isValid =
      RegExp(inputType[type].validations.pattern.value).test(e.target.value) &&
      !hasError;
    setClassInput(isValid ? "login_input_success" : "login_input_error");
    setClassLabel(isValid ? "" : "login_label_error")
  };

  return (
    <div className="form-group">
      <label htmlFor={type} className={`label_login ${classLabel}`}>
        {inputType[type].label}
      </label>
      <input
        {...register(type, inputType[type].validations)}
        id={type}
        type={inputType[type].type}
        placeholder={inputType[type].placeholder}
        onBlur={handleInputChange}
        className={`${classInput} input_login`}
      />
      {errors[type] && <InputLoginError text={errors[type].message} />}
    </div>
  );
};
