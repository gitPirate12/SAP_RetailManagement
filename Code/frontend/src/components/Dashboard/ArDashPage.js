import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import ArSideNav from '../../SideBars/ArSideNav'
import { useGlobalContext } from '../../context/globalContext'
import ArChart from '../Charts/ArChart'

function HomePage() {

  
const {getPurchases, totalPurchase, totalPurchaseDiscounts, getItems, totalStockValue, getIncomes, getExpenses, totalExpenses, totalIncome, grossProfit} = useGlobalContext()

useEffect(()=> {
  getPurchases()
  getExpenses()
  getIncomes()
  getItems()

}, [])

const totalCashFlowOut = () => {
  let totalCashFlowOut = 0
  totalCashFlowOut = totalCashFlowOut + totalPurchase() + totalExpenses()
  return totalCashFlowOut
} 

  return (
    <DashboardStyled>
        <h1 align="center">Home Page</h1>
        <div className='stats'>
          <ArSideNav></ArSideNav>
            <div>
              <table>
              <tr>
                <h2>Total Purchases: <span className='stats-data'>${totalPurchase()}</span></h2>
              </tr>
              
              
              <h2>Total Expenses: <span className='stats-data'>${totalExpenses()}</span></h2>
              <h2>Closing Stock Value: <span className='stats-data'>${totalStockValue()}</span></h2>
              <h2>Discounts Received: <span className='stats-data'>${totalPurchaseDiscounts()}</span></h2>
              <h2>Total Outflow: <span className='stats-data'>${totalCashFlowOut()}</span></h2>
              <h2>Gross Profit: <span className='stats-data'>${grossProfit()}</span></h2>
              </table>
            </div>
            <div className='chart1'>
              <ArChart/>
            </div>
        </div>
        
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
    
    display: flex;
    flex-direction: column;    
    position: relative;
    background-color: #576CBC ;
    min-height: 88%;
    .chart1{
      height: 300px;
      width: 600px;
    }
    .stats{
      display: flex;
      flex-direction: row;
    }
    .stats-data{
      color: #0B2447;
    }
    .wrapper {
    position: relative;
    display: flex;
    min-width: 300px;
    }
    .search-icon {
    align-self: flex-end;
    position: absolute;
    top: 6px;
    left: 8px;
    width: 14px;
  }
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

export default HomePage
