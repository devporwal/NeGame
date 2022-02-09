import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Forgot() {
    return (
        <>
        <Header/>
        <div className='container-fluid'>

<div className='formbox2'>

  <div className='formboxs p-5'>
<h2 className="text-center">Get Forgot Password</h2><br/>
<form className='centerbox'>
<input type="text" name="name" placeholder='Email' /><br/><br/>
<div className='centered'>
<Button className='  btnbox text-center mb-3'>Submit</Button>
<br/><br/>
<p><Link to="/login">Click here to Login</Link></p>

</div>
</form>

  </div>

</div>

</div>
<Footer/>
        </>
    )
}
