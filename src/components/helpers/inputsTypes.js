export const inputTypes = {
  login: {
    name: "login",
    type: "text",
    label: "Usuario",
    validations: {
      required: {
        value: true,
        message: "El usuario es requerido",
      },
      pattern: {
        value: /^.{5,20}$/,
        message: "El usuario debe tener entre 5 y 20 caracteres",
      },
    },
  },

  clave: {
    name: "clave",
    type: "password",
    label: "Clave",
    validations: {
      required: {
        value: true,
        message: "La clave es requerida",
      },
      pattern: {
         value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,20}$/,
         message: "La clave debe tener entre 5 y 20 caracteres, al menos una mayúscula, una minúscula y un número",
      }
    }
  }
};

export const inputTypesArray = Object.values(inputTypes).map((type) => type.name);