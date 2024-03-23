import '../../assets/css/login/login-container.css'
import '../../assets/css/login/login.css'
import { LoginForm } from './LoginForm';
import { motion } from 'framer-motion'
import { useNavigate, useLocation } from "react-router-dom";
import { useVerifiying } from "../../hooks/useVerifiying";

export const Login = ({setToken, url}) => {

  const location = useLocation();
  const navigate = useNavigate();

  const titulo = {
    "/login": "Iniciar Sesion",
    "/register": "Registrarse"
  }

  const handleRegister = (e) => {
    e.preventDefault();

    if(location.pathname === '/login') {
      setToken({jwt: null, autorizado: false, accesRegister: true});
      navigate("/register");
    } 
    if(location.pathname === '/register') {
      setToken({jwt: null, autorizado: false, accesRegister: false});
      navigate('/login')
    }
  }

  const [isVerifying, setIsVerifying] = useVerifiying();

  if (isVerifying) {
    return null;
  }

  return (
    <div className="login_form_container">
      <div className="login_form_animation">
        <motion.h2 className="login_form_title"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        >{titulo[location.pathname]}</motion.h2>
        <LoginForm setToken={setToken} url={url} setIsVerifying={setIsVerifying}/>
        {location.pathname === '/login' && <button className="login_form_link" onClick={handleRegister}>Registrarse</button>}
        {location.pathname === '/register' && <button className="login_form_link" onClick={handleRegister}>Volver a Iniciar Sesion</button>}
      </div>
    </div>
  )
};
