import React from 'react'
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navheader = props => {
  let links;
  if(!props.isAuth){
    links=(
      <Nav>
      <Nav.Link href="login" id="sign-in">
        Login</Nav.Link>
      
    </Nav>
    )
  } else{
    links=(
      <Nav>
      <Nav.Link  href="profile" id="sign-up">
        Profile
      </Nav.Link>
    </Nav>)


  }



    return (
  <Navbar  className={(props.loc==="/calendrier") ||(props.loc==="/archive")  ? "bg-greenn": "bg-white" } collapseOnSelect expand="lg" >
  <a href="/" className="navbar-brand"> <img src={props.imgsrc} alt="Logo"  className="d-inline-block align-top"/></a>
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/biblio" id="links">Médiathèque</Nav.Link>
      <Nav.Link href="/calendrier"id="links">Agenda</Nav.Link>
      <Nav.Link href="/archive"id="links">Archives</Nav.Link>
      <Nav.Link href="/blog"id="links">Formations</Nav.Link>
    </Nav>
   {links}
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navheader
