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
                    <table>
                        <thead>
                            <tr>
                                <th>{orderID}</th>
                                <th>{SID}</th>
                                <th>{truck}</th>
                                <th>{item}</th>
                                <th>{amount}</th>
                                <th>{price}</th>
                                <th>{percent}</th>
                                <th>{date}</th>
                                <th>{edit}</th>
                                <th>{deletebutton}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {store.SupplyOrderData &&
                                store.SupplyOrderData.map((SupplyOrder) => {
                                    return (
                                        <tr key={SupplyOrder._id}>
                                            <td>{SupplyOrder.orderID}</td>
                                            <td>{SupplyOrder.SID}</td>
                                            <td>{SupplyOrder.supplierName}</td>
                                            <td>{SupplyOrder.item}</td>
                                            <td>{SupplyOrder.amount}</td>
                                            <td>{SupplyOrder.price}</td>
                                            <td>{SupplyOrder.discount}</td>
                                            <td>
                                                {dateFormat(
                                                    SupplyOrder.deliverydate
                                                )}
                                            </td>
                                            <td>
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
                                            </td>
                                            <td>
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
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </SuppplierOrderlistStyled>
    );
}

const SuppplierOrderlistStyled = styled.div`
    .content {
        display: float;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 50px auto;

        max-width: 800px;
        padding-left: 50px;
        margin-left: 200px;
    }
    .table {
        border-collapse: collapse;
    }

    th,
    td {
        border: 1px solid black;
        padding: 8px;
    }

    .inner-content {
        display: flex;
        flex-direction: column;
        width: 1000px;
        background-color: #fff;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        margin-left: 20px;
    }

    .text {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
    }

    p {
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
        color: #333;
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
    }

    button:hover {
        background-color: #005f79;
    }

    .update {
        margin-right: 10px;
    }
`;
