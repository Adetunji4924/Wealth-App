import { useState } from "react"
import TertiaryButton from "../Components/tet-button"
import DashboardCard from "./components/dashboard-cards"
import DashboardHeader from "./components/Header"
import LineChart from "./components/line-chart"
import DashboardSidebar from "./components/sidebar"

const Dashboard = () => {

    const [chartData, setChartData] = useState({
        labels: ["Oct", "Nov", "Dec"], // Default: 3 months
        data: [32, 50, 30,],
      });
    
      // Handlers to switch between datasets
      const handle3Months = () => {
        setChartData({
          labels: ["Oct", "Nov", "Dec"],
          data: [32, 50, 30,],
        });
      };
    
      const handle6Months = () => {
        setChartData({
          labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          data: [73, 40, 32, 50, 30, 22,],
        });
      };
    
      const handle12Months = () => {
        setChartData({
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          data: [65, 43, 55, 90, 20, 58, 73, 40, 32, 50, 30, 22,],
        });
      };
    return(
        <div className="bg-dashboard-0 flex flex-col">
            <DashboardHeader />
            <div className="flex justify-between">
                <DashboardSidebar />
                <div className="ml-[20%] mt-[4rem] w-full h-[calc(100vh-4rem)] overflow-y-auto py-[2rem] px-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-[1.8rem] font-Rubik font-semibold text-text2-0 uppercase">Dashboard</h1>
                        <div className="flex gap-4 items-center">
                            <TertiaryButton value="Export" />
                        </div>
                    </div>

                    <DashboardCard />
                    <div className="bg-white mt-8 rounded p-8">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-text2-0 font-Rubik font-medium">CUSTOMER REPORT</h1>
                            <div className="flex gap-2">
                                <button onClick={handle3Months} className="border border-tertiary-0 px-3 py-2 rounded hover:bg-[#F4F7FF]">3 Months</button>
                                <button onClick={handle6Months} className="border border-tertiary-0 px-3 py-2 rounded hover:bg-[#F4F7FF]">6 Months</button>
                                <button onClick={handle12Months} className="border border-tertiary-0 px-3 py-2 rounded hover:bg-[#F4F7FF]">12 Months</button>
                            </div>
                        </div>
                        <LineChart labels={chartData.labels} data={chartData.data} />
                    </div>
                    <div style={{ height: "2000px" }}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard