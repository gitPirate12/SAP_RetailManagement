import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SupplyOrderStore from "./SupplyOrderStore";
import SupplyOrders from "./SupplyOrders";
import SupplyOrderUpdateForm from "./SupplyOrderUpdateForm";
import SupplyOrderForm from "./SupplyOrderForm";
import styled from "styled-components";
import SideBar from "../Sidebar/Sidebar";
import { plus } from "../../utils/Icons";
function SupplyOrder() {
    const store = SupplyOrderStore();
    const [ButtonStatus, setButtonStatus] = useState(false);

    //use effect
    useEffect(() => {
        store.getSupplyOrders();
    }, []);

    return (
        <div className="SupplyOrderList">
            <SupplyOrderStyle>
                <div className="income-content">
                    <SideBar></SideBar>

                    <div>
                        {ButtonStatus && <SupplyOrderForm />}
                        <div className="submit-btn">
                            {!ButtonStatus &&
                                !store.updateSupplyOrderForm._id && (
                                    <button
                                        className="layer1"
                                        onClick={setButtonStatus}
                                    >
                                        {plus}Create Supply Order
                                    </button>
                                )}
                        </div>
                        <SupplyOrderUpdateForm />

                        {!ButtonStatus && <SupplyOrders />}

                        <div className="cancle">
                            {" "}
                            {ButtonStatus && (
                                <button onClick={() => setButtonStatus(false)}>
                                    Cancle
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </SupplyOrderStyle>
        </div>
    );
}
const SupplyOrderStyle = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #f8bbd0 ;
    width: 100%;
    height: fit-content;


    .income-content {
        display: flex;
        gap: 2rem;
        .incomes {
            flex: 1;
        }
    }
    .layer1 {
        width: 50%;
        align-self: center;
    }
    .submit-btn {
        padding-top:20px;
        padding-left:auto;
        padding-left:auto;padding-bottom :40px;
        button {
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

export default SupplyOrder;
