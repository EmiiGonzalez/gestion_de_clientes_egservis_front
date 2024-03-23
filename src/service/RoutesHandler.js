import axios from "axios";
import axiosRetry from "axios-retry";

export const axiosInst = (setToken, token, navigate) => {
    const axiosInstance = axios.create();

    axiosInstance.interceptors.request.use(
        (config) => {
            const jwt = token.jwt;
            config.headers["Authorization"] = `Bearer ${jwt}`;
            config.headers["Content-Type"] = "application/json";
            return config;
        }
    )

    axiosRetry(axiosInstance, {
        retryCondition: (error) => {

          if (error.response?.status === 401) {
            setToken({
              jwt: null,
              autorizado: false,
              accesRegister: false
          });
          navigate("/login");
          return error.response?.status === 401;
          }
        },
      }, {
        retries: 1
      });

    return axiosInstance;
}
