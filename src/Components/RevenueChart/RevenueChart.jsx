import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Rectangle 
} from "recharts";
import "./RevenueChart.Module.css";

const data = [
  { month: "January", revenue: 12000, expenses: 8000 },
  { month: "February", revenue: 15000, expenses: 9500 },
  { month: "March", revenue: 17000, expenses: 11000 },
  { month: "April", revenue: 16000, expenses: 9000 },
  { month: "May", revenue: 20000, expenses: 12000 },
  { month: "June", revenue: 22000, expenses: 15000 },
  { month: "July", revenue: 25000, expenses: 14000 },
  { month: "August", revenue: 23000, expenses: 13000 },
  { month: "September", revenue: 19000, expenses: 10000 },
  { month: "October", revenue: 21000, expenses: 12000 },
  { month: "November", revenue: 24000, expenses: 15000 },
  { month: "December", revenue: 30000, expenses: 18000 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 p-6">
      <div className="flex items-center justify-between mb-6 flex-wrap">
        <div className="">
          <h3 className="xl:text-xl font-bold text-slate-800 dark:text-white">
            Revenue Chart
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Monthly Revenue and Expenses
          </p>
        </div>

        <div className="flex items-center space-x-4 flex-wrap">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Revenue
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-linear-to-r from-slate-400 to-slate-500 rounded-full"></div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Expenses
            </div>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            {/* Revenue Bar */}
            <Bar 
              dataKey="revenue" 
              fill="url(#colorRevenue)" 
              activeBar={<Rectangle fill="pink" stroke="blue" />} 
            />

            {/* Expenses Bar */}
            <Bar 
              dataKey="expenses" 
              fill="url(#colorExpenses)" 
              activeBar={<Rectangle fill="lightgray" stroke="gray" />} 
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#A855F7" stopOpacity={0.8}/>
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#94A3B8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#475569" stopOpacity={0.8}/>
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
