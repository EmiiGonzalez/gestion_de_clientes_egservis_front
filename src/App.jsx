import "./assets/css/body/body.css";
import "./assets/css/main/container.css";
import "./assets/css/body/animations.css";

import { Header } from "./components/header/Header";
import { NavBar } from "./components/navBar/NavBar";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { Login } from "./components/login/Login";

function App() {
  const [theme, setHandleTheme] = useLocalStorage("theme", "light");
  const [token, setToken] = useLocalStorage("token", "");
  document.querySelector("#root").className = theme;

  return (
    <>
      <Header />
      <div className="container">
        <Router>
          <NavBar setHandleTheme={setHandleTheme} theme={theme} />
          <AnimatedRoutes />
        </Router>
      </div>
    </>
  );
}

export default App;
