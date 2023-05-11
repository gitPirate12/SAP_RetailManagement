import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Orb from './components/Orb/Orb'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Assets from './components/Assets/Assets'
import Liabilities from './components/Liabilities/Liabilities';
import { useGlobalContext } from './context/globalContext';
import {Routes, Route, BrowserRouter} from "react-router-dom"

function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);


  // const displayData = () => {
  //   switch(active){
  //     case 1:
  //       return <Home />
  //     case 2:
  //       return <Dashboard />
  //     case 3:
  //       return <Assets/>
  //     case 4: 
  //       return <Liabilities />
  //     default: 
  //       return <Home />
  //   }
  // }

  // const orbMemo = useMemo(() => {
  //   return <Orb />
  // },[])

  return (
    <div>
     <AppStyled bg={bg} className="App">
       {/* {orbMemo} */}
      {/* <MainLayout> */}
        
      <BrowserRouter>        
            <Routes>              
              <Route path='/' element={<Home/>}/>
              <Route path='/assets' element={<Assets/>}/>
              <Route path='/liabilities' element={<Liabilities/>}/>
              <Route path='/ae_dashboard' element={<Dashboard/>}/>
            </Routes>        
      </BrowserRouter>  
        {/* <main>
          {displayData()}
        </main> */}
      {/* </MainLayout> */}
    // </AppStyled>
    </div>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;

