import { DashboardMain } from "./DashboardMain"
import { DashboardSidebar } from "./DashboardSidebar"

export const Dashboard = ({ children }) => {
    return (
        <>
            <div className="w-[99%] h-[99%] bg-neutral-900 flex p-4 gap-4">

                <div className="w-1/4 bg-neutral-800">
                    <DashboardSidebar />
                </div>

                <div className="w-3/4 bg-neutral-800 rounded-3xl p-4">
                    <DashboardMain />
                </div>
                
            </div>
        </>
    )
}