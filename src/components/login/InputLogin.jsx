import { useState } from "react";
import { InputLoginError } from "./InputLoginError";
import { inputTypes } from "../helpers/inputsTypes.js";

export const InputLogin = ( { register, errors, trigger, data, setData, type } ) => {

    const [classInput, setClassInput] = useState("");

    const handleInputChange = async (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
        await trigger(e.target.name);
        const hasError = (Object.keys(errors).length != 0);
        const isValid = RegExp(inputTypes[type].validations.pattern.value).test(e.target.value) && !hasError;
        setClassInput(isValid ? "login_input_success" : "login_input_error");
    }

  return (
    <div className="form-group">
        <label htmlFor={type} className="label_login">{inputTypes[type].label}</label>
        <input
          {...register(type, inputTypes[type].validations)}
          id={type}
          type={inputTypes[type].type}
          placeholder="Ingresa tu usuario"
          onBlur={handleInputChange}
          className={`${classInput} input_login`}
        />
        {errors[type] && (
          <InputLoginError text={errors[type].message} />
        )}
      </div>
  )
}
