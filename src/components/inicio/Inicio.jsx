import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DoubleLine } from "../charts/DoubleLine";
import { dispositivoPorAnho } from "./objetsModels/dispositivoPorAnho.js";

export const Inicio = ({ axios, theme }) => {
  const [dataDispositivosActual, setDataDispositivosActual] = useState(dispositivoPorAnho);
  const [dataDispositivosAnhoAnterior, setDataDispositivosAnhoAnterior] = useState(dispositivoPorAnho);

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("error");
    }
  }, []);

  const fetchData = async () => {
    const responseDispositivosActual = await axios.get(
      `http://localhost:3000/api/v1/dispositivo/get/count/${new Date().getFullYear()}`
    );
    const responseDispositivosAnhoAnterior = await axios.get(
      `http://localhost:3000/api/v1/dispositivo/get/count/${new Date().getFullYear() - 1}`
    );
    setDataDispositivosActual(prevState => ({ ...prevState, ...responseDispositivosActual.data }));
    setDataDispositivosAnhoAnterior(prevState => ({ ...prevState, ...responseDispositivosAnhoAnterior.data }));
  };
  
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <DoubleLine bdData1={dataDispositivosActual} bdData2={dataDispositivosAnhoAnterior} theme={theme} />
    </motion.main>
  );
};
