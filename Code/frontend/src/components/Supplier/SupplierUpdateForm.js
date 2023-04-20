import React from "react";
import SupplierStore from "./SupplierStore";
import styled from "styled-components";

export default function SupplierUpdateForm() {
    const store = SupplierStore();
    if (!store.updateSupplierForm._id) return <></>;
    return (
        <FormStyled>
            <div className="form">
                <h2>Update supplier</h2>
                <form onSubmit={store.updateSupplier}>
                    <div className="input-control">
                        <h3>Supplier ID</h3>
                        <input
                            type="text"
                            onChange={store.handleUpdateFieldChange}
                            value={store.updateSupplierForm.SID}
                            name="SID"
                        ></input>
                    </div>
                    <div className="input-control">
                        <h3>Supplier Name</h3>
                        <input
                            type="text"
                            onChange={store.handleUpdateFieldChange}
                            value={store.updateSupplierForm.supplierName}
                            name="supplierName"
                        />
                    </div>
                    <div className="input-control">
                        <h3>Contact Number</h3>
                        <input
                            type="text"
                            onChange={store.handleUpdateFieldChange}
                            value={store.updateSupplierForm.phone}
                            name="phone"
                        />
                    </div>

                    <div className="input-control">
                        <h3>item type</h3>
                        <input
                            type="text"
                            onChange={store.handleUpdateFieldChange}
                            value={store.updateSupplierForm.itemType}
                            name="itemType"
                        />
                    </div>
                    <div className="input-control">
                        <h3>Payment Details</h3>
                        <input
                            type="text"
                            onChange={store.handleUpdateFieldChange}
                            value={store.updateSupplierForm.paymentDetails}
                            name="paymentDetails"
                        />
                    </div>
                    <div className="submit-btn">
                        <button type="submit">Update Supplier</button>
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
    background-color:#ba68c8;
    padding-left:20px;
    border: 3px solid #ffffff;
    border-radius: 20px;
    margin-bottom:30px;
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
    padding-left:auto;padding-bottom :40px;
    button {
        font-size:1.8rem;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        &:hover {
            background: green; !important;
        }
    }
}
`;
