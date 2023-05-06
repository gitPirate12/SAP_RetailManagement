import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

import Income from './components/Income/Income';
import { useGlobalContext } from './context/globalContext';
import Expense from './components/Expense/Expense';
import HomePage from './components/Dashboard/ArDashPage';
import ArSideNav from './SideBars/ArSideNav';
import MainNavBar from './SideBars/MainNavBar';
import styled from 'styled-components';
import Admin from './components/marketing/admin';
import MarketingAdd from './components/marketing/Marketing.Add';
import MarketingDashboard from './components/marketing/MarketingDashboard';
import MarketingEdit from './components/marketing/Marketing.Edit';

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
          </Routes>  
              
      </BrowserRouter>
    </div>
  );
}

export default App;
