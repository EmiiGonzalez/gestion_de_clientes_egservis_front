import { motion } from "framer-motion"

export const InputLoginError = ({text}) => {
  return (
    <motion.p
            className="login-error"
            initial={{ opacity: 0, x: -10}}
            animate={{ opacity: 1, x: 0}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
      {text}
    </motion.p>
  )
}
