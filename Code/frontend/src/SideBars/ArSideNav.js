import React from 'react'
import { ArSideBarData } from './ArSideBarData'
import "../styles/Sidebar.css"
function ArSideNav() {
  return (
    <div className='Sidebar'   height="100%" width="250px" color='#FFFFFF'>
        <ul className='SidebarList' height="100%" width="100%">
            <h2>SAP Super</h2>
            <p>Retail Management System</p>
            <p></p>          
            {ArSideBarData.map((val, key) => {
                return(                  
                <li key={key} className='row'  onClick={()=>(window.location.pathname = val.link)}>
                    {""}
                    <div className='icon'>{val.icon}</div>{""}
                    <div className='title'>{val.title}</div>
                </li>
            )
            })}      
        </ul>
    </div>
  )
}



export default ArSideNav
