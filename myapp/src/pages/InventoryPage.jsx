import { useState } from "react";

const initialProducts = [
    { id: "P001", name: "Computer", quantity: 20, category: "Ele" },
    { id: "P002", name: "Printer", quantity: 4, category: "Ele" },
    { id: "P003", name: "Chair", quantity: 0, category: "Furniture" },
];

export default function InventoryPage() {
    const [products, setProducts] = useState(initialProducts);
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newProduct, setNewProduct] = useState({
        id: "",
        name: "",
        quantity: 0,
        category: "",
    });

    const getStatus = (quantity) => {
        if (quantity === 0) return { label: "expired", color: "bg-red-500" };
        if (quantity < 10) return { label: "low", color: "bg-yellow-400" };
        return { label: "full", color: "bg-green-500" };
    };


    const filteredProducts = products.filter((p) => {
        const status = getStatus(p.quantity).label;
        return (
            p.name.toLowerCase().includes(search.toLowerCase()) &&
            (categoryFilter ? p.category === categoryFilter : true) &&
            (statusFilter ? status === statusFilter : true)
        );
    });

    const handleAddProduct = () => {
        const formattedProduct = {
            ...newProduct,
            quantity: Number(newProduct.quantity),
        };

        if (
            !formattedProduct.name ||
            !formattedProduct.id ||
            isNaN(formattedProduct.quantity)
        ) {
            alert("Pls Fill All Inputs");
            return;
        }

        setProducts([...products, formattedProduct]);
        setNewProduct({ id: "", name: "", quantity: 0, category: "" });
        setIsModalOpen(false);
    };

    const categories = [...new Set(products.map((p) => p.category))];

    return (
        <div dir="ltr" className="p-6 text-left">
            <h2 className="text-2xl font-bold mb-4">View</h2>

            <div className="flex flex-wrap gap-2 mb-4 items-center">
                <input
                    type="text"
                    placeholder="Search for a product."
                    className="border p-2 rounded w-full md:w-auto"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="border p-2 rounded w-full md:w-auto"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                >
                    <option value="">All categories</option>
                    {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>

                <select
                    className="border p-2 rounded w-full md:w-auto"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="">Classification</option>
                    <option value="full">full</option>
                    <option value="low">low</option>
                    <option value="expired">expired</option>
                </select>

                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full md:w-auto md:ml-auto"
                    onClick={() => setIsModalOpen(true)}
                >
                    + Add New Product
                </button>
            </div>

            <table className="min-w-full bg-white border">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Id</th>
                        <th className="border px-4 py-2">Quantity</th>
                        <th className="border px-4 py-2">Classification</th>
                        <th className="border px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((p) => {
                        const status = getStatus(p.quantity);
                        return (
                            <tr key={p.id}>
                                <td className="border px-4 py-2">{p.name}</td>
                                <td className="border px-4 py-2">{p.id}</td>
                                <td className="border px-4 py-2">{p.quantity}</td>
                                <td className="border px-4 py-2">{p.category}</td>
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

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded w-[90%] max-w-md text-right">
                        <h3 className="text-lg font-semibold mb-4">Add New Product</h3>

                        <input
                            type="text"
                            placeholder="Id"
                            className="border w-full mb-2 p-2 rounded"
                            value={newProduct.id}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, id: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="product name"
                            className="border w-full mb-2 p-2 rounded"
                            value={newProduct.name}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, name: e.target.value })
                            }
                        />
                        <input
                            type="number"
                            placeholder="Quantity"
                            className="border w-full mb-2 p-2 rounded"
                            value={newProduct.quantity}
                            onChange={(e) =>
                                setNewProduct({
                                    ...newProduct,
                                    quantity: e.target.value,
                                })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Cat"
                            className="border w-full mb-4 p-2 rounded"
                            value={newProduct.category}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, category: e.target.value })
                            }
                        />

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 border rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddProduct}
                                className="px-4 py-2 bg-blue-600 text-white rounded"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
