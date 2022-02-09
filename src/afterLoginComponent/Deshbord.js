import React,{useState,useEffect} from 'react'
import { useHistory} from "react-router-dom";
import Menubar from './Menubar'
import { Link } from 'react-router-dom';





export default function Deshbord(props) {
    const [datafound,setdatafound] = useState(true)
   
    
    const history = useHistory();
  
    useEffect(()=>{
      let bodyElement = document.getElementsByTagName('body')[0];
      bodyElement.className = "Dashbord";
    })
    

    
    function getData(){
        setdatafound(false)
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
              
                if(resp.status === 200 && resp.message === "Success"){
               
                  window.sessionStorage.setItem("mat_id",resp.user1.id);
                    window.sessionStorage.setItem("match_id",resp.user1.match_id);
                    await fetch(url2,{
                        headers: myHeaders
                    }).then((response) => response.json())
                    .then((response) => { 
                        if(response.status === 200){
                         
                            window.sessionStorage.setItem("image", response.image_path+"/"+response.data.image);
                            window.sessionStorage.setItem("hints",response.hints)
                            window.sessionStorage.setItem("points",response.currentMonth_total_points)
                           
                            setdatafound(false);
                            history.push("/Easy");
                        }else{
                            window.sessionStorage.setItem("image", require('../assets/images/profilephoto.png'));
                            setdatafound(false);
                            history.push("/Easy");
                        }
                      
                      
                    }).catch((err)=>{
                       
                    })
                   
                }else{
                    alert("Data not found")
                }
            })
    }
    function getData2(){
      setdatafound(false)
      var myHeaders = new Headers();
          myHeaders.append(
          'APPKEY',
          'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
          );
          const url2 = "https://ne-games.com/ne_lite/api/user/profile?id="+window.sessionStorage.getItem("id");
          const url1 = "https://ne-games.com/ne_lite/api/start/match/computer?user_id="+window.sessionStorage.getItem("id")+"&level=2"
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
                window.sessionStorage.setItem("mat_id",resp.user1.id);
                  window.sessionStorage.setItem("match_id",resp.user1.match_id);
                  await fetch(url2,{
                      headers: myHeaders
                  }).then((response) => response.json())
                  .then((response) => { 
                      if(response.status === 200){
                        console.log(response)
                          window.sessionStorage.setItem("image", response.image_path+"/"+response.data.image);
                          window.sessionStorage.setItem("hints",response.hints)
                          window.sessionStorage.setItem("points",response.currentMonth_total_points)
                         
                          setdatafound(false);
                          history.push("/Medium");
                      }else{
                          window.sessionStorage.setItem("image", require('../assets/images/profilephoto.png'));
                          setdatafound(false);
                          history.push("/Medium");
                      }
                    
                    
                  }).catch((err)=>{
                     
                  })
                 
              }else{
                  alert("Data not found")
              }
          })
  }

    function getData1(){
      
      setdatafound(false)
      var myHeaders = new Headers();
          myHeaders.append(
          'APPKEY',
          'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
          );
          const url2 = "https://ne-games.com/ne_lite/api/user/profile?id="+window.sessionStorage.getItem("id");
          const url1 = "https://ne-games.com/ne_lite/api/start/match/computer?user_id="+window.sessionStorage.getItem("id")+"&level=3"
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
                window.sessionStorage.setItem("mat_id",resp.user1.id);
                  window.sessionStorage.setItem("match_id",resp.user1.match_id);
                  await fetch(url2,{
                      headers: myHeaders
                  }).then((response) => response.json())
                  .then((response) => { 
                      if(response.status === 200){
                          window.sessionStorage.setItem("image", response.image_path+"/"+response.data.image);
                          setdatafound(false);
                          history.push("/Expert");
                      }else{
                          window.sessionStorage.setItem("image", require('../assets/images/profilephoto.png'));
                          setdatafound(false);
                          history.push("/Expert");
                      }
                    
                    
                  }).catch((err)=>{
                     
                  })
                 
              }else{
                  alert("Data not found")
              }
          })
  }
  function getData3(){
      
    setdatafound(false)
    var myHeaders = new Headers();
        myHeaders.append(
        'APPKEY',
        'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
        );
        const url2 = "https://ne-games.com/ne_lite/api/user/profile?id="+window.sessionStorage.getItem("id");
        const url1 = "https://ne-games.com/ne_lite/api/start/match/computer?user_id="+window.sessionStorage.getItem("id")+"&level=4"
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
              window.sessionStorage.setItem("mat_id",resp.user1.id);
                window.sessionStorage.setItem("match_id",resp.user1.match_id);
                await fetch(url2,{
                    headers: myHeaders
                }).then((response) => response.json())
                .then((response) => { 
                    if(response.status === 200){
                        window.sessionStorage.setItem("image", response.image_path+"/"+response.data.image);
                        setdatafound(false);
                        history.push("/Genius");
                    }else{
                        window.sessionStorage.setItem("image", require('../assets/images/profilephoto.png'));
                        setdatafound(false);
                        history.push("/Genius");
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
    
        <Menubar/>

<div className="easybg_image" >
    <div className='layer1'>
        <br/><br/><br/>
        {datafound? "":<div className="loader-wrapper">
      <div className="loader"></div>
    </div>}
       
           <div className="container-fluid">

              
             
<div className="row">

<div className="col-md-3">

<h4 className='text-center'>My points this month {window.sessionStorage.getItem("points")}</h4>
   
    <div className="circal">
        <img src={window.sessionStorage.getItem("image")} className="circalbox1" alt="..."/>

    </div>

        <p className='text-center text-white' > {window.sessionStorage.getItem("username")}
        </p>
        
        <div className='paymentbtn'>
    <img src={require('../assets/images/nextplaybutton.png')} className="" alt="..."/>
    </div>
    
    <h4 className='text-center'> Hints: {window.sessionStorage.getItem("hints")}</h4>
    <h4 className='text-center'>VERY IMPORTANT</h4>
    <h6 className='text-center text-white'>
Make sure you edit your profile
to be included in the ranking table</h6>

<ul className="nav flex-column">
  <li className="nav-item buttonbox1 mb-2">
    <Link to ="/EditProfile" className="nav-link active">Edit Profile <i className="fas fa-chevron-right"></i></Link>
  </li>
  <li className="nav-item  buttonbox1 mb-2">
    <Link  to ="/history" className="nav-link">History <i className="fas fa-chevron-right"></i></Link>
  </li>
  <li className="nav-item buttonbox1 mb-2">
    <Link  to ="/VocabularyCenter"  className="nav-link">Vocabulary Centre <i className="fas fa-chevron-right"></i></Link>
  </li>
  <li className="nav-item buttonbox1 mb-2">
    <Link  to ="/Dictionary" className="nav-link " >Dictionary- Your Help please <i className="fas fa-chevron-right"></i></Link>
  </li>
  <li className="nav-item buttonbox1 mb-2">
    <Link to ="/SuggestWordMeaning" className="nav-link " >Suggest a new word and meaning <i className="fas fa-chevron-right"></i></Link>
  </li>
  <li className="nav-item buttonbox1 mb-2">
    <Link to ="" className="nav-link " >Points <i className="fas fa-chevron-right"></i></Link>
  </li>
  </ul>




{/* <h2 className='text-center text-write'><b>Points Info</b></h2>
<br/>
<p className=' text-white'>You play for points which are totalled for the month to give monthly winners.Points are reset to zero at the start of each month</p>
<br/>
<p className=' text-white'>Your HISTORY will record your best monthly scores for you to beat.</p>
<br/>
<p className=' text-white'><b>POINTS ARE SCORED AS FOLLOWS:</b></p>
<br/>
<p className=' text-white'>300 points for a win at easy level</p>
<p className=' text-white'>500 points for a win at medium level</p>
<p className=' text-white'>700 points for a win at expert level</p>
<p className=' text-white'>800 points for a win at genius level (8 letter word)</p>
<p className=' text-white'>900 points for a win at genius level (9 letter word)</p>
<p className=' text-white'>1000 points for a win at genius level (10 letter word)</p>
<br/>
<p className=' text-white'>-91 points for all losses"</p> */}
</div>
    <div className="col-md-6">
    <Link to='/ranking'><h4 className='text-center'>CLICK HERE FOR WORLDWIDE RANKINGS</h4></Link>

    <div className="card">
        <div className="deshbox">
             <div className="buttonbox" >
<p style={{display:"inline"}}>EASY LEVEL</p>
<div className='marginbox'></div>
 <span className='mainplaybutton' onClick={getData}>
<img src={require('../assets/images/playbutton.png')} className="buttoneasy" alt="..."/>
</span>
<p style={{display:"inline"}}>Play letters only behind</p>

             </div>

<br/>
             <div className="buttonbox">
<p style={{display:"inline"}}>MEDIUM LEVEL</p>
<div className='marginbox'></div>
<span className='mainplaybutton' onClick={getData2}>
<img src={require('../assets/images/playbutton.png')} className=" buttoneasy" alt="..."/>
</span>
<p style={{display:"inline"}}>Play letters at the front or behind</p>

             </div>
             <br/>
             <div className="buttonbox">
<p style={{display:"inline"}}>EXPERT LEVEL</p>
<div className='marginbox'></div>
<span className='mainplaybutton'  onClick={getData1}>
<img src={require('../assets/images/playbutton.png')} className=" buttoneasy" alt="..."/>
</span>
<p style={{display:"inline"}}>Play letters anywhere but keep them in same order</p>

             </div>
             <br/>
             <div className="buttonbox">
<p style={{display:"inline"}}>GENIUS LEVEL</p>
<div className='marginbox'></div>
<span className='mainplaybutton' onClick={getData3}>
<img src={require('../assets/images/playbutton.png')} className=" buttoneasy" alt="..."/>
</span>
<p style={{display:"inline"}}>Play letters anywhere and re-arrange them</p>


             </div>
        </div>
        </div>
        </div>
       
    <div className="col-md-3">
    {/* <h4 className='text-center'>My points this month -182</h4> */}
 
  
<ul className="nav flex-column" style={{marginTop:'35px'}}>
  
 
  <li className="nav-item buttonbox1 mb-2">
    <Link className="nav-link" to="/BuyHints" >Buy Hints <i className="fas fa-chevron-right"></i></Link>
  </li>
  <li className="nav-item buttonbox1 mb-2">
    <Link className="nav-link" to="/ChangesPassword" >Change Password <i className="fas fa-chevron-right"></i></Link>
  </li>
  <li className="nav-item buttonbox1 mb-2">
    <Link className="nav-link " >The Music <i className="fas fa-chevron-right"></i></Link>
  </li>
  <li className="nav-item  mb-2 bgcolorinfo">
    <Link className="nav-link text-white">App Info </Link>
  </li>
  <li className="nav-item buttonbox1 mb-2">
    <Link className="nav-link " >About Us <i className="fas fa-chevron-right"></i></Link>
  </li>
  <li className="nav-item buttonbox1 mb-2">
    <Link className="nav-link " >Privacy and Policy <i className="fas fa-chevron-right"></i></Link>
  </li>
  <li className="nav-item buttonbox1 mb-2">
    <Link className="nav-link " >Terms and Conditions <i className="fas fa-chevron-right"></i></Link>
  </li>
  <li className="nav-item buttonbox1 mb-1">
    <Link className="nav-link " >Refund Policy <i className="fas fa-chevron-right"></i></Link>
  </li>
</ul>

<div className='buttonbox5'>
<div className='flex-container'>
  <div className='flexchildclass'>
  <p className='text-white text-center'>
  click here to play 
NE connect and play with
friends & family and members of the NE GAMES
Online Community
  </p>
  </div>
<div className='flexchildclass1 '>
  
<div className='connectdiv'>

<div className='flex-container'>
  <div className='podiv'>
  <img src={require('../assets/images/image002.png')} className="circalbox7" alt="..."/>
  </div>
  <div className='podiv1'>
<p className='text-center text-white'>NE Connect</p>
<p className='text-center text-white'>00:01:25</p>
</div>
<div className='podiv'>
<img src={require('../assets/images/image004.png')} className="circalbox7" alt="..." style={{float: 'right'}}/>
</div>

</div>
<div className='paymentbtn2'>
<img src={require('../assets/images/nextplaybutton.png')} className="" alt="..." />
</div>

<div className='prap'>
  <p className='text-center'>
WITH REAL TIME CHAT</p>
</div>


</div>

</div>


  </div>


  <div className='flex-container'>
  <div className='flexchildclass'>
  <img src={require('../assets/images/clickherebutton.png')} className="circalbox6" alt="..."/>
  </div>
<div className='flexchildclass8 '>
  
<div className='flex-container'>
<div className='profilesdiv'>
<img src={require('../assets/images/image002.png')} className="circalbox7" alt="..."/>
</div>
<div className='profilesdiv1'>
  <p className='text-white'>I have no idea what word you are making</p>
</div>

</div>
<div className='flex-container'>
<div className='profilesdiv'>
<img src={require('../assets/images/image004.png')} className="circalbox7" alt="..."/>
</div>
<div className='profilesdiv1'>
  <p className='text-white'>You'll have to challege me then!</p>
  <p className='textsize text-white'>HYSTERICAL,HISTORIC,RHETORIC,THEATRICAL</p>
</div>

</div>


</div>


  </div>

</div>
        
        </div>
    
        
</div>
           </div>
           </div>
           </div>
          
        </>
    )
}
