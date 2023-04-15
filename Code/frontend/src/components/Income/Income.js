import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/globalContext'
import { Ar_InnerLayout } from '../../styles/arLayouts'
import IncomeForm from './IncomeForm'
import styled from 'styled-components'
import IncomeItem from './IncomeItem'
import Popup from './Popup'

function Income() {
    const {addIncome, incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    const [addIncomePopup, setAddIncomePopUp] = useState(false);

    useEffect(() =>{
        getIncomes()
    }, [])
  return (
    <IncomeStyled>
        <div className="layer1">
            <h1>Incomes</h1>
                <button onClick={() => setAddIncomePopUp(true)}>Add Income</button>
                    <Popup trigger={addIncomePopup} setTrigger={setAddIncomePopUp}>
                        <IncomeForm></IncomeForm>
                    </Popup>   
        </div> 
         
        <Ar_InnerLayout>      
           
            <h2>Total Income: <span>${totalIncome()}</span></h2>
            <div className='income-content'>
                            
                <div className='incomes'>
                {incomes.map((income) => {
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
                {incomes.map((income) => {
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
