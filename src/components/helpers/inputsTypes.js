const inputTypesForRegister = {
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
    placeholder: "Ingrese su nómbre de usuario aquí",
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
    },
    placeholder: "Ingrese su clave aquí",

  }
};

const inputTypesForLogin = {
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
        message: "El usuario no puede estar vacío",
        value: /^.{1,25}$/,
      }
    },
    placeholder: "Ingresar usuario aquí",
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
        value: /^.{1,25}$/,
        message: "La clave no puede estar vacia"
      }
    },
    placeholder: "Ingresar clave aquí",

  }
}

export const inputTypes = (route) => {
  if (route === "/register") {
    return inputTypesForRegister;
  }
  if (route === "/login") {
    return inputTypesForLogin;
  }
  throw new Error("Route not found");
}

export const inputTypesArray = (route) => {
  if (route === "/register") {
    return Object.values(inputTypesForRegister).map((type) => type.name);
  }
  if (route === "/login") {
    return Object.values(inputTypesForLogin).map((type) => type.name);
  }
};