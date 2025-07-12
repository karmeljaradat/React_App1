import { useState } from "react";

export default function AddProductModal({ onClose, onAdd }) {
    const [formData, setFormData] = useState({
        name: "",
        id: "",
        quantity: "",
        category: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md text-left">
                <h2 className="text-xl font-bold mb-4">ADD NEW PRODUCT</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="the product name"
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="id"
                        placeholder="id"
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="number"
                        name="quantity"
                        placeholder="quantity"
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="category"
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded"
                        >
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
