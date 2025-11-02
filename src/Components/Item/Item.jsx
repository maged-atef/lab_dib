import "./Item.Module.css"
import { ArrowDownRight, ArrowRight, ArrowUpRight, DollarSign, Eye, ShoppingCart, Users } from "lucide-react"


const actions = [
    { id: 1, item: "Urea Kit", action: "Re-Purchase", why: "Min Qty" },
    { id: 12, item: "Hg Kit", action: "use", why: "High Qty" },
    { id: 41, item: "Syringe 3cm", action: "Re-order", why: "No Qty" },
    { id: 15, item: "Sample Container", action: "Re-Purchase", why: "Expire" },
]

const stats = [
    {
        title: "Expire Count",
        value: "34",
        change: "+12.5%",
        ratio: 12.5,

        trend: "up",
        icon: DollarSign,
        color: "from-emerald-500 to-teal-600",
        bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
        textColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
        title: "Near Expire",
        value: "20",
        change: "+50%",
        ratio: 50,

        trend: "up",
        icon: Users,
        color: "from-blue-500 to-indigo-600",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        textColor: "text-blue-600 dark:text-blue-400",
    },
    {
        title: "Total Items",
        value: "2345",
        change: "+45%",
        ratio: 45,
        trend: "up",
        icon: ShoppingCart,
        color: "from-purple-500 to-pink-600",
        bgColor: "bg-purple-50 dark:bg-purple-900/20",
        textColor: "text-purple-600 dark:text-purple-400",
    },
    {
        title: "Over Stock",
        value: "124",
        change: "-5%",
        trend: "Down",
        ratio: -5,

        icon: Eye,
        color: "from-orange-500 to-red-600",
        bgColor: "bg-orange-50 dark:bg-orange-900/20",
        textColor: "text-orange-600 dark:text-orange-400",
    }
]
export default function Item() {
    return <div className="flex flex-col gap-4">
        <div className="header bg-white/80 rounded-xl px-4 py-2 ms-2 ">
            <p className="font-semibold md:text-2xl text-violet-800 border-b border-violet-500">Actions Needed</p>
            <table className=" w-full">
                <thead>
                    <tr className="border-b border-slate-200 capitalize">
                        <th className="text-start font-medium text-slate-500  " scope="col" >Item</th>
                        <th className="text-start font-medium text-slate-500 " scope="col" >action</th>
                        <th className="text-start font-medium text-slate-500 " scope="col" >why</th>
                    </tr>
                </thead>
                <tbody className="">

                    {actions.map((item, index) => {
                        return (
                            <tr className="" key={index}>
                                <td className=" font-semibold  text-xs md:text-xl">{item.item}</td>
                                <td className="text-blue-400  underline uppercase text-xs md:text-xl ">{item.action}</td>
                                <td className="text-red-500  uppercase underline  text-xs md:text-xl">{item.why}</td>
                            </tr>

                        )
                    })}


                </tbody>
            </table>

        </div>
        <div className="cards bg-white/80 rounded-xl px-4 py-2 ms-2 ">
            <p className="font-semibold md:text-2xl text-violet-800 border-b border-violet-500">Status</p>

           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {stats?.map((item, index) => {
                    return <div key={index} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/20 transition-all duration-300 group">

                        <div className="flex items-start justify-between">
                            <div className="flex-1" >
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                                    {item.title}
                                </p>

                                <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4">{item.value}</p>

                                <div className="flex items-center space-x-2">
                                    {item.trend === "up" ? <ArrowUpRight className="w-4 h-4 text-emerald-500" /> : <ArrowDownRight className="w-4 h-4 text-red-500" />}
                                    <span className={`text-sm font-semibold ${item.trend === "up" ? "text-emerald-600" : "text-red-500"}`}> Change: {item.change}</span>
                                    <span className="text-sm text-slate-500 dark:text-slate-400"> vs Last</span>
                                </div>
                            </div>
                            <div className={`p-3 rounded-xl group-hover:scale-110 ${item.bgColor} transition-all duration-200`}>
                                {<item.icon className={`w-6 h-6 ${item.textColor}`} />}
                            </div>
                        </div>
                        {/* progress bar */}
                        <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">

                            <div className={`h-full bg-linear-to-r ${item.color}  rounded-full transition-all duration-100`} style={{ width: item.ratio }}>

                            </div>

                        </div>
                    </div>
                })}

            </div>

        </div>
        <div className="cruds bg-white/80 rounded-xl px-4 py-2 ms-2 ">
            <p className="font-semibold md:text-2xl text-violet-800 border-b border-violet-500">Operations</p>

                      <div className="cruds  md:w-2/3 border-slate-400 rounded-xl bg-white/80 my-3 px-4 py-1">
                <p className="sm:font-semibold xl:text-2xl font-semibold">Inventory Managment</p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 border border-gray-400 rounded-xl px-5 py-5 mb-4">

                    <input type="text" name="" id="itemid" placeholder="Enter item Name" className="bg-blue-50 p-2 rounded m-2 w-full outline-none focus:ring-2 focus:ring-blue-500" />
         
                    <input type="number" name="" id="price" placeholder="price " className="bg-blue-50 p-2 rounded m-2 w-full outline-none focus:ring-2 focus:ring-blue-400" />
               
                    <input type="number" name="" id="amount" placeholder="Qty" className="bg-blue-50 p-2 rounded m-2 w-full outline-none focus:ring-2 focus:ring-blue-400" />
                    <input type="number" name="" id="min-qty" placeholder="min-qty to restock" className="bg-blue-50 p-2 rounded m-2 w-full outline-none focus:ring-2 focus:ring-blue-400" />

                    <input type="number" name="" id="qty-reorder" placeholder="min-qty to reorder" className="bg-blue-50 p-2 rounded m-2 w-full outline-none focus:ring-2 focus:ring-blue-400" />
                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    <button className="bg-linear-to-r from-blue-400 to-purple-500 rounded px-4 text-white uppercase py-1 ms-2 ">Add</button>
                    <button className="bg-linear-to-r from-blue-400 to-green-500 rounded px-4 text-white uppercase py-1 ms-2 ">Delete</button>
                    <button className="bg-linear-to-r from-blue-400 to-red-500 rounded px-4 text-white uppercase py-1 ms-2 ">Edit</button>
                    <button className="bg-linear-to-r from-yellow-400 to-violet-500 rounded px-4 text-white uppercase py-1 ms-2 ">ask</button>
                    <button className="bg-linear-to-r from-green-400 to-blue-500 rounded px-4 text-white uppercase py-1 ms-2 ">Planning</button>
                </div>
            </div>
        </div>
        <div className="stock bg-white/80 rounded-xl px-4 py-2 ms-2 ">
            <p className="font-semibold md:text-2xl text-violet-800 border-b border-violet-500">Current Stock</p>


        </div>

    </div>
}