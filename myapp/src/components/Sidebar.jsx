import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const linkClass =
        "block px-4 py-2 rounded hover:bg-blue-100 text-gray-700 font-medium";

    const activeClass = "bg-blue-600 text-white";

    return (
        <div className="w-64 bg-white border-r p-4">
            <h2 className="text-xl font-bold mb-6">System</h2>
            <nav className="flex flex-col gap-2">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? `${linkClass} ${activeClass}` : linkClass
                    }
                >
                    View
                </NavLink>
                <NavLink
                    to="/low-stock"
                    className={({ isActive }) =>
                        isActive ? `${linkClass} ${activeClass}` : linkClass
                    }
                >
                    The Low End Products
                </NavLink>
                <NavLink
                    to="/logs"
                    className={({ isActive }) =>
                        isActive ? `${linkClass} ${activeClass}` : linkClass
                    }
                >
                    Transaction Log
                </NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;
