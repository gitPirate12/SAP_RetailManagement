import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Income from './components/Income/Income';
import { useGlobalContext } from './context/globalContext';
import HomePage from './components/Dashboard/HomePage';
import Expense from './components/Expense/Expense';



function App() {

  const global = useGlobalContext()
  console.log(global);
  return (
    <div className="App">
      
     <BrowserRouter>
        <header className="App-header">
          
        </header>          
          <Routes>
            <Route path="/" element= {<Expense/>}/>
            <Route path="/expense" element={<Expense/>}/>
            <Route path="/income" element={<Income/>}/>
          </Routes>  
              
      </BrowserRouter>
    </div>
  );
}

export default App;
