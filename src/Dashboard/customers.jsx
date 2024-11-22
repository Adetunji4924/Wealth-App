import PrimaryButton from "../Components/pri-button"
import TertiaryButton from "../Components/tet-button"
import DashboardHeader from "./components/Header"
import DashboardSidebar from "./components/sidebar"

const Customers = () => {
    return(
        <div className="bg-dashboard-0 flex flex-col">
            <DashboardHeader />
            <div className="flex justify-between">
                <DashboardSidebar />
                <div className="ml-[20%] mt-[4rem] w-full h-[calc(100vh-4rem)] overflow-y-auto py-[2rem] px-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-[1.8rem] font-Rubik font-semibold text-text2-0 uppercase">Customers</h1>
                        <div className="flex gap-4 items-center">
                            <TertiaryButton value="Export" />
                            <PrimaryButton value="Add New" />
                        </div>
                    </div>
                    <p>Your scrollable content goes here...</p>
                    <div style={{ height: "2000px" }}>
                        {/* Simulating long content */}
                        <p>Scroll me!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers