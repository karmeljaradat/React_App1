import { useState } from "react";

const mockData = [
    { id: "P001", name: "Computer", quantity: 20, category: "Ele" },
    { id: "P002", name: "Printer", quantity: 4, category: "Ele" },
    { id: "P003", name: "Chair", quantity: 0, category: "furniture" },
];

export default function LowStockPage() {
    const lowStockThreshold = 10;

    const lowOrOutProducts = mockData.filter(
        (p) => p.quantity <= lowStockThreshold
    );

    const getStatus = (quantity) => {
        if (quantity === 0) return { label: "expired", color: "bg-red-500" };
        if (quantity < 10) return { label: "low", color: "bg-yellow-400" };
        return { label: "full", color: "bg-green-500" };
    };


    return (
        <div dir="ltr" className="text-left">
            <h2 className="text-left font-bold mb-4">Low or expired products</h2>

            <table className="min-w-full bg-white border">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Id</th>
                        <th className="border px-4 py-2">Quantity</th>
                        <th className="border px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {lowOrOutProducts.map((p) => {
                        const status = getStatus(p.quantity);
                        return (
                            <tr key={p.id} className="border-b">
                                <td className="border px-4 py-2">{p.name}</td>
                                <td className="border px-4 py-2">{p.id}</td>
                                <td className="border px-4 py-2">{p.quantity}</td>
                                <td className="border px-4 py-2">
                                    <span
                                        className={`text-white px-2 py-1 rounded text-sm ${status.color}`}
                                    >
                                        {status.label}
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

