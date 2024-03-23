import "./assets/css/body/body.css";
import "./assets/css/main/container.css";
import "./assets/css/body/animations.css";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { useEffect } from "react";

const url = "http://localhost:3000/api/v1/";

function App() {
  const [theme, setHandleTheme] = useLocalStorage("theme", "light");
  const [token, setToken] = useLocalStorage("token", {jwt : null,
  autorizado : false, accesRegister : false} );

  useEffect(() => {
    document.querySelector("#root").className = theme;
  }, [theme]);

  return (
    <>
      <Router>
          <AnimatedRoutes token={token} setToken={setToken} setHandleTheme={setHandleTheme} theme={theme} url={url} />
      </Router>
    </>
  );
}

export default App;
