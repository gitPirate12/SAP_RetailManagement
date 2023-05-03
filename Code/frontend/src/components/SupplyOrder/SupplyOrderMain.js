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
                </div>
                {ButtonStatus && <SupplyOrderForm />}
                <div className="submit-btn">
                    {!ButtonStatus && !store.updateSupplyOrderForm._id && (
                        <button className="layer1" onClick={setButtonStatus}>
                            {plus} Create Supplier
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
            </SupplyOrderStyle>
        </div>
    );
}
const SupplyOrderStyle = styled.div`
    .supplyOrderList {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        margin: 50px auto;
        max-width: 1200px;
        padding: 0 20px;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }
    }

    .submit-btn {
        display: flex;
        align-items: center;

        justify-content: flex-end;
        margin-bottom: 20px;
    }

    .cancle {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 20px;
        background-color: #008cba;
    }

    button {
        background-color: #008cba;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.2s ease-in-out;

        &:hover {
            background-color: #005f79;
        }

        &.layer1 {
            background-color: #fff;
            color: #008cba;
            border: 1px solid #008cba;

            &:hover {
                background-color: #008cba;
                color: #fff;
            }
        }
    }
`;

export default SupplyOrder;
