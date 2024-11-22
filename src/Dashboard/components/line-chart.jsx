import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ labels, data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#e5e5e5",
        },
        min: 0,
        max: 100,
        ticks: {
            stepSize: 20
        }
      },
    },
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Dataset",
        data: data,
        borderColor: "#4458FE",
        pointStyle: "circle",
        pointBackgroundColor: "white",
        pointBorderWidth: 3,
        backgroundColor: "#A8C4FC",
        // tension: 0.4,
        fill: 'start',
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={chartData} />
    </div>
  );
};

export default LineChart;
