import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Register() {
    return (
        <>
        <Header/>
        <div className='container-fluid'>

<div className='formbox1'>

  <div className='formboxs p-5'>
<h2 className="text-center">Get Register</h2>
<form className='centerbox'>
<input type="text" name="name" placeholder='Full Name'/><br/>
<input type="text" name="name" placeholder='User Name'/><br/>
<input type="text" name="name" placeholder='Email Address'/><br/>
<input type="number" name="number" placeholder='Mobile (Optional)'/><br/>
<input type="date" name="date" placeholder='DOB'/><br/>
<input type="number" name="number" placeholder='Refearral code'/><br/>
<input type="password" name="password" placeholder='Password'/><br/>
<input type="password" name="password" placeholder='Confirm Password'/><br/>


<div className='centered'>
<Button className='  btnbox text-center mb-3'>Sign Up</Button>
<br/>
<p><Link to="/login">Click here to Login</Link></p>


{/* <hr/>
<p className='logintext'>or Login using</p>
<br/> */}
{/* <div className="flex-container">
<div className="iconbox">
<i className="fab fa-facebook-f text-white"></i>
</div>
<div className="iconbox">
<i className="fab fa-google text-white"></i>

</div>
</div>
<br/>
<p>By Continuing you agree to the <br/><Link to='/'>Terms of Services</Link> and<Link to='/'> Privacy Policy</Link></p> */}
</div>
</form>

  </div>

</div>

</div>
<Footer/>
        </>
    )
}
