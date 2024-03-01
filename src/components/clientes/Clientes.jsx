import { motion } from "framer-motion";

export const Clientes = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1>Clientes</h1>
    </motion.main>
  );
};
