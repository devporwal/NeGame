import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import { Form } from 'react-bootstrap'



export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");

    

    let handleSubmit = async (e) => {
        console.log(name, email, mobileNumber, message)
      
        var myHeaders = new Headers();
        myHeaders.append("APPKEY", "Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy");
        
        var formdata = new FormData();
        formdata.append("name", name);
        formdata.append("email", email );
        formdata.append("contact_no", mobileNumber );
        formdata.append("message", message );
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("https://ne-games.com/testadmin/api/enquerywebsite", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
          console.log(handleSubmit)
      };

    return ( 
    <>
    <Header/>
     <br/><br/><br/>
     <div className="bannerbox">
     <img src={require('../assets/images/contactus.jpg')} className="d-block w-100" alt="..."/>
     </div>
     <div className="contactext">
         <h1 className="text-white"><b>Contact Us</b></h1>
     </div>

     <div className="container-fluid">
         <div className="row">
             <div className="col-md-8">
             <div className="card p-3 mt-4">
                 <h2 style={{borderLeft:' 5px solid rgb(19, 122, 181)', paddingLeft:'10px'}}>Our Office Address</h2>
                 <br/>
<div className="row">
    <div className="col-md-4">
<h5 style={{borderLeft:' 5px solid rgb(19, 122, 181)', paddingLeft:'10px'}} >INDIA</h5>
<p>
D-100, Sector-63,<br/>
Noida, Uttar Pradesh,<br/>
India.
</p>
<p><i className="fas fa-mobile-alt"></i> +91-120 426-3501/03/04</p>
    </div>
    <div className="col-md-4">
        <h5 style={{borderLeft:' 5px solid rgb(19, 122, 181)', paddingLeft:'10px'}}>AUSTRALIA</h5>
        <p>l2/171 Hawkesbury Rd,<br/>
Westmead NSW 2145,<br/>
Australia</p>
<p><i className="fas fa-mobile-alt"></i> +61-(3) 9005-6699</p>
    </div>
    <div className="col-md-4">
        <h5 style={{borderLeft:' 5px solid rgb(19, 122, 181)', paddingLeft:'10px'}}>USA</h5>
        <p>
        301, Oxford ValleyRD STE 303B,<br/>
Yardley, PA-19067,<br/>
USA
        </p>
        <p><i className="fas fa-mobile-alt"></i> +1-(203) 297-8574</p>
    </div>
</div>




            </div>
          
{/* <div id="map-container-google-1" className="z-depth-1-half map-container" style={{height: "500px"}}>
  <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" style={{border:"0" }}allowfullscreen= {true}></iframe>
</div> */}


         
             </div>
             <div className="col-md-4">
                 <div className="card p-3 mt-4">
<Form  >
    <div className='form-group'>
    <label>Name</label>
    <input type="text" placeholder='Eg.jhon' className='form-control' 
     value={name}
     onChange={(e) => setName(e.target.value)}
    
    
    />
    </div>
    <div className='form-group mt-3'>
    <label>Email</label>
    <input type="text" placeholder='eg.someone@example.com' className="form-control"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    </div>
    <div className="form-group mt-3">
        <label>Phone No</label>
        <input type='text' placeholder='+9198xxxxxx' className='form-control'
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        
        />
    </div>
    <div className="form-group mt-3">
        <label>Message</label>
        <textarea className='p-2 textare'  rows='3' placeholder='Enter your Message'  onChange={(e) => setMessage(e.target.value)} >
      
        </textarea>
    </div>
    <div className='test_btn'  onClick={handleSubmit}>SUBMIT</div>
</Form>
                 </div>

             </div>
         </div>
     </div>



     <br/>
           
       <Footer/>
        </>
    )
}
