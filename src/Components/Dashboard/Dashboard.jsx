import "./Dashboard.Module.css"
import StatusGrid from "../StatusGrid/StatusGrid"
import ChartSectionBar from "../ChartSectionBar/ChartSectionBar"
import Task from "../Task/Task"
import RecentOperations from "../RecentOperations/RecentOperations"

export default function Dashboard(){ 
    return <div className="space-y-6">
        {/* status grid */}
    <StatusGrid />
    <ChartSectionBar /> 
    <RecentOperations /> 
    <Task />
    </div>
}