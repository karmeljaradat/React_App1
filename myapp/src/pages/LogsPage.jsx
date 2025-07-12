import { useState } from "react";

const logs = [
    {
        date: "2025-07-09",
        type: "Add",
        product: "xccn",
        quantity: "+5",
        user: "Ahmad",
    },
    {
        date: "2025-07-08",
        type: "Delete",
        product: "Printer",
        quantity: "-2",
        user: "Sara",
    },
    {
        date: "2025-07-07",
        type: "Edit",
        product: "Computer",
        quantity: "+3",
        user: "Mohammad",
    },
];

export default function LogsPage() {
    const [typeFilter, setTypeFilter] = useState("");
    const [sortedAsc, setSortedAsc] = useState(true);

    const filteredLogs = logs
        .filter((log) => (typeFilter ? log.type === typeFilter : true))
        .sort((a, b) =>
            sortedAsc
                ? new Date(a.date) - new Date(b.date)
                : new Date(b.date) - new Date(a.date)
        );

    return (
        <div dir="ltr" className="text-left">
            <h2 className="text-2xl font-bold mb-4">Transaction Log</h2>

            <div className="flex gap-4 mb-4">
                <select
                    className="border p-2 rounded"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                >
                    <option value="">All Transaction</option>
                    <option value="Add">Add</option>
                    <option value="Delete">Delete</option>
                    <option value="Edit">Edit</option>
                </select>

                <button
                    onClick={() => setSortedAsc(!sortedAsc)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {sortedAsc ? "ASC" : "DESC"}
                </button>
            </div>

            <table className="min-w-full bg-white border">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2">History</th>
                        <th className="border px-4 py-2">Transaction</th>
                        <th className="border px-4 py-2">Product</th>
                        <th className="border px-4 py-2">Quantity</th>
                        <th className="border px-4 py-2">Employee</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredLogs.map((log, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{log.date}</td>
                            <td className="border px-4 py-2">{log.type}</td>
                            <td className="border px-4 py-2">{log.product}</td>
                            <td className="border px-4 py-2">{log.quantity}</td>
                            <td className="border px-4 py-2">{log.user}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
