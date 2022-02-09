import React from 'react'
import {Navbar} from"react-bootstrap"
import {Container} from 'react-bootstrap';
import {Nav} from'react-bootstrap'
import {Link} from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
// import './App.css';


export default function Header() {
 
  window.addEventListener("scroll", (e) => {
    let a = window.scrollY
    if (a > 300) {
      document.querySelector(".toparoww").style.display = "none"
    } else {
      document.querySelector(".toparoww").style.display = "block"
    }
  
  })

  
  return (
    <>

      <div className='container-fluid  toparoww'>    
         <Navbar className='fixed-top' bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home"><img src={require('../assets/images/loginicon.png')} className="img-responsive" alt="logo"  style={{width:"100%", height: "52px",maxWidth:"100px"}}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto justify-content-center  topnev" >
     <Nav.Link   className="text-white active" as={Link}  to="/home" >Home</Nav.Link>
        <Nav.Link className="text-white active" as={Link} to="/about" >About</Nav.Link>
        <Nav.Link  className="text-white active" as={Link} to="/blog"  >Blog</Nav.Link>
        <Nav.Link  className="text-white active" as={Link} to="/contact" >Contact</Nav.Link>
        <Nav.Link  className='active headbuton text-white'  as={Link} to="/login" >Login/Register</Nav.Link>
        {/* <Nav.Link activeClassName="active" className='active' as={Link} to="/register" ><button className="text-white headbuton ">Register</button></Nav.Link> */}

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    </>
  )
}

 