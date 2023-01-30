import React, { useRef } from 'react'
import logo from "../assets/images/logo.svg"
import {AiOutlineBars} from "react-icons/ai";
import {GiCrossedBones} from "react-icons/gi";
import Button from './Button';
const Navbar = () => {
  const overleyMenuRef = useRef()
  function openMenyuIcon(e){
    const clickElement = e.target
    if(clickElement.classList.contains('bars-icon')){
      overleyMenuRef.current.classList.add('aktive')
    }
  }
  function closseMenyuIcon(e){
    const clickElement = e.target
    if(clickElement.classList.contains('cross-icon')){
      overleyMenuRef.current.classList.remove('aktive')
    }
  }
  return(
    <>

    <div className='overlay-menu' ref={overleyMenuRef}>
      <GiCrossedBones className='cross-icon' onClick={closseMenyuIcon} />
      <div className='nav-links'>
<a href='#'>Home</a>
<a href='#'>About</a>
<a href='#'>Blog</a>
<a href='#'>Service</a>
<a href='#'>Contact</a>

      </div>
      
    </div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand famous" href="#"><img src={logo} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
      <AiOutlineBars className='bars-icon' onClick={openMenyuIcon} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link  text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="#">About</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contact</a>
        </li>

      </ul>
       
       <Button buttonValue ="Sign In" />
    </div>
  </div>
</nav>
</>
  )
 
}
export default Navbar