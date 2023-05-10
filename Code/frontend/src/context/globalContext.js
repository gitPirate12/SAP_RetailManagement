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

    const deleteAssets = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-assets/${id}`)
        getAssets()
    }

    const totalAssets = () => {
        let totalAsset = 0;
        assets.forEach((asset) =>{
            totalAsset = totalAsset + asset.amount
        })

        return totalAsset;
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

    const deleteLiability  = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-liability /${id}`)
        getLiabilities()
    }

    const totalLiabilities = () => {
        let totalLiability  = 0;
        liabilities.forEach((liability) =>{
            totalLiability  = totalLiability  + liability.amount
        })

        return totalLiability ;
    }




    return (
        <GlobalContext.Provider value={{
            addAssets,
            getAssets,
            assets,
            deleteAssets,
            liabilities,
            totalAssets,
            addLiability ,
            getLiabilities,
            deleteLiability ,
            totalLiabilities,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}