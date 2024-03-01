import "../../assets/css/navBar/navBar.css";

import { ButtonTheme } from "./ButtonTheme.jsx";
import { NavBarIcons } from "./NavBarIcons";
import { NavLink } from "react-router-dom";
import { secciones } from "../helpers/secciones.js";

export const NavBar = ({ setHandleTheme, theme }) => {
  return (
    <nav>
      <div className="menu-container">
        {secciones.map(s => (
          <NavLink to={s.url} key={s.url} className="navLink">
            {s.icono && s.texto &&
              <NavBarIcons classIcon={s.icono} contextText={s.texto} />
            }
          </NavLink>
        ))}
      </div>
      <ButtonTheme setHandleTheme={setHandleTheme} theme={theme} />
    </nav>
  );
};
