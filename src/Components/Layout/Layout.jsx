import "./Layout.Module.css"
import Sidebar from "../Sidebar/Sidebar"
import Header from "../Header/Header"
import Dashboard from "../Dashboard/Dashboard"
import Inventory from "../Inventory/Inventory"
import Item from "../Item/Item"
import Supplier from "../Supplier/Supplier"
import Task from "../Task/Task"
import Users from "../Users/Users"
import ChartSectionBar from "../ChartSectionBar/ChartSectionBar"
import { useState } from "react"



export default function Layout() {
    
  const [sideBarCollapsed, setsideBarCollapsed] = useState(false);
  const [currentPage, setcurrentPage] = useState("dashboard");

    return <div id="app" className=" min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800
  dark:to-slate-50 transition-all duration-500 ">

        <div className="flex h-screen overflow-hidden">
            <Sidebar
                collapsed={sideBarCollapsed}
                onToggle={() => { setsideBarCollapsed(!sideBarCollapsed) }}
                currentPage={currentPage}
                onPageChange={setcurrentPage}


            />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header sidebarCollapse={sideBarCollapsed} onTogglesidebar={() => {
                    setsideBarCollapsed(!sideBarCollapsed)
                }} />

                <main className="flex-1 overflow-y-auto bg-transparent">
                    <div className="p-6 space-y-6">
                        {currentPage === 'dashboard' && <Dashboard />}
                        {currentPage === 'inventory' && <Inventory />}
                        {currentPage === 'item' && <Item />}
                        {currentPage === 'supplier' && <Supplier />}
                        {currentPage === 'task' && <Task />}
                        {currentPage === 'users' && <Users />}
                        {currentPage === 'analytics' && <ChartSectionBar />}
                    </div>

                </main>
            </div>
        </div>

    </div>
}