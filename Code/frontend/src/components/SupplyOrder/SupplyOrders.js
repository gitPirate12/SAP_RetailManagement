import SupplyOrderMain from "./SupplyOrderMain";
import SupplyOrderStore from "./SupplyOrderStore";
import styled from "styled-components";
import { dateFormat } from "../Sidebar/dateformat";
import {
    percent,
    truck,
    item,
    amount,
    orderID,
    SID,
    price,
    date,
    edit,
    deletebutton,
} from "../../utils/Icons";
export default function SupplyOrders() {
    const store = SupplyOrderStore();
    return (
        <SuppplierOrderlistStyled>
            <div className="content">
                <div className="inner-content">
                    <div>
                        {store.SupplyOrderData &&
                            store.SupplyOrderData.map((SupplyOrder) => {
                                return (
                                    <div className="text" key={SupplyOrder._id}>
                                        <p>
                                            {orderID} {SupplyOrder.orderID}
                                        </p>
                                        <p>
                                            {" "}
                                            {SID}
                                            {SupplyOrder.SID}
                                        </p>
                                        <p>
                                            {" "}
                                            {truck}
                                            {SupplyOrder.supplierName}
                                        </p>
                                        <p>
                                            {item}
                                            {SupplyOrder.item}
                                        </p>
                                        <p>
                                            {amount}
                                            {SupplyOrder.amount}
                                        </p>
                                        <p>
                                            {price}
                                            {SupplyOrder.price}
                                        </p>
                                        <p>
                                            {percent}
                                            {SupplyOrder.discount}
                                        </p>
                                        <p>
                                            {date}
                                            {dateFormat(
                                                SupplyOrder.deliverydate
                                            )}
                                        </p>

                                        <p>
                                            <button
                                                className="update"
                                                onClick={() =>
                                                    store.toggleUpdate(
                                                        SupplyOrder
                                                    )
                                                }
                                            >
                                                {edit}
                                            </button>
                                        </p>
                                        <p>
                                            <button
                                                className="delete"
                                                onClick={() =>
                                                    store.deleteSupplyOrder(
                                                        SupplyOrder._id
                                                    )
                                                }
                                            >
                                                {deletebutton}
                                            </button>
                                        </p>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </SuppplierOrderlistStyled>
    );
}
const SuppplierOrderlistStyled = styled.div`
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding-top: 20px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    width: 100%;
    color: #222260;
    .icon {
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #ffffff;
        i {
            font-size: 2.6rem;
        }
    }
    .delete {
        background: red;
    }
    .update {
        background: green;
    }
    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        h5 {
            font-size: 1rem;
            padding-left: 2rem;
            position: relative;
            &::before {
                content: "";
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 50%;
            }
        }
        .inner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text {
                display: flex;
                align-items: center;
                gap: 1.5rem;
                font-size: 1rem;
                width: fit-content;

                p {
                    text-align: left;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                    min-width: 50px;
                    word-wrap: break-word;
                }
            }
        }
    }
`;
