import "../../assets/css/headerStyles/header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logoContainer">
        <img src="..\src\assets\images\logo.webp" alt="" className="logo" />
      </div>
      <div className="userInfoContainer">
        <div className="user">
          <p className="userInfo"> User Name </p>
          <i className="bi bi-person-circle"></i>
        </div>
      </div>
    </header>
  );
};
