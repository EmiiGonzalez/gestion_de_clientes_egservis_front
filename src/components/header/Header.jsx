import "../../assets/css/headerStyles/header.css";
import { useUserInfo } from "../../hooks/useUserInfo";

export const Header = ({ token }) => {

  const  userInfo  = useUserInfo(token);

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
