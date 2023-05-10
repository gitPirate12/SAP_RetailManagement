import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {totalAssets, getAssets, getLiabilities ,totalLiabilities } = useGlobalContext()

    useEffect(() => {
        getAssets()
        getLiabilities()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>Assets and Liabilities</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="assets">
                                <h2>Total Assets</h2>
                                <p>
                                    Rs. {totalAssets()}
                                </p>
                            </div>
                            <div className="liabilities">
                                <h2>Total Liabilities</h2>
                                <p>
                                    Rs. {totalLiabilities()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .assets, .liabilities{
                    grid-column: span 2;
                }
                .assets, .liabilities, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }
            }
        }
    }
`;

export default Dashboard;