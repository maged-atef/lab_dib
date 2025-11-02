import "./ChartSectionBar.Module.css"
import RevenueChart from "../RevenueChart/RevenueChart"
import SalesPie from "../SalesPie/SalesPie"
import RecentOperations from "../RecentOperations/RecentOperations"
import Task from "../Task/Task"
export default function ChartSectionBar(){ 
    return <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
            <RevenueChart /> 
        </div>
        <div className="space-y-6 ">
            <SalesPie /> 
        </div>

    
      
   
     

    </div>
}