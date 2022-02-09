import React from 'react'
import { Navbar, Container, Nav,Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// FormControl,Button



export default function Menubar() {
    return (
        <>
            <Navbar bg="light" variant="light" className='fixed-top ' expand="lg">
  <Container fluid>
  <Navbar.Brand href="#home"><img src={require('../assets/images/loginicon.png')} className="img-responsive" alt="logo"  style={{width:"100%", height: "40px", maxWidth:"100px"}}/></Navbar.Brand>

    <div className="mainline">
    
    <div className="linediv"></div>

<h2 className="nelitetext">NE <i>Lite</i></h2>
</div>

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Form className="d-flex">
        {/* <FormControl
          type="search"
          placeholder="Search"
          className="me-2 "
          aria-label="Search"
        /> */}
        {/* <Button variant="outline-success btn-info" >Search</Button> */}
      </Form>

      <Nav
      
        className="ms-auto justify-content-center topnev pt-0 pb-0"  
      >
        

        {/* <Nav.Link  className='active'  as={Link} to="/Dashbord" ><button className=" hovcolor ">Home</button></Nav.Link>
        <Nav.Link  className='active'  as={Link} to="/Friend" ><button className=" hovcolor ">Friend</button></Nav.Link>
        <Nav.Link  className='active'  as={Link} to="/Games" ><button className=" hovcolor ">Game</button></Nav.Link> */}
        <Nav.Link  className='active'  as={Link} to="/Dashbord" ><button className=" hovcolor ">Home</button></Nav.Link>
        <Nav.Link  className='active'  as={Link} to="/Settings" ><button className=" hovcolor ">Setting</button></Nav.Link>
        <Nav.Link  className='active'  ><button className=" hovcolor " onClick={()=>{window.sessionStorage.clear();window.location.reload();  window.open("/Login", "_self")}}>Logout</button></Nav.Link>
      </Nav>
    
    </Navbar.Collapse>
  </Container>
</Navbar>


        </>
    )
}

