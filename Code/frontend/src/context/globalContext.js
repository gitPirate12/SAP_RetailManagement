import React, { useContext, useState } from "react"
import axios from 'axios' 


const BASE_URL = "http://localhost:5000/api/v1/";


const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [assets, setAsset] = useState([])
    const [liabilities, setLiabilities] = useState([])
    const [error, setError] = useState(null)

    //calculate Assets
    const addAssets = async (asset) => {
        const response = await axios.post(`${BASE_URL}add-assets`, asset)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getAssets()
    }

    const getAssets = async () => {
        const response = await axios.get(`${BASE_URL}get-assets`)
        setAsset(response.data)
        console.log(response.data)
    }

    const updateAsset = async(id, update) => {
        console.log({update})
        const response = await axios.put(`${BASE_URL}update-asset/${id}`, update)
        getAssets()   
    }

    const deleteAssets = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-assets/${id}`)
        getAssets()
    }
//Get total valu
    const totalAssets = () => {
        let totalAsset = 0;
        assets.forEach((asset) =>{
            totalAsset = totalAsset + asset.amount
        })

        return totalAsset;
    }
  
//Depreciation
    const totalDepreciation = () => {
        let totalDep= 0;
        assets.forEach((asset) =>{
            totalDep = ((asset.amount-asset.rValue)/asset.years).toFixed(2);
        })

        return totalDep;
    }

    //calculate liabilities
    const addLiability = async (liability) => {
        const response = await axios.post(`${BASE_URL}add-liability`, liability)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getLiabilities()
    }

    const getLiabilities = async () => {
        const response = await axios.get(`${BASE_URL}get-liabilities`)
        setLiabilities(response.data)
        console.log(response.data)
    }

    const updateLiability = async(id, update) => {
        console.log({update})
        const response = await axios.put(`${BASE_URL}update-liability/${id}`, update)
        getLiabilities()   
    }

    const deleteLiability  = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-liability/${id}`)
        getLiabilities()
    }
//Get total
    const totalLiabilities = () => {
        let totalLiability  = 0;
        liabilities.forEach((liability) =>{
            totalLiability  = totalLiability  + liability.amount
        })

        return totalLiability ;
    }
//calculate Interest
    const totalInterest =()=>{
        let interest = 0;
        liabilities.forEach((liability)=>{
            interest = ((liability.amount * liability.ratio * liability.years)/100).toFixed(2);
        })
        return interest;
    }


    return (
        <GlobalContext.Provider value={{
            assets,
            addAssets,
            getAssets,
            updateAsset,
            deleteAssets,
            totalAssets,
            totalDepreciation,
            liabilities,
            addLiability ,
            getLiabilities,
            updateLiability,
            deleteLiability ,
            totalLiabilities,
            totalInterest,
            error,
            setError,
            
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}