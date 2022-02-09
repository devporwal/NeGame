// import logo from './logo.svg';
import React,{useState,useEffect} from 'react';

import './App.css';
import'../src/assets/css/Index.css'
import'../src/assets/css/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from './Home'
import About from './frontComponent/About'
import Blog from './frontComponent/Blog'
import Login from './frontComponent/Login'
import Contact from './frontComponent/Contact';
import Register from './frontComponent/Register';
import Forgot from './frontComponent/Forgot';
import Deshbord from './afterLoginComponent/Deshbord';
import Friend from './afterLoginComponent/Friend';
import Games from './afterLoginComponent/Games';
import Easy from './afterLoginComponent/Easy';
import Levelhistory from './frontComponent/Levelhistory'
import Ranking from './afterLoginComponent/Ranking';
import Expert from './afterLoginComponent/Expert';
import Genius from './afterLoginComponent/Genius';
import Medium from './afterLoginComponent/Medium';
import EditProfile from './afterLoginComponent/EditProfile'
import History from './afterLoginComponent/History';
import VocabularyCenter from './afterLoginComponent/VocabularyCenter';
import Dictionary from './afterLoginComponent/Dictionary';
import SuggestWordMeaning from './afterLoginComponent/SuggestWordMeaning ';
import BuyHints from './afterLoginComponent/BuyHints';
import ChangesPassword from './afterLoginComponent/ChangesPassword';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Settings from './afterLoginComponent/Settings';

// import {nav} from'react-bootstrap'

// import ReactDOM from 'react-dom';
// import { Routes, Route, } from "react-router-dom"
// import { Route, BrowserRouter as Router,Routes} from 'react-router-dom';
// import Footer from './component/Footer';



  function App(props) {  
    
    const [error,seterror] = useState("")
    const [isloggedIn,setisLoggedIn] = useState(false)

   
    useEffect(()=>{
  
   
        setisLoggedIn(window.sessionStorage.getItem("token"))
     
     
    },[isloggedIn])
    
   async function login(user,pass){
   
    var myHeaders = new Headers();
    myHeaders.append(
      'APPKEY',
      'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
    );

    var formdata = new FormData();
    formdata.append('username', user);
    formdata.append('password',pass);
    formdata.append('register_type', 'email');
    formdata.append('lat', '56454');
    formdata.append('lng', '5645645');
    formdata.append('device_id', 'dsvdsvdsvdsvd');
    formdata.append('fcm_token', 'dsvdsvdsvdsvdsvdfbgfbg');

    
    const url = "https://ne-games.com/ne_lite/api/user/login"
    
    
    await fetch(url,{
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    }).then((response) => response.json())
    .then(async (response) => {
      if(response.status === 200){
        
        setisLoggedIn(true)
        window.sessionStorage.setItem("token", isloggedIn);
        window.sessionStorage.setItem("username", response.data.username);
        window.sessionStorage.setItem("id", response.data.id);
        // const url4 = "https://ne-games.com/ne_lite/api/user/exit?user_id="+response.data.id;
        //   await fetch(url4,{
        //     headers: myHeaders
        // }).then((response) => response.json())
        // .then((response) => { 
        //     if(response.status === 200){
        //       console.log(response)
               
              
                
        //     }else{
        //       console.log("Error")
              
        //     }
          
          
        // })
        const url2 = "https://ne-games.com/ne_lite/api/user/profile?id="+response.data.id;
      
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
                 
                  
               }
             
             
           })

        window.open("/Dashbord", "_self")
      
      }else{
        seterror("Invalid Password")
      }

    }
    )
   myHeaders = new Headers();
   myHeaders.append(
   'APPKEY',
   'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
   );
   const url2 = "https://ne-games.com/ne_lite/api/user/profile?id="+window.sessionStorage.getItem("id");
   
   
      
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
                 
                  
               }
             
             
           })
    

   }
    return (
      <div className="App">  
<Router>    
<Switch>
<Route exact path="/ChangesPassword">
  <ChangesPassword/>
  </Route>
<Route exact path="/BuyHints">
  <BuyHints/>
</Route>  
<Route exact path="/SuggestWordMeaning">
<SuggestWordMeaning/>
</Route>
<Route exact path="/Dictionary">
  <Dictionary/>
</Route>
<Route exact path="/VocabularyCenter">
  <VocabularyCenter/>
  </Route>
<Route exact path="/History">
  <History/>
  </Route>
<Route exact path="/EditProfile">
  <EditProfile/>
  </Route>
<Route exact path="/Medium">
{isloggedIn?<Medium/>: <Login loginhandler={login} err={error} />}
          </Route>
<Route exact path="/Expert">
{isloggedIn?<Expert/>: <Login loginhandler={login} err={error} />}
          </Route>
          <Route exact path="/Settings">
{isloggedIn?<Settings/>: <Login loginhandler={login} err={error} />}
          </Route>

<Route exact path="/Ranking">
            <Ranking/>
          </Route>
<Route exact path="/Levelhistory">
            <Levelhistory/>
          </Route>
<Route exact path="/Easy">
{isloggedIn?<Easy/>: <Login loginhandler={login} err={error} />}
          </Route>
          <Route exact path="/Genius">
{isloggedIn?<Genius/>: <Login loginhandler={login} err={error} />}
          </Route>

<Route exact path="/Games">
            <Games/>
          </Route>
<Route exact path="/Friend">
            <Friend/>
          </Route>
<Route exact path="/Dashbord">
  {isloggedIn?<Deshbord />: <Login loginhandler={login} err={error} />}
            
          </Route>
<Route  path="/Forgot">
            <Forgot/>
          </Route>
          <Route  path="/about" >
            <About />
          </Route>
          <Route  path="/Blog">
            <Blog/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route  exact path="/Login">
          {isloggedIn?<Deshbord />: <Login loginhandler={login} err={error} />}
          </Route>
          <Route  path="/Register">
            <Register/>
          </Route> 
           <Route  path="/">
           {isloggedIn? <Login loginhandler={login} err={error}  />:  <Home />}
           
          </Route>
        </Switch>
        </Router>
    
    </div>
  );
}

export default App;

