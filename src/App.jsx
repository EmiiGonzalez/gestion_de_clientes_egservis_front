import "./assets/css/body/body.css";
import "./assets/css/main/container.css";

import { Header } from "./components/header/Header";
import { NavBar } from "./components/navBar/NavBar";
import { Inicio } from "./components/inicio/Inicio";
import {Clientes} from "./components/clientes/Clientes";
import {Dispositivos} from "./components/dispositivos/Dispositivos";
import {Pedidos} from "./components/pedidos/Pedidos";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [theme, setHandleTheme] = useLocalStorage("theme", "light");

  document.querySelector("#root").className = theme;

  return (
    <>
      <Header />
      <div className="container">
        <BrowserRouter>
          <NavBar setHandleTheme={setHandleTheme} theme={theme} />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/dispositivos" element={<Dispositivos />} />
            <Route path="/pedidos" element={<Pedidos />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
