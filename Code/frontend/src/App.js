import "./App.css";
import SupplyOrderMain from "./components/SupplyOrder/SupplyOrderMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SupplierMain from "./components/Supplier/SupplierMain";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <header className="App-header"></header>
                <Routes>
                    <Route path="/supplier-dash" element={<SupplierMain />} />
                    <Route path="/supplier" element={<SupplierMain />} />
                    <Route path="/supplyorder" element={<SupplyOrderMain />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
