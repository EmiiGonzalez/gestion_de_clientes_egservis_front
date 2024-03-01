import "../../assets/css/navBar/buttonTheme.css";

export const ButtonTheme = ({setHandleTheme, theme}) => {
  return (
    <div className="switch">
      <input type="checkbox" className="switch__input" id="Switch" 
      onChange={() => theme === "dark" ? setHandleTheme("light") : setHandleTheme("dark")}
      checked = {theme === "dark" ? false : true}
     />
      <label className="switch__label" htmlFor="Switch">
        <span className="switch__indicator"></span>
        <span className="switch__decoration"></span>
      </label>
    </div>
  );
};
