import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { lineOptions, getDataColors } from "./configs.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const DoubleLine = ({ bdData1, bdData2, theme }) => {
  const labelsMes = bdData1.dispositivos.map((d) => d.mes);
  const data = bdData1.dispositivos.map((d) => d.cantidadDispositivos);
  const data2 = bdData2.dispositivos.map((d) => d.cantidadDispositivos);

  const datos = {
    labels: labelsMes,
    
    datasets: [
      {
        label: `${new Date().getFullYear()}`,
        data: data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.2,
      },
      {
        label: `${new Date().getFullYear() - 1}`,
        data: data2,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.2,
      }
    ],
  };

  const options = lineOptions(theme);
  options.plugins.title.text = 'Dispositivos registrados por mes'

  return <Line data={datos} options={options} />;
};
