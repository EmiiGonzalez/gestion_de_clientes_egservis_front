/* eslint-disable react/jsx-no-comment-textnodes */
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Inicio } from "./inicio/Inicio";
import { Clientes } from "./clientes/Clientes";
import { Dispositivos } from "./dispositivos/Dispositivos";
import { Pedidos } from "./pedidos/Pedidos";
import { AnimatePresence } from "framer-motion";
import "../assets/css/main/main.css";
import { Layout } from "./navBar/Layout";
import { Login } from "./login/Login";
import { Header } from "./header/Header";
import { axiosInst } from "../service/RoutesHandler.js";
import useTokenVerification from "../hooks/useTokenVerification.js";

/*
  Rutas de la aplicacion
  Se separan de la logica para que sea mas facil de mantener ademas de poder aplicar animaciones mas facilmente
*/
export const AnimatedRoutes = ({
  setHandleTheme,
  theme,
  token,
  setToken,
  url,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const axios = axiosInst(setToken, token, navigate);

  const isVerifying = useTokenVerification(token, navigate);

  if (!isVerifying) {
    return null;
  }

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Header />
      )}
      <div
        className={
          location.pathname === "/login" || location.pathname === "/register"
            ? "login-container"
            : "container"
        }
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* rutas privadas */}
            <Route
              path="/"
              element={<Layout setHandleTheme={setHandleTheme} theme={theme} />}
            >
              <Route index element={<Inicio axios={axios} theme={theme} />} />
              <Route path="clientes" element={<Clientes axios={axios} />} />
              <Route
                path="dispositivos"
                element={<Dispositivos axios={axios} />}
              />
              <Route path="pedidos" element={<Pedidos axios={axios} />} />
            </Route>
            {/* rutas publicas */}
            <Route
              path="login"
              element={<Login setToken={setToken} url={url} />}
            />
            <Route
              path="register"
              element={<Login setToken={setToken} url={url} />}
            />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
};
