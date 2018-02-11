import React from 'react'
import '../../css/header.style.css'
import logo from '../../img/logo-white.png'

const Header = () =>{
  return(
   <header className="header">
     <div>
      <img src={ logo } alt="Logo" className="logo"/>
     </div>
    <div className="text-box">
    <h1 className="heading-primary">
     <span className="heading-primary-main">Outdoors </span>
     <span className="heading-primary-sub">is where life happens</span>
    </h1>
     <a href="#" className="btn btn-white btn-animated">Discover our tours</a>
    </div>

   </header>
 )
}

export default Header;
