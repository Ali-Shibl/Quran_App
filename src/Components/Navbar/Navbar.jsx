// Navbar.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/quran.webp';
import './Navbar.css';
import DarkMood from '../DarkMood/DarkMood';

export default function Navbar() {
  const [showMenu, setshowMenu] = useState(false)

function handelMenu() {
  setshowMenu(!showMenu)
}

function sidbarClick(e) {
  e.stopPropagation()
}




  return (
    <>
    <header>

    
      <nav className="navbar navbar-expand-lg d-none d-lg-block py-3">
        <div className="container">
          
          <ul className="navbar-nav ">
          <li className="nav-item ">
              <NavLink className="nav-link p-0 mx-2" to={'/home'}>الصفحه الرئيسيه</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link p-0 mx-2" to={'/suwar'}> القران الكريم</NavLink>
           
            </li>
          
            <li className="nav-item">
              <NavLink className="nav-link p-0 mx-2" to={'/radio'}> الراديو</NavLink>
           
            </li>


            <li className="nav-item">
              <NavLink className="nav-link p-0 mx-2" to={'/shiukh'}> الشيوخ</NavLink>
           
            </li>
            <li className="nav-item">
              <NavLink className="nav-link p-0 mx-2" to={'/azkar'}> اذكار</NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink className="nav-link p-0 mx-2" to={'/prayertimes'}> اوقات الصلاه</NavLink>
            </li>
            
           
            
            <DarkMood/>
          </ul>
          <Link to="" >
            <img src={logo} alt="logoPage" className='logo rounded-circle'  loading="lazy"/>
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}

      <nav className='d-block d-lg-none nav-mob'>
        <div className="container">
        <div className='d-flex justify-content-between align-items-center py-3 '>
        
          

          <div className='menu curser d-flex flex-column justify-content-between' onClick={handelMenu}>
            <span className={`${showMenu?'one':''}`}></span>
            <span className={`${showMenu?'two':''}`}></span>
            <span className={`${showMenu?'three':''}`}></span>
          </div>

          <Link to="">
            <img src={logo} alt="logoPage" className='logo rounded-circle'  loading="lazy"/>
          </Link>

        </div>
        


        <div className={`${showMenu?"position-fixed ":''} tabka top-0 start-0 end-0 bottom-0  `} onClick={handelMenu}>
            
      <ul className={`${showMenu?"showMenu ":''} `} onClick={sidbarClick}>
      <DarkMood/>
        <li className="nav-item mt-4">
          <NavLink className="nav-link" to={'/home'}>الصفحه الرئيسيه</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link my-2" to={'/suwar'}>القران الكريم</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link my-2" to={'/radio'}>الراديو</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link my-2" to={'/shiukh'}>الشيوخ</NavLink>
        </li>
       <li className="nav-item">
          <NavLink className="nav-link my-2" to={'/azkar'}>اذكار</NavLink>
        </li>
     
       <li className="nav-item">
          <NavLink className="nav-link my-2" to={'/prayertimes'}>اوقات الصلاه</NavLink>
        </li>
      
       
        
      </ul>
      

        </div>

        </div>
      </nav>
</header>

     

    </>
  );
}

