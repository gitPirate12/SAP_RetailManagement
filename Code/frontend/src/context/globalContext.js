import React, { useContext, useState } from "react"
import axios from 'axios'


const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [purchases, setPurchases] = useState([])
    const [items, setItems] = useState([])
    const [error, setError] = useState(null)

    //method to add an income to the database
    const addIncome = async(income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
        .catch((err) => {
            setError(err.response.data.message)
        })
        getIncomes()
    }
    //method to get all incomes from the database
    const getIncomes = async() => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        
    }

    //method to add an income to the database
    const deleteIncome = async(id) => {
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`)        
        getIncomes()
        alert("Income Deleted")
    }

    const updateIncome = async(id, update) => {
        console.log({update})
        const response = await axios.put(`${BASE_URL}update-income/${id}`, update)
        getIncomes()
        
    }

    //calculating total income
    const totalIncome= () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })
        return totalIncome;
    }

    //---------------------Expenses Section-----------------------

    //adding an expense to the database
    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}add-expense`, expense)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpenses()
    }
    //getting expenses from db
    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }
    //deleting expense from db
    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }
    //updating expense
    const updateExpense = async(id, update) => {
        const response = await axios.put(`${BASE_URL}update-expense/${id}`, update)
        console.log(response)
        getExpenses()
        
    }

    //calculating total expenses
    const totalExpenses = () => {
        let totalExpense = 0;
        expenses.forEach((expense) =>{
            totalExpense = totalExpense + expense.amount
        })
        
        return totalExpense;
    }

    //calculating total purchases(supply)

    const getPurchases = async () => {
        const response = await axios.get(`${BASE_URL}getsupplyorders`)
        setPurchases(response.data)
        console.log(response.data)
    }

    const totalPurchase = () => {
        let totalPurchase = 0;
        purchases.forEach((purchase) =>{
            totalPurchase = totalPurchase + (purchase.amount*purchase.price)
        })      
        totalPurchase = totalPurchase - totalPurchaseDiscounts()
        return totalPurchase;
    }

    const totalPurchaseDiscounts = () => {
        let totalPurchaseDiscounts = 0;
        purchases.forEach((purchase) =>{
          totalPurchaseDiscounts = totalPurchaseDiscounts + (parseInt(purchase.discount)*purchase.amount)
      })      
      return totalPurchaseDiscounts;
    }

    //calculating item related computations

    const getItems = async () => {
        const response = await axios.get(`${BASE_URL}get-items`)
        setItems(response.data)
        console.log(response.data)
    }

    const totalStockValue = () => {
        let totalStockValue = 0;
        items.forEach((items) =>{
            totalStockValue = totalStockValue + (items.price*items.quantity)
        })
        return totalStockValue;
    }

    //total cash outflow
    const totalCashOutFlow = () => {
        let totalCashOutFlow = 0
        totalCashOutFlow = totalCashOutFlow + totalPurchase() + totalExpenses()
        return totalCashOutFlow
      }
    
      //total cash outflow
    const totalCashInFlow = () => {
        let totalCashInFlow = 0
        totalCashInFlow = totalCashInFlow + totalIncome()
        return totalCashInFlow
      }
    

    //calculating Gross Profit
    const grossProfit = () => {
        let grossProfit = 0;
        grossProfit = totalPurchase() - totalStockValue();
        return grossProfit;
    }

    

    return(
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            error,
            setError,
            deleteIncome,
            totalIncome,
            BASE_URL,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            expenses,
            updateIncome,
            updateExpense,
            getPurchases,
            totalPurchase,
            getItems,
            totalStockValue,
            purchases,
            totalPurchaseDiscounts,
            grossProfit,
            totalCashOutFlow,
            totalCashInFlow
                    

        }}>
        {children}
        </GlobalContext.Provider>
        
    )

}








export const useGlobalContext = () => {
    return useContext(GlobalContext)
}