import "./RecentOperations.Module.css"


export default function RecentOperations() {
    return (
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 p-6">
            <div className="flex items-center justify-between mb-6 flex-wrap">
                <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                        Recent  Orders
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                        Latest Operation on Stock
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

            <div className="h-80 overflow-x-auto overflow-y-auto" id="view">
                <table className="min-w-full text-sm text-left text-slate-700 dark:text-slate-300">
                    <thead className="border-b border-slate-200 dark:border-slate-700 text-xs uppercase text-slate-500 dark:text-slate-400">
                        <tr>
                            <th scope="col" className=" py-3 px-4">Item</th>
                            <th scope="col" className="py-3 px-4">Date</th>
                            <th scope="col" className="py-3 px-4">Quantity</th>
                            <th scope="col" className="py-3 px-4">Status</th>
                            <th scope="col" className="py-3 px-4 text-right">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 ">
                        {[
                            { id: 1, item: "Blood Test Kit", date: "2025-11-01", qty: "150", status: "Purchase", color: "bg-green-100 text-green-700 dark:bg-green-800/50 dark:text-green-300" },
                            { id: 2, item: "Urine Test Strips", date: "2025-10-30", qty: "20", status: "Used", color: "bg-blue-100 text-blue-700 dark:bg-blue-800/50 dark:text-blue-300" },
                            { id: 3, item: "Glucose Monitor", date: "2025-10-28", qty: "12", status: "Reorder", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-800/50 dark:text-yellow-300" },
                            { id: 4, item: "COVID Test Kit", date: "2025-10-27", qty: "40", status: "Export", color: "bg-purple-100 text-purple-700 dark:bg-purple-800/50 dark:text-purple-300" },
                            { id: 5, item: "Vitamin D Kit", date: "2025-10-25", qty: "10", status: "Expire", color: "bg-red-100 text-red-700 dark:bg-red-800/50 dark:text-red-300" },
                        ].map((row) => (
                            <tr
                                key={row.id}
                                className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all"
                            >
                                <td className="py-3 px-4 font-medium text-slate-800 dark:text-slate-200">
                                    {row.item}
                                </td>
                                <td className="py-3 px-4 text-slate-600 dark:text-slate-400">
                                    {row.date}
                                </td>
                                <td className="py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">
                                    {row.qty}
                                </td>
                                <td className="py-3 px-4">
                                    <span
                                        className={`px-3 py-1 text-xs font-semibold rounded-full ${row.color}`}
                                    >
                                        {row.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-right">
                                    <button className="text-xs text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer font-medium">
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
        </div>
    );
}