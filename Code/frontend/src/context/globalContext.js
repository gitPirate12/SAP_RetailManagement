import React, { useContext, useState } from "react"
import axios from 'axios'


const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
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
            updateIncome,
            updateExpense         

        }}>
        {children}
        </GlobalContext.Provider>
        
    )

}








export const useGlobalContext = () => {
    return useContext(GlobalContext)
}