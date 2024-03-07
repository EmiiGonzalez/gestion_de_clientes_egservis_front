import "../../assets/css/headerStyles/header.css";
import { jwtDecode } from "jwt-decode";

export const Header = () => {
  const userInfo = jwtDecode(JSON.parse(localStorage.getItem("token")).jwt).sub;

  return (
    <header className="header">
      <div className="logoContainer">
        <img src="..\src\assets\images\logo.webp" alt="" className="logo" />
      </div>
      <div className="userInfoContainer">
        <div className="user">
          <p className="userInfo"> {userInfo} </p>
          <i className="bi bi-person-circle"></i>
        </div>
      </div>
    </header>
  );
};
