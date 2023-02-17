import React, { useRef } from 'react'
import logo from "../assets/images/logo.svg"
import {AiOutlineBars} from "react-icons/ai";
import {RxCross1} from "react-icons/rx";
import Button from './Button';
import { Link } from 'react-router-dom';
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
    <div className="navbar-toggler " type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"   onClick={closseMenyuIcon} >
    <RxCross1 className='cross-icon' />
    </div>
     
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='blog'>Blog</Link>
        <Link to='service'>Service</Link>
        <Link to='contact'>Contact</Link>
 </div>
      
    </div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand famous" to="#"><img src={logo} /></a>
    <div className="navbar-toggler " type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  onClick={openMenyuIcon} >
      <AiOutlineBars className='bars-icon' />
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link  text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="about">About</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link text-white" to="Service">Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="contact">Contact</Link>
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