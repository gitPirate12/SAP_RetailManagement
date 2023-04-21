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
                    <div className="submit-btn">
                        {!ButtonStatus && !store.updateSupplyOrderForm._id && (
                            <button
                                className="layer1"
                                onClick={setButtonStatus}
                            >
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
                </div>
            </SupplyOrderStyle>
        </div>
    );
}
const SupplyOrderStyle = styled.div`
    display: flex;
    flex-direction: row;

    .main-content {
        margin-left: 250px;
        margin-top: 30px;
        width: calc(100% - 250px);
        .submit-btn {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-bottom: 20px;
        }
        .submit-btn {
            margin-left: 250px;
        }

        .create-btn {
            margin-bottom: 20px;
            margin-bottom: 500px button {
                background-color: #2ecc71;
                color: white;
                font-size: 16px;
                padding: 10px;
                border: none;
                border-radius: 5px;
                cursor: pointer;

                svg {
                    margin-right: 10px;
                }
            }
        }

        .cancel-btn {
            margin-top: 20px;

            button {
                background-color: #e74c3c;
                color: white;
                font-size: 16px;
                padding: 10px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
        }
    }
`;

export default SupplyOrder;
