import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/globalContext'
import { Ar_InnerLayout } from '../../styles/arLayouts'
import IncomeForm from './IncomeForm'
import styled from 'styled-components'
import IncomeItem from './IncomeItem'
import Popup from './Popup'
import { plus, cross } from '../../utils/Icons'
import Button from '../Button/Button'
import axios from 'axios'

function Income() {
    const {addIncome, incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    const [addIncomePopup, setAddIncomePopUp] = useState(false);

    const[incomeData,setIncomeData] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        const fetchIncomes = async () => {
            const res = await axios.get("http://localhost:5000/api/v1/get-incomes");
            setIncomeData(res.data);
        };
        fetchIncomes()
        
    }, [incomeData]);

    const handleSeachArea = (e) => {
       setSearch(e)
       console.log(search)
    }

    //useEffect(() =>{
      //  getIncomes()
    //}, [])
  return (
    <IncomeStyled>
        <input className='form-control' type='search' placeholder='Search' name='searchQuery' onChange={(e) => handleSeachArea(e.target.value)} />
        <div className="layer1">
            <h1>Incomes</h1>
                <Button 
                        icon={plus}
                        name={"Add Income"}
                        bPad={'.8rem 1.6rem'}
                        bRad={'30px'}
                        bg={'var(--primary-color'}
                        color={'#fff'}
                        iColor={'#fff'}                        
                        onClick={() => setAddIncomePopUp(true)}/>                        
                    <Popup trigger={addIncomePopup} setTrigger={setAddIncomePopUp}>
                        <IncomeForm></IncomeForm>
                    </Popup>   
        </div> 
         
        <Ar_InnerLayout>      
           
            <h2>Total Income: <span>${totalIncome()}</span></h2>
            <div className='income-content'>
                            
                <div className='incomes'>
                {incomeData.filter((val)=> {
                    if(search ==""){
                        return val
                    }else if(val.title.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                }).map((income) => {
                        const {_id, title, amount, date, category, type, description} = income;
                        return <IncomeItem
                        key={_id}
                        id={_id} 
                        title={title} 
                        description={description} 
                        amount={amount} 
                        date={date} 
                        type={type}
                        category={category} 
                        deleteItem={deleteIncome} />                        
                    })}
                </div>
                <div className='incomes'>
                {incomeData.map((income) => {
                        const {_id, title, amount, date, category, type, description} = income;
                        return <IncomeItem
                        key={_id}
                        id={_id} 
                        title={title} 
                        description={description} 
                        amount={amount} 
                        date={date} 
                        type={type}
                        category={category} 
                        deleteItem={deleteIncome} />                        
                    })}
                </div>
                
            </div>
      
    
        </Ar_InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`
    
    display: flex;
    flex-direction: column;    
    position: relative;
    background-color: #576CBC ;
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
           flex:1;
           
            
        }
    }
    .layer1{
        width:50%;
        align-self: center;
    }
`

export default Income
