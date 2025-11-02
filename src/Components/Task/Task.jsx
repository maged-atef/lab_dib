import "./Task.Module.css"

const data_Task = [

    {
        id: 1,
        task: "Order Blood Test Kit",
        date: "2025-11-01",
        person: "Dr. Ahmed",
        status: "finish",
        color: "bg-green-100 text-green-700 dark:bg-green-800/50 dark:text-green-300"
    },
    {
        id: 2,
        task: "Use Urine Test Strips in Lab",
        date: "2025-10-30",
        person: "Nurse Sara",
        status: "ongoing",
        color: "bg-blue-100 text-blue-700 dark:bg-blue-800/50 dark:text-blue-300"
    },
    {
        id: 3,
        task: "Reorder Glucose Monitor",
        date: "2025-10-28",
        person: "Store Manager",
        status: "pending",
        color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-800/50 dark:text-yellow-300"
    },
    {
        id: 4,
        task: "Export COVID Test Kit to Branch B",
        date: "2025-10-27",
        person: "Logistic Team",
        status: "finish",
        color: "bg-purple-100 text-purple-700 dark:bg-purple-800/50 dark:text-purple-300"
    },
    {
        id: 5,
        task: "Remove Expired Vitamin D Kit",
        date: "2025-10-25",
        person: "Pharmacist",
        status: "refuse",
        color: "bg-red-100 text-red-700 dark:bg-red-800/50 dark:text-red-300"
    }


]


const plannedTasks= [
        {
        id: 4,
        task: "Export COVID Test Kit to Branch B",
        date: "2025-10-27",
        person: "Logistic Team",
        status: "planned",
        color: "bg-purple-100 text-purple-700 dark:bg-purple-800/50 dark:text-purple-300"
    },
    {
        id: 5,
        task: "Remove Expired Vitamin D Kit",
        date: "2025-10-25",
        person: "Pharmacist",
        status: "planned",
        color: "bg-red-100 text-red-700 dark:bg-red-800/50 dark:text-red-300"
    }
]
export default function Task() {
    return <div className="flex flex-col">
        <div className=" md:flex justify-between gap-3">
            <div className="assingTask  md:w-2/3 border-slate-400 rounded-xl bg-white/80 my-3 px-4 py-1">
                <p className="sm:font-semibold xl:text-2xl font-semibold">Assign Task to Employee</p>
                <div className="grp">

                    <textarea type="text" name="" id="taskID" placeholder="Enter Task Name" className="bg-blue-50 p-2 rounded m-2 w-full outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="grp">

                    <input type="text" name="" id="empID" placeholder="Employee Name" className="bg-blue-50 p-2 rounded m-2 w-full outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="grp">
                    <label htmlFor="dateID" className="text-slate-400">Deadline: </label>
                    <input type="date" name="" id="dateID" placeholder="Employee Name" className="bg-blue-50 p-2 rounded m-2 w-full outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    <button className="bg-linear-to-r from-blue-400 to-purple-500 rounded px-4 text-white uppercase py-1 ms-2 ">Add</button>
                    <button className="bg-linear-to-r from-blue-400 to-green-500 rounded px-4 text-white uppercase py-1 ms-2 ">draft</button>
                    <button className="bg-linear-to-r from-blue-400 to-red-500 rounded px-4 text-white uppercase py-1 ms-2 ">email first</button>
                    <button className="bg-linear-to-r from-yellow-400 to-violet-500 rounded px-4 text-white uppercase py-1 ms-2 ">ask</button>
                    <button className="bg-linear-to-r from-green-400 to-blue-500 rounded px-4 text-white uppercase py-1 ms-2 ">Planning</button>
                </div>
            </div>
            <div className="bg-white my-3 md:w-1/3  rounded-xl font-semibold py-2 px-4 md:text-xl">
                <p>Planned Tasks</p>
                <div className="taks">
                    <table>
                        <thead className="flex justifiy-evenly">
                            <tr>
                                <th className="px-2 py-2 font-medium uppercase border-b  w-screen">task</th>
                             
                            </tr>
                        </thead>
                        <tbody>
                    
                            {plannedTasks.map((item,index)=>{
                                return (
                                    // view total on click
                                    <tr className="cursor-pointer" key={index}>
                                        <td className="text-blue-600">✔{ item.task.toString().split(" ").slice(0,3).join(" ")}</td>
                                    </tr>
                                )
                            })}
                     

                        </tbody>
                    </table>
                </div>
            </div>


        </div>


        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                        Tasks
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                        Tasks & Status
                    </p>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-full"></div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                            View all
                        </div>
                    </div>


                </div>
            </div>

            <div className="h-80  overflow-x-auto overflow-y-auto" id="view">
                <table className="min-w-full text-sm text-left text-slate-700 dark:text-slate-300 ">
                    <thead className="border-b border-slate-200 dark:border-slate-700 text-xs uppercase text-slate-500 dark:text-slate-400">
                        <tr>
                            <th scope="col" className="py-3 px-4">Task</th>
                            <th scope="col" className="py-3 px-4">Date</th>
                            <th scope="col" className="py-3 px-4">To</th>
                            <th scope="col" className="py-3 px-4">Status</th>

                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 ">

                        {data_Task.map((row, index) =>

                            <tr
                                key={index}
                                className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all"

                            >
                                <td className="py-3 px-4 font-medium text-slate-800 dark:text-slate-200">
                                    {row.task}
                                </td>
                                <td className="py-3 px-4 font-medium text-slate-800 dark:text-slate-200">
                                    {row.date}
                                </td>
                                <td className="py-3 px-4 text-slate-600 dark:text-slate-400 cursor-pointer">
                                    {row.person}
                                </td>
                                <td className="py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">
                                    {row.status}
                                </td>
                                <td className="py-3 px-4">
                                    <span
                                        className={`px-3 py-1 text-xs font-semibold rounded-full ${row.color}`}
                                    >
                                        {row.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-right">
                                    <button className="text-xs text-blue-500 cursor-pointer hover:text-blue-700 dark:hover:text-blue-400 font-medium">
                                        View
                                    </button>
                                </td>
                            </tr>

                        )}
                    </tbody>
                </table>


            </div>
        </div >
    </div>

}