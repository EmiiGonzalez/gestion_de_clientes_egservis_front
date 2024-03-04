import '../../assets/css/login/login-container.css'
import '../../assets/css/login/login.css'
import { LoginForm } from './LoginForm';
import { motion } from 'framer-motion'


export const Login = () => {

  return (
    <div className="login_form_container">
      <div className="login_form_animation">
        <motion.h2 className="login_form_title"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        >Iniciar Sesión</motion.h2>
        <LoginForm />
      </div>
    </div>
  )
};
