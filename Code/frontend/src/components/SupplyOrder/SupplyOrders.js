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
                                            {price} {SupplyOrder.price}
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
    .content {
        display: flex;
        justify-content: center;
        height: 100%;
        margin-left: 250px;
    }

    .inner-content {
        width: 90%;
        margin: 0 auto;
        max-width: 1200px;

        .text {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-gap: 1rem;
            margin-bottom: 1rem;
            align-items: center;
            background-color: #f5f5f5;
            padding: 1rem;
            border-radius: 20px;

            p {
                display: flex;
                align-items: center;
                margin: 0;

                svg {
                    margin-right: 0.5rem;
                }
            }

            button {
                padding: 0.5rem;
                background-color: #fff;
                border: 1px solid #ccc;
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.3s ease;

                svg {
                    margin-right: 0.5rem;
                }

                &.update {
                    color: #007bff;
                    border-color: #007bff;
                }

                &.delete {
                    color: #dc3545;
                    border-color: #dc3545;
                }

                &:hover {
                    background-color: #eee;
                }
            }
        }
    }
`;
