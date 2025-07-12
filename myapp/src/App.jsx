import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InventoryPage from "./pages/InventoryPage";
import LowStockPage from "./pages/LowStockPage";
import LogsPage from "./pages/LogsPage";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="p-6 flex-1">
          <Routes>
            <Route path="/" element={<InventoryPage />} />
            <Route path="/low-stock" element={<LowStockPage />} />
            <Route path="/logs" element={<LogsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
