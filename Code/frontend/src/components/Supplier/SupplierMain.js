import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SupplierStore from "./SupplierStore";
import Suppliers from "./Suppliers";
import SupplierUpdateForm from "./SupplierUpdateForm";
import SupplierForm from "./SupplierForm";
import styled from "styled-components";
import SideBar from "../Sidebar/Sidebar";
import { plus } from "../../utils/Icons";
function Supplier() {
    const store = SupplierStore();
    const [ButtonStatus, setButtonStatus] = useState(false);
    //use effect
    useEffect(() => {
        store.getSuppliers();
    }, []);

    return (
        <SupplierStyle>
            <>
                <section className="header"></section>
                <section>
                    <div className="supplierList">
                        <div className="income-content">
                            <SideBar></SideBar>

                            <div>
                                {ButtonStatus && <SupplierForm />}
                                <div className="submit-btn">
                                    {!ButtonStatus &&
                                        !store.updateSupplierForm._id && (
                                            <button
                                                className="layer1"
                                                onClick={setButtonStatus}
                                            >
                                                {plus} Create Supplier
                                            </button>
                                        )}
                                </div>
                                <SupplierUpdateForm />
                                {!ButtonStatus && <Suppliers />}
                                <div className="cancle">
                                    {" "}
                                    {ButtonStatus && (
                                        <button
                                            onClick={() =>
                                                setButtonStatus(false)
                                            }
                                        >
                                            Cancle
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </SupplierStyle>
    );
}
const SupplierStyle = styled.div`
display: flex;
flex-direction: column;    
position: relative;
background-color: #f8bbd0 ;
height: fit-content;

header{
    width:100%;
    background-color: red
    height:50px

}
   
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
.submit-btn {

    padding-top:20px;
    padding-left:auto;
    padding-left:auto;padding-bottom :40px;
    button {
        height:50px;
        border-radius: 10px;
        font-size:1.8rem;
        font-style:bold;
        background-color:blue;
        font-size:1.8rem;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        &:hover {
            background: green; !important;
        }
    }
}
.cancle{
    padding-top:5px;
    padding-left:50px;
    button{
        width:120px;
        height:60px;
        border-radius: 10px;
        &:hover {
            background: red; !important;
    }
}
`;

export default Supplier;
