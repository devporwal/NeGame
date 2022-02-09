
import React from 'react'
// import { Link } from 'react-router-dom';


 function Footer() {
    return (
        <>
<div className='bg-dark'>

<div className='container-fluid' style={{paddingTop:"20px"}} >
<div className='row'>
<div className='col-md-4'>
<h3 className='text-white'>LOCATION</h3>
<p className='text-white text-left'>India<br/>
D-100, Sector-63, Noida- 201301,<br/>
Uttar Pradesh,<br/>
India</p>
</div>
<div className='col-md-4'>
<h3 className='text-white' >CONTACT US</h3>
<p className='text-white'><i className="fas fa-phone-alt"></i> &nbsp;<b>Phone</b>&nbsp;: &nbsp; +91-120 426-3501/03/04</p>
<br/>
<p className='text-white'><i className="fas fa-envelope"></i> &nbsp;<b>E-Mail</b>&nbsp;: &nbsp; info@commediait.com</p>
</div>
<div className='col-md-4'>
<h3 className='text-white'>CONNECT WITH US</h3>
<p className='text-white'>Privacy Policy Terms | Conditions Cancellation | <br/> Refund Policy</p>

<br/>
                 <a href="https://www.facebook.com/shrivcommediait" target= "blank" > <div className="social-icon facebook">
                    <i className="fab fa-facebook-f" ></i>   
                  </div></a>
                  &nbsp;&nbsp;
                <div className="social-icon twitter">
                    <i className="fab fa-twitter"></i> 
                  </div>
                  &nbsp;&nbsp;
                 <div className="social-icon linkedin">
                    <i className="fab fa-linkedin-in"></i>  
                  </div>
                  &nbsp;&nbsp;
                  <div className="social-icon instagram">
                    <i className="fab fa-instagram"></i>  
                  </div>
                  &nbsp;&nbsp;
                  <div className="social-icon pinterest">
                    <i className="fab fa-pinterest"></i>  
                  </div>
                  &nbsp;&nbsp;
                  <div className="social-icon youtube">
                    <i className="fab fa-youtube"></i>  
                  </div>
               

</div>

</div>



    </div>
    <div className='' style={{backgroundColor:"#137ab5", padding:"10px"}}>
    <p className='text-center text-white'>An ISO 9001 : 2015 Certified. Designed and Developed by Shriv ComMedia Solutions Pvt. Ltd. - Software Development Company in India. All Rights Reserved</p>


  
</div>
</div>


            
        </>
    )
}
export default Footer;
