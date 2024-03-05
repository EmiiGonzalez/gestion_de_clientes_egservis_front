/* eslint-disable react/jsx-no-comment-textnodes */
import { Routes, Route, useLocation } from "react-router-dom";
import { Inicio } from "./inicio/Inicio";
import { Clientes } from "./clientes/Clientes";
import { Dispositivos } from "./dispositivos/Dispositivos";
import { Pedidos } from "./pedidos/Pedidos";
import { AnimatePresence } from "framer-motion";
import "../assets/css/main/main.css";
import { Layout } from "./navBar/Layout";
import { Login } from "./login/Login";
import { Header } from "./header/Header";

/*
  Rutas de la aplicacion
  Se separan de la logica para que sea mas facil de mantener ademas de poder aplicar animaciones mas facilmente
*/
export const AnimatedRoutes = ({ setHandleTheme, theme }) => {
  const location = useLocation();
  return (
    <>
    {(location.pathname !== "/login" && location.pathname !== "/register")  && <Header /> }
    <div className={location.pathname ==="/login" || location.pathname ==="/register" ? "login-container" : "container"}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        //rutas privadas
          <Route
            path="/"
            element={<Layout setHandleTheme={setHandleTheme} theme={theme} />}
          >
            <Route index element={<Inicio />} />
            <Route path="clientes" element={<Clientes />} />
            <Route path="dispositivos" element={<Dispositivos />} />
            <Route path="pedidos" element={<Pedidos />} />
            <Route path="*" element={<Inicio />} />
          </Route>
          //rutas publicas
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Login />} />
        </Routes>
      </AnimatePresence>
    </div>
  </>
  );
};
