import React from "react";
import SupplyOrderStore from "./SupplyOrderStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

export default function SupplyOrderForm() {
    const store = SupplyOrderStore();

    if (store.updateSupplyOrderForm._id) return <></>;
    return (
        <FormStyled>
            <div className="form">
                <h2>Supply Order </h2>
                <form onSubmit={store.createSupplyOrder}>
                    <div className="input-control">
                        <h3>SupplyOrder ID</h3>
                        <input
                            type="text"
                            onChange={store.updateCreateSupplyOrder}
                            value={store.createSupplyOrderForm.orderID}
                            name="orderID"
                        ></input>
                    </div>
                    <div className="input-control">
                        <h3>Supplier ID</h3>
                        <input
                            type="text"
                            onChange={store.updateCreateSupplyOrder}
                            value={store.createSupplyOrderForm.SID}
                            name="SID"
                        ></input>
                    </div>
                    <div className="input-control">
                        <h3>Supplier Name</h3>
                        <input
                            type="text"
                            onChange={store.updateCreateSupplyOrder}
                            value={store.createSupplyOrderForm.supplierName}
                            name="supplierName"
                        />
                    </div>
                    <div className="input-control">
                        <h3>item</h3>
                        <input
                            type="text"
                            onChange={store.updateCreateSupplyOrder}
                            value={store.createSupplyOrderForm.item}
                            name="item"
                        />
                    </div>
                    <div className="input-control">
                        <div>
                            <h3>Amount</h3>
                            <input
                                type="text"
                                onChange={store.updateCreateSupplyOrder}
                                value={store.createSupplyOrderForm.amount}
                                name="amount"
                            />
                        </div>
                        <div className="input-control">
                            <h3>Price</h3>
                            <input
                                type="text"
                                onChange={store.updateCreateSupplyOrder}
                                value={store.createSupplyOrderForm.price}
                                name="price"
                            />
                        </div>
                        <div className="input-control">
                            <h3>Discount</h3>
                            <input
                                type="text"
                                onChange={store.updateCreateSupplyOrder}
                                value={store.createSupplyOrderForm.discount}
                                name="discount"
                            />
                        </div>
                        <div className="input-control">
                            <h3>Delivery Date</h3>
                            <DatePicker
                                type="date"
                                name="deliverydate"
                                dateFormat="yyyy-mm-dd"
                                onChange={(date) => {
                                    let formattedDate = `${date.getFullYear()}-${
                                        date.getMonth() + 1
                                    }-${date.getDate()}`;
                                    store.updateCreateSupplyOrder({
                                        target: {
                                            name: "deliverydate",
                                            value: formattedDate,
                                        },
                                    });
                                }}
                                value={store.createSupplyOrderForm.deliverydate}
                                {...(date) => {
                                    let formattedDate = `${date.getFullYear()}-${
                                        date.getMonth() + 1
                                    }-${date.getDate()}`;
                                    store.updateCreateSupplyOrder({
                                        target: {
                                            name: "deliverydate",
                                            value: formattedDate,
                                        },
                                    });
                                }}
                            />
                        </div>
                        <div className="submit-btn">
                            <button type="submit">Create Supply Order</button>
                        </div>
                    </div>
                </form>
            </div>
        </FormStyled>
    );
}
const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .form{
        height:fit-content;
        width:500px;
        background-color: #66bb6a;
        padding-left:20px;
        border: 3px solid #ffffff;
        border-radius: 20px
    }
    h2{
font-size: 40px;
text-align: center;
    }
    h3{
        font-size: 1.4rem;
        color:white;

    }


    input,
    textarea {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        border: 2px solid #000;
        background:  #fff;
        resize: horizontal;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder {
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control {
        input {
            width: 90%;
        }
    }
    }
    .submit-btn {
        padding-top:20px;
        padding-left:auto;
        padding-right:auto;
        padding-bottom :40px;

        button {        
            border-radius: 10px;
            font-size:1.8rem;
            font-style:bold;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover {
                background: green; !important;
            }
        }
    }
`;
