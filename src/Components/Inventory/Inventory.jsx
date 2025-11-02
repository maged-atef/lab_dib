import "./Inventory.Module.css"

const items = [
    { nameItem: "EDTA Tubes 4ml", Qty: 120, minQty: 50, QtyLimit: 500, expire: "2026-08-01" },
    { nameItem: "Lithium Heparin Tubes", Qty: 200, minQty: 80, QtyLimit: 600, expire: "2027-02-10" },
    { nameItem: "Sodium Citrate 3.2% Tubes", Qty: 150, minQty: 60, QtyLimit: 400, expire: "2025-03-15" },
    { nameItem: "Plain Red Top Tubes", Qty: 300, minQty: 100, QtyLimit: 800, expire: "2026-05-20" },
    { nameItem: "Gloves (Small)", Qty: 500, minQty: 200, QtyLimit: 2000, expire: "2027-11-01" },
    { nameItem: "Gloves (Medium)", Qty: 450, minQty: 200, QtyLimit: 2000, expire: "2027-11-01" },
    { nameItem: "Gloves (Large)", Qty: 480, minQty: 200, QtyLimit: 2000, expire: "2027-11-01" },
    { nameItem: "Microscope Slides", Qty: 1000, minQty: 300, QtyLimit: 3000, expire: "N/A" },
    { nameItem: "Cover Slips 22x22mm", Qty: 850, minQty: 200, QtyLimit: 2500, expire: "N/A" },
    { nameItem: "Blood Collection Needles 21G", Qty: 400, minQty: 150, QtyLimit: 1500, expire: "2028-01-01" },
    { nameItem: "Blood Collection Needles 23G", Qty: 350, minQty: 150, QtyLimit: 1500, expire: "2028-01-01" },
    { nameItem: "Syringes 5ml", Qty: 600, minQty: 200, QtyLimit: 2500, expire: "2029-01-01" },
    { nameItem: "Syringes 10ml", Qty: 550, minQty: 200, QtyLimit: 2500, expire: "2029-01-01" },
    { nameItem: "Alcohol Swabs", Qty: 900, minQty: 300, QtyLimit: 5000, expire: "2028-06-14" },
    { nameItem: "Tourniquet", Qty: 100, minQty: 30, QtyLimit: 200, expire: "N/A" },
    { nameItem: "HB Reagent (Cyanmet)", Qty: 8, minQty: 3, QtyLimit: 20, expire: "2025-12-10" },
    { nameItem: "Glucose Reagent", Qty: 6, minQty: 3, QtyLimit: 15, expire: "2026-04-01" },
    { nameItem: "Urea Reagent", Qty: 6, minQty: 3, QtyLimit: 15, expire: "2026-07-22" },
    { nameItem: "Creatinine Reagent", Qty: 7, minQty: 2, QtyLimit: 15, expire: "2026-09-10" },
    { nameItem: "Cholesterol Reagent", Qty: 5, minQty: 2, QtyLimit: 15, expire: "2026-08-18" },
    { nameItem: "Triglycerides Reagent", Qty: 4, minQty: 2, QtyLimit: 12, expire: "2026-09-28" },
    { nameItem: "AST Reagent", Qty: 6, minQty: 2, QtyLimit: 15, expire: "2025-11-15" },
    { nameItem: "ALT Reagent", Qty: 5, minQty: 2, QtyLimit: 15, expire: "2025-11-15" },
    { nameItem: "Alkaline Phosphatase Reagent", Qty: 4, minQty: 2, QtyLimit: 10, expire: "2026-06-30" },
    { nameItem: "Bilirubin Total Reagent", Qty: 5, minQty: 2, QtyLimit: 10, expire: "2025-10-01" },
]
export default function Inventory() {
    return <div className="">
        <p className="font-semibold text-center shadow mb-7 md:text-2xl ">Inventory List</p>
        <input type="text" placeholder="Search for Item in Stock" className="my-4 p-4 outline-none focus:ring focus:ring-blue-400 rounded-lg bg-white/80 w-full " />
        <table className="w-full overflow-y-auto">
            <thead className="bg-slate-300" >
                <tr>
                    <th className="text-start p-2 capitalize">Item</th>
                    <th className="text-start p-2 capitalize">Qty in hand</th>
                    <th className="text-start p-2 capitalize">minQty</th>
                    <th className="text-start p-2 capitalize">QtyLimit</th>
                    <th className="text-start p-2 capitalize">expire</th>
                    <th className="text-start p-2 capitalize">actions</th>
                </tr>
            </thead>
            <tbody className="">

                {items.map((item, index) => {
                    return <tr key={index} className="border-b border-slate-400 mb-2">
                        <td><div className="m-2">{item.nameItem}</div></td>
                        <td className={`${item.Qty > item.minQty ? "text-emerald-500":"text-red-400"}`}>{item.Qty}</td>
                        <td className={` font-semibold`}>{item.minQty}</td>
                        <td className={`font-semibold`}>{item.QtyLimit}</td>
                        <td className={``}>{item.expire}</td>
                        <td className="cursor-pointer text-blue-500 underline">actions</td>
                    </tr>
                })}

            </tbody>
        </table>
    </div>
}