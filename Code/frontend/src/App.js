import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Admin from './components/marketing/admin';
import MarketingAdd from './components/marketing/Marketing.Add';
import MarketingDashboard from './components/marketing/MarketingDashboard';
import MarketingEdit from './components/marketing/Marketing.Edit';

function App() {

  
  return (
  

      <Router>
        <Routes>
          <Route path='/' exact element={<Admin/>} />
          <Route path='/addMarketing' exact element={<MarketingAdd />} />
          <Route path='/editMarketing' exact element={<MarketingEdit/>} />
          <Route path='/DashMarketing' exact element={<MarketingDashboard />} />
         
        </Routes>
      </Router>
      
      
     

    
  );
}

export default App;
