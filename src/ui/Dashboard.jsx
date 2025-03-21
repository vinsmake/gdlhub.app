import { DashboardMain } from "./DashboardMain"
import { DashboardSidebar } from "./DashboardSidebar"

export const Dashboard = ({ children }) => {
    return (
        <>
            <div className="w-[99%] h-[99%] bg-neutral-900 flex p-4 gap-4 text-white">

                    <DashboardSidebar />

                    <DashboardMain />

            </div>
        </>
    )
}