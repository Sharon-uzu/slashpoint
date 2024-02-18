import React from 'react';
import Header2 from '../Components/Header2';
import '../App.css';
import { FaCubes } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import Sidebar2 from '../Components/Sidebar2';

const AdminDashboard = () => {

    const Cards= [

        {
            text:'Products',
            icon: FaCubes,
            // background:'#6861ce'
        },
    
        {
          text:'Upload',
          icon:FaUpload,
          // background:'#31ce36'
        },
          
        {
          text:'Customers',
          icon:FaUsers,
          // background:'#6861ce'
    
        },

        {
            text:'Vendors',
            icon: FaUsers,
            // background:'#f25961'
      
        },
          
    
        {
          text:'Settings',
          icon: IoIosSettings,
          // background:'#f25961'
    
        }
        
    ];

    
  return (
    <div className='dashb'>
       

    <section className='dashboard'>

      <Sidebar2/>

      <main>
      <Header2/>

      <section className='left'>
     
          {/* <div className='search'>
            <img src={s} alt="" />
            <input type="search" placeholder='Search' />
          </div> */}

          <div className='cards-container'>
          
            {Cards && Cards.map(({icon, text, background, image},index)=>{
              return(

                <div className="cardss">
                  <div className='card1'>
                  <div className='icon-card' style={{backgroundColor:background}}>
                  
                    <i className='icons'>{React.createElement(icon)}</i>

                  </div>

                  <div className='card-text'>
                    <p>{text}</p>
                  </div>
                </div>

                </div>
                

              )
            })}


          
          </div>
      </section>

      </main>
    
    </section>
</div>
  )
}

export default AdminDashboard