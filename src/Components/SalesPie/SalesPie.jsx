import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer
} from "recharts";
import "./SalesPie.Module.css";

const labTestData = [
  { name: "Complete Blood Count (CBC)", value: 320, color: "#6366F1" },
  { name: "Liver Function Test (LFT)", value: 280, color: "#A855F7" },
  { name: "Kidney Function Test (KFT)", value: 240, color: "#10B981" },
  { name: "Blood Sugar (Fasting)", value: 200, color: "#F59E0B" },
  // { name: "Lipid Profile", value: 180, color: "#EF4444" },
  // { name: "Thyroid Profile (T3, T4, TSH)", value: 160, color: "#3B82F6" },
  // { name: "Vitamin D", value: 140, color: "#8B5CF6" },
  // { name: "Calcium", value: 120, color: "#14B8A6" },
  // { name: "Urine Routine", value: 100, color: "#F472B6" },
  // { name: "Hemoglobin A1C (HbA1c)", value: 90, color: "#F97316" }
];

// 🏷️ Custom label renderer — cleaner positioning and black text
const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name
}) => {
  const RADIAN = Math.PI / 180;
  // place text 85% out toward the outer edge
  const radius = innerRadius + (outerRadius - innerRadius) * 0.85;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // skip very small slices
  if (percent < 0.05) return null;

  return (
    <text
      x={x}
      y={y}
      fill="#000"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={10}
      fontWeight="500"
      style={{ pointerEvents: "none" }}
    >
      {name}
    </text>
  );
};

export default function SalesPie() {
  return (
    <div className="bg-white dark:bg-slate-900 backdrop-blur-xl rounded-b-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 ">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          Sales By Category
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Lab Test</p>
      </div>

      <div className="h-80 ">
        <ResponsiveContainer width="100%" height="100%" >
          <PieChart className="**:">
            <Pie
              data={labTestData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={50}
              labelLine={false}
              
              label={renderCustomLabel}
            >
              {labTestData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
    
    </div>
  );
}
