import { Routes, Route, useLocation } from "react-router-dom";
import { Inicio } from "./inicio/Inicio";
import { Clientes } from "./clientes/Clientes";
import { Dispositivos } from "./dispositivos/Dispositivos";
import { Pedidos } from "./pedidos/Pedidos";
import { AnimatePresence } from "framer-motion";
import "../assets/css/main/main.css";

/*
  Rutas de la aplicacion
  Se separan de la logica para que sea mas facil de mantener ademas de poder aplicar animaciones mas facilmente
*/
export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Inicio />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/dispositivos" element={<Dispositivos />} />
          <Route path="/pedidos" element={<Pedidos />} />
        </Routes>
      </AnimatePresence>

  );
};
