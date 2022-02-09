import React, {  useState } from 'react'
// import Footer from './component/Footer';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
// import * as Yup from "yup";

// const Schema = Yup.object().shape({
//   password: Yup.string().required("This field is required")
// })


export default function Login(props) {
 
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [color,setcolor] = useState("coral")


  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);

  };
  
  
  async function userName() {

 
   props.loginhandler(name,password)
   var myHeaders = new Headers();
   myHeaders.append(
   'APPKEY',
   'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
   );
   const url2 = "https://ne-games.com/ne_lite/api/user/profile?id="+window.sessionStorage.getItem("id");
   const url1 = "https://ne-games.com/ne_lite/api/start/match/computer?user_id="+window.sessionStorage.getItem("id")+"&level=1"
   const dataFinder = new Promise(async (resolve,reject)=>{
       await fetch(url1,{
           headers: myHeaders
       }).then((response) => response.json())
       .then((response) => {
           resolve(response)

       }).catch((err)=>{
           reject(err)
       })
   })
   dataFinder.then(async (resp)=>{
       console.log(resp)
       if(resp.status === 200 && resp.message === "Success"){
          
           window.sessionStorage.setItem("match_id",resp.user1.match_id);
           console.log(resp)
           await fetch(url2,{
               headers: myHeaders
           }).then((response) => response.json())
           .then((response) => { 
               if(response.status === 200){
                 console.log(response)
                   window.sessionStorage.setItem("image", response.image_path+"/"+response.data.image);
                   window.sessionStorage.setItem("hints",response.hints)
                   window.sessionStorage.setItem("points",response.currentMonth_total_points)
                  
                   
               }else{
                   window.sessionStorage.setItem("image", require('../assets/images/profilephoto.png'));
                  
               }
             
             
           }).catch((err)=>{
              
           })
          
       }else{
           alert("Data not found")
       }
   })
    
    
    
 
    }
   
    return (
        <>
        <Header/>  
      <div className='container-fluid'>

          <div className='formbox'>

            <div className='formboxs p-5'>
<h2 className="text-center">Get Started</h2>
<p className='text-center'>To login please enter your email and password</p>



    

<form className='centerbox'  >
  <input type="text"  placeholder='Email' name='name'  velue={name} 
   onChange={(e) => {
  
    setName(e.target.value);
    
    
  }}
  />
  

          
<br/>
<div className='passwordbox'>
  <input  type={passwordShown ? "text" : "password"} name='password'  placeholder='Password'   velue={password}    
          onChange={(e) => {
            if(e.target.value.length<1){
              setcolor("coral")
            }else{
              setPassword(e.target.value);
            setcolor("#fd6730")
            }
            
           
          }} />
           <i className="far fa-eye   field-icon " id="togglePassword"   onClick={togglePasswordVisiblity}  ></i>
           {/* <ErrorMessage name="password" component="div" /> */}
          
           {/*  <i className="fas fa-eye-slash"></i>  : <i className="far fa-eye "></i> } */}
           </div>
         
         {props.err}
           
  <br/>
  <p className='forgot'><Link to='/forgot' >
Forgot Password?</Link></p>
<div className='centered'>
  <Button className=' btnbox text-center mb-3 '  onClick={userName} style={{backgroundColor:color}}>Login</Button>
  <br/>
 
  <br/>
  <p className='logintext'>or Login using</p>
  <br/>
  <p><Link to='/register'>New user? click here for sign Up</Link></p>
  <div className="flex-container">
  <span className="iconbox">
<i className="fab fa-facebook-f text-white"></i>
</span>
<span className="iconbox">
<i className="fab fa-google text-white"></i>

</span>
</div>
<br/>
<p>By Continuing you agree to the <br/><Link to='/'>Terms of Services</Link> and<Link to='/'> Privacy Policy</Link></p>
  </div>
</form>






            </div>

          </div>

      </div>
<Footer/>
        </>
    )
}
