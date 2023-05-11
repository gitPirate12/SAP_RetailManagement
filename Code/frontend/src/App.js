import "./App.css";
//router
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

//context files
import { useGlobalContext } from './context/globalContext';

//component importing
import Expense from './components/Expense/Expense';
import HomePage from './components/Dashboard/ArDashPage';
import ArSideNav from './SideBars/ArSideNav';
import MainNavBar from './SideBars/MainNavBar';
import styled from 'styled-components';
import Admin from './components/marketing/admin';
import MarketingAdd from './components/marketing/Marketing.Add';
import MarketingDashboard from './components/marketing/MarketingDashboard';
import MarketingEdit from './components/marketing/Marketing.Edit';
import SupplyOrderMain from "./components/SupplyOrder/SupplyOrderMain";
import SupplierMain from "./components/Supplier/SupplierMain";
import Income from './components/Income/Income';

//inventory
import Home from './components/Inventory/Items'
import AddItem from './components/Inventory/AddItem'
import Navbar from './components/Inventory/Navbar';
import InventoryReport from './components/Inventory/InventoryReport';
import Orders from './components/Inventory/Orders';
import Dashboard from './components/Inventory/Dashboard';
import InventoryDetails from "./components/Inventory/InventoryDetails";

//styles
import './styles/InventoryStyles.css';
import ItemDisplay from "./components/Inventory/Items";


function App() {

  const global = useGlobalContext()
  console.log(global);
  return (
    <div className="App">
      
     <BrowserRouter>
        <header className="App-header">
          <MainNavBar></MainNavBar>
        </header>          
          <Routes>
            <Route path="/" element= {<HomePage/>}/>
            <Route path="/expense" element={<Expense/>}/>
            <Route path="/income" element={<Income/>}/>
            <Route path='/home' element={<HomePage/>} />
            <Route path='/' exact element={<Admin/>} />
            <Route path='/addMarketing' exact element={<MarketingAdd />} />
            <Route path='/editMarketing' exact element={<MarketingEdit/>} />
            <Route path='/DashMarketing' exact element={<MarketingDashboard />} />
            <Route path="/supplier-dash" element={<SupplierMain />} />
            <Route path="/supplier" element={<SupplierMain />} />
            <Route path="/supplyorder" element={<SupplyOrderMain />} />
            <Route path="/inventory-home" element={<Home/>} />
            <Route path="/add-item" element={<AddItem />} />
            <Route path="/reports" element={<InventoryReport />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/inventorydashboard" element={<Dashboard />} />
            <Route path="/inventory-details" element={<ItemDisplay/>}/>
          </Routes> 
              
      </BrowserRouter>
    </div>
  );

}

export default App;
