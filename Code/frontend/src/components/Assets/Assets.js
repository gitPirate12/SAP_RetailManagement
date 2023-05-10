import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import ItemViwe from '../ItemViwe/ItemViwe';
import AssetForm from './AssetForm';

function Assets() {
    const {assets, getAssets, deleteAssets, totalAssets,editItem} = useGlobalContext()

    useEffect(() =>{
        getAssets()
    }, [])
    return (
        <AssetStyled>
            <InnerLayout>
                <h1>Assets</h1><br></br>
                <div className="asset-content">
                    <div className="form-container">
                        <AssetForm />
                            <h2 className="total-asset">Total Asset: <span>Rs.{totalAssets()}</span></h2>
                        
                        <br></br><br></br><br></br>
                        <hr className='hr'/>
{/* /*Asset list*/ }
                        <h1>List of Assets</h1><br></br>
                        <div className="asset-content">
                            <div className="assets">
                                {assets.map((assets) => {
                                    const {_id, itemCode, name, date, amount, type, ratio,years} = assets;
                                    console.log(assets)
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
                                        deleteItem={deleteAssets}
                                    />
                                })}                    
                            </div>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </AssetStyled>
    )
}

const AssetStyled = styled.div`
display: flex;
overflow: auto;
.total-asset{
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
.asset-content{
    display: flex;
    gap: 2rem;
    .assets{
        flex: 1;
    }
}
.hr { 
    border-color: black; 
}
`;

export default Assets;