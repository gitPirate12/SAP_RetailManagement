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
        <a href="/crm-dashboard-area">Customer Relationship</a>
        <a>Supply </a>
        <a>Sales </a>
        <a>Human Resources </a>
        <a>Marketing</a>
        <a>Inventory</a>
        <a>Assets & Expenses</a>
        <a href="/crm-customers-area">Customers</a>
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
