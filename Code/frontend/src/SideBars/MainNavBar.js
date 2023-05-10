import React from "react";
import "../styles/GlobalStyles";
import styled from "styled-components";
function MainNavBar() {
    return (
        <MainNavStyled>
            <div className="leftside">
                <a href="/home">
                    <h1>SAP Retail</h1>
                </a>
                <a href="/">Accounting and Finance</a>
                <a>Customer Relationship</a>
                <a href="/supplier">Supply </a>
                <a>Sales </a>
                <a>Human Resources </a>
                <a href="/DashMarketing">Marketing</a>
                <a>Inventory</a>
                <a>Assets & Expenses</a>
            </div>
        </MainNavStyled>
    );
}

const MainNavStyled = styled.div`
    background-color: #0b2447;
    width: 100%;
    height: 80px;

    display: flex;
    .leftside {
        flex: 50%;
        display: flex;
        justify-content: left;
        align-items: center;
    }
    .links {
        max-height: 80px;
        border: white;
        border-radius: 1%;
    }
    a {
        text-decoration: none;
        color: white;
        font-size: 20px;
        margin-left: 15px;
    }
`;

export default MainNavBar;
