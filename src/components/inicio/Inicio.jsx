import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const arrayWords = ["emiliano", "matias", "gonzalez", "nina"];
export const Inicio = () => {
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount2((currentValue) =>
        currentValue + 1 === arrayWords.length ? 0 : currentValue + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1>{arrayWords[count2]}</h1>
    </motion.main>
  );
};
