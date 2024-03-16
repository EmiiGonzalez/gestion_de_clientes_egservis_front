export const lineOptions = (theme) => {
  return {
    responsive: true,
    animations: {
      radius: {
        duration: 400,
        easing: "linear",
        loop: (context) => context.active,
      },
    },
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          padding: 20,
          align: "center",
          pointStyle: "circle",
          color: theme === "dark" ? "white" : "black",
          font: {
            size: 15,
            family: "sans-serif",
            weight: "bold",
          }
        }
      },
      title: {
        display: true,
        color: theme === "dark" ? "white" : "black",
        font: {
          size: 15,
          family: "sans-serif",
          weight: "bold",
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
        min: 0,
        max: 10,
      },
    },
    
  };
}

export const getDataColors = opacity => {
  const colors = ['#7448c2', '#21c0d7', '#d99e2b', '#ff006e', '#073b4c', '#e14eca', "#FFFF00", '#ff0000', '#00FF7F', '#3338ff']
  return colors.map(color => opacity ? `${color + opacity}` : color)
}
