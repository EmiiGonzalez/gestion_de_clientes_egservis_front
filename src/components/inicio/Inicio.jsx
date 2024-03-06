import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Inicio = ({axios}) => {

  const [data, setData] = useState();

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("error");
    }
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/dispositivo/get/count/2024");
    setData(response.data);
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1>Inicio</h1>
    </motion.main>
  );
};
