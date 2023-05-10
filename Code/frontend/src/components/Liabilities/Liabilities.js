import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import ItemViwe from '../ItemViwe/ItemViwe';
import LiabilityForm from './LiabilityForm';

function Liabilities() {
    const {liabilities, getLiabilities, deleteLiabilty, totalLiabilities, editItem} = useGlobalContext()

    useEffect(() =>{
        getLiabilities()
    }, [])
    return (
        <LiabilityStyled>
            <InnerLayout>
                <h1>Liabilities</h1><br></br>
               
                <div className="liability-content">
                    <div className="form-container">
                        <LiabilityForm />
                
                        <div className="liability">
                            <h2 className="total-liability">Total Liabilities: <span>Rs.{totalLiabilities()}</span></h2>
                        
                        <br></br><br></br><br></br>
                        <hr className='hr'/>
{/* /*Liability list*/ }

                        <h1>List of Liabilities</h1><br></br>

                            <div className="liability">
                                {liabilities.map((liability) => {
                                    const {_id, itemCode, name, date, amount, type, ratio,years} = liability;
                                    console.log(liability)
                                    return <ItemViwe
                                        key={_id}
                                        id={_id} 
                                        itemCode={itemCode} 
                                        name={name} 
                                        date={date}
                                        amount={amount}  
                                        type={type}
                                        ratio={ratio} 
                                        years={years} 
                                        indicatorColor="var(--color-green)"
                                        editItem={editItem}
                                        deleteItem={deleteLiabilty}
                                    />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                
            </InnerLayout>
        </LiabilityStyled>
    )
}

const LiabilityStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-liability{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .liability-content{
        display: flex;
        gap: 2rem;
        .liability{
            flex: 1;
        }
    }
    .hr { 
        border-color: black; 
    }
`;

export default Liabilities;