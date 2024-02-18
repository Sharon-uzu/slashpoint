import React from 'react';
import Header2 from '../Components/Header2';
import '../App.css';
import SideBar from '../Components/SideBar';
import { FaCubes } from "react-icons/fa6";

import img1 from '../Assets/Attendance.png'
import img2 from '../Assets/School.png'
import img3 from '../Assets/Test Results.png'
import img4 from '../Assets/Settings.png'
import s from '../Assets/Search (1).png'
import { FaUpload } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";



// import Side from '../Components/Side';





const DashBoard = () => {


  const Cards= [

    {
        image: img1,
        text:'Products',
        icon: FaCubes,
        // background:'#6861ce'
    },

    {
      image: img2,
      text:'Upload',
      icon:FaUpload,
      // background:'#31ce36'
    },
      
    {
      image: img3,
      text:'Customers',
      icon:FaUsers,
      // background:'#6861ce'

    },

    

    {
      image: img4,
      text:'Settings',
      icon: IoIosSettings,
      // background:'#f25961'

    }
    
];




  return (
    <div className='dashb'>
       

        <section className='dashboard'>

          <SideBar/>

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

export default DashBoard