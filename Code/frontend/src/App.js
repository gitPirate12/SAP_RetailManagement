import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Income from './components/Income/Income';
import { useGlobalContext } from './context/globalContext';
import styled from 'styled-components';
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
            <Route path="/" element= {<Income/>}/>
            <Route path="/expense" element={<Expense/>}/>
         </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
