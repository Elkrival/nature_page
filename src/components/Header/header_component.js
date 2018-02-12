import React from 'react'
import '../../css/header.style.css'
import logo from '../../img/logo-white.png'
/*

Implementing BEM system
The block is the header
Then the element is everying inside this block
we use __ to separate them

the className heading is it's own block because it displays itself as a different version by using modifiers

heading-primary is block
heading-primary--main we use two dashes to annotate the different modifiers
heading-primary--sub
*/
const Header = () =>{
  return(
   <header className="header">
     <div>
      <img src={ logo } alt="Logo" className="header__logo"/>
     </div>
    <div className="header__text-box">
    <h1 className="heading-primary">
     <span className="heading-primary--main">Outdoors </span>
     <span className="heading-primary--sub">is where life happens</span>
    </h1>
     <a href="#here" className="btn btn--white btn--animated">Discover our tours</a>
    </div>

   </header>
 )
}

export default Header;
