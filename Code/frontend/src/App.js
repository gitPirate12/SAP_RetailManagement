import logo from './logo.svg';
import './App.css';
import Income from './components/Income/Income';
import { useGlobalContext } from './context/globalContext';
import styled from 'styled-components';

function App() {

  const global = useGlobalContext()
  console.log(global);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Income/>
    </div>
  );
}

export default App;
