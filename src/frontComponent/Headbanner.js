// import banner from '../assets/images/banner.png';
import React  from 'react'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import { Button } from 'react-bootstrap';


function Headbanner() {

 

    return (
        <>
         <br/><br></br><br></br>

<div className="bannerbox">
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require('../assets/images/banner.png')} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={require('../assets/images/banner.png')} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={require('../assets/images/banner.png')} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


</div>

                    <div className='container-fluid' >
                
{/* <div className="card"> */}
           
{/* </div> */}
            



           {/* <div className='imagbox' style={{ width:"100%"}}>
            <img src="https://www.ne-games.com/assets/front/images/banner.png" className='img-responsive' alt="images" style={{width:"100%",}}/>
            </div> */}

            <div className="pos-center">
            <p className="banner-caption">Fun &amp; Challenging<br/>Games For All<br/>The Family</p>
            </div>
<br/>
{/* <div className="container-fluid">
    <div className="row mb-3">

<div className="col-md-6">

<div className="card h-100 p-3  mainlink">

<div className="circal">
    <img src={require('../assets/images/1637563769.jpg')} className="circalbox" alt="..."/>
    </div>

<h3 className='text-center mt-2'>Ne-Games</h3>
<p className='text-center mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla expedita sequi amet non id fugiat enim repudiandae consequatur quis perspiciatis sunt molestias eaque ad, obcaecati ratione unde temporibus cumque cupiditate? Adipisci dicta eum veniam in sunt eos repellat eligendi facilis earum iure molestiae corporis natus quas explicabo laboriosam necessitatibus est neque expedita iusto illo sapiente dolores minima, debitis numquam. Quam, dicta. Commodi ab nostrum sed itaque velit dolores similique officia neque natus quaerat magnam sint, architecto nemo ullam inventore deleniti, tempore temporibus eaque corporis deserunt. Quas, non assumenda eius enim vel labore debitis. Odit rerum, voluptas itaque provident deserunt corrupti!</p>

<Link to="./About"><div className="hovcolor1 mt-5">
  read more
</div></Link>

</div>



</div>
<div className="col-md-6">
<div className="col-md-12 mb-3">
            <div className="card gameboxs">       
            
             <div className="gamebox2  m=2" >
                 <h1 style={{borderLeft :'5px solid rgb(19 122 181)', paddingLeft:'10px'}}>ABOUT</h1>
                 <p>Shriv Com Media Solutions (SCMS), have been part of the industry for more than 15 years, based in Noida, U.P, India. The prime motive</p>
                 <br/>
                   <Link  to="./About">
                  <button className="hovcolor" > view More</button>
                   </Link>

                 </div></div>

        </div>


        <div className="col-md-12 mb-3">
            <div className="card gameboxs">
        <div className="gamebox2  m=2" >
        <h1 style={{borderLeft :'5px solid rgb(19 122 181)', paddingLeft:'10px'}}>SKILL SET</h1>
                 <p>Shriv Com Media Solutions (SCMS), have been part of the industry for more than 15 years, based in Noida, U.P, India. The prime motive</p>
                 <br/>
                 <Link to='/'>
                 <button className="hovcolor" > view More</button>
                   </Link>
        </div>
        </div>
        </div>


        <div className="col-md-12 mb-3">
            <div className="card gameboxs">
        <div className="gamebox2  m=2">
        <h1  style={{borderLeft :'5px solid rgb(19 122 181)', paddingLeft:'10px'}}>WHY SCMS</h1>
                 <p>Shriv Com Media Solutions (SCMS), have been part of the industry for more than 15 years, based in Noida, U.P, India. The prime motive</p>
                 <br/>
                 <Link to="/">
                 <button className="hovcolor" > view More</button>
                   </Link>
        </div>
        </div>
        </div>



        <div className="col-md-12 ">
            <div className="card gameboxs">
        <div className="gamebox2  m=2" >
        <h1 style={{borderLeft :' 5px solid rgb(19 122 181)' , paddingLeft:'10px'}}>ACCREDITATION</h1>
                 <p>Shriv Com Media Solutions (SCMS), have been part of the industry for more than 15 years, based in Noida, U.P, India. The prime motive</p>
                 <br/>
                 <Link to="/">
                 <button className="hovcolor " > view More</button>
                   </Link>
        </div>
        </div>
        </div>



</div>
    </div>
  
</div>
            <br/>
 <h1 className='text-center'><b>Games Level</b></h1>
 <br/>
<div className='bgimage'>
   
<div className="row">
    <div className="col-md-3">
        <div className="gamebox  p-3">
          <div className="circal">
        <img src={require('../assets/images/1637563714.jpg')} className="circalbox" alt="..."/>
        </div>
            <h3 className='text-center mt-3'>Easy</h3>
            <p className="text-center mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum.... </p>
            <Link to="./About"><div className="hovcolor1 mt-2">
  read more
</div></Link>
        </div>
    </div>
    <div className="col-md-3">
    <div className="gamebox  p-3">
      <div className="circal">
    <img src={require('../assets/images/1637563734.jpg')} className="circalbox" alt="..."/>
    </div>
            <h3 className='text-center mt-3' >MEDIAUM</h3>
            <p className="text-center mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum.... </p>
            <Link to="./About"><div className="hovcolor1 mt-2">
  read more
</div></Link>
        </div>

    </div>
    <div className="col-md-3">
    <div className="gamebox p-3">
      <div className="circal">
    <img src={require('../assets/images/1637563753.jpg')} className="circalbox" alt="..."/>
    </div>
            <h3 className='text-center mt-3'>EXPERT</h3>
            <p className="text-center mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum.... </p>
            <Link to="./About"><div className="hovcolor1 mt-2">
  read more
</div></Link>
        </div>
    </div>
    <div className="col-md-3">
    <div className="gamebox p-3">
      <div className="circal">
    <img src={require('../assets/images/1637563769.jpg')} className="circalbox" alt="..."/>
    </div>
            <h3 className='text-center mt-3'>GENIUS</h3>
            <p className="text-center mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum.... </p>
           <Link to='/'> <div className="hovcolor1 mt-2">
  read more
</div></Link>
        </div>
    </div>
</div>
</div>
<br/>
<div className="container-fluid">
<h2 className='text-center'><b>Level By History</b></h2>
<br/>

<div className="row">
  <div className="col-md-4">
    <div className="list-group" id="list-tab" role="tablist">
    <a className="list-group-item list-group-item-action active" id="list-aull-list" data-bs-toggle="list" href="#list-aull" role="tab" aria-controls="list-aull"><p>All</p></a>
      <a className="list-group-item list-group-item-action " id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home"> <img src={require('../assets/images/1637563769.jpg')} className="circalbox5" alt="..."/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className='textboss'>Easy</p> <i className="fas fa-chevron-right" style={{ float: 'right', marginTop: '7px'}}></i></a>
      <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile"> <img src={require('../assets/images/1637563769.jpg')} className="circalbox5" alt="..."/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className='textboss'>MEDIAUM</p> <i className="fas fa-chevron-right" style={{ float: 'right' , marginTop: '7px'}}></i></a>
      <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages"> <img src={require('../assets/images/1637563769.jpg')} className="circalbox5" alt="..."/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className='textboss'>EXPERT</p> <i className="fas fa-chevron-right" style={{ float: 'right' , marginTop: '7px'}}></i></a>
      <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings"> <img src={require('../assets/images/1637563769.jpg')} className="circalbox5" alt="..."/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className='textboss'>GENIUS</p> <i className="fas fa-chevron-right" style={{ float: 'right' , marginTop: '7px'}}></i></a>
    </div>
  </div>
  <div className="col-md-8">
    <div className="tab-content card p-3" id="nav-tabContent">



    <div className="tab-pane fade show active" id="list-aull" role="tabpanel" aria-labelledby="list-aull-list">
<div className="row">
  <div className="col-md-3">
<div className="card p-2  boxhover">
<div className="circal">
    <img src={require('../assets/images/1637563769.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>Ankit</h5>
    <Link to="./Levelhistory"><div className="hovcolor1 mt-2">
  read more
</div></Link>
</div>
  </div>
  <div className="col-md-3">
  <div className="card p-2 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637563734.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>sachin</h5>
    <Link to="./Levelhistory"><div className="hovcolor1 mt-2">
  read more
</div></Link>
</div>
    </div>
    <div className="col-md-3">
    <div className="card p-2 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637563753.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>santosh</h5>
    <Link to="./Levelhistory" ><div className="hovcolor1 mt-2">
  read more
</div></Link>
</div>
    
    </div>
    <div className="col-md-3">
    <div className="card p-2 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637730652.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>sipu</h5>
    <Link to="./Levelhistory"><div className="hovcolor1 mt-2">
  read more
</div></Link>
</div>
    
    </div>
</div>

      </div>













      <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
<div className="row">
  <div className="col-md-3">
<div className="card p-2  boxhover">
<div className="circal">
    <img src={require('../assets/images/1637563769.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>Ankit</h5>
    <Link to="./Levelhistory"><div className="hovcolor1 mt-2">
  read more
</div></Link>
</div>
  </div>
  <div className="col-md-3">
  <div className="card p-2 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637563734.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>sachin</h5>
    <Link to="./Levelhistory"><div className="hovcolor1 mt-2">
  read more
</div></Link>
</div>
    </div>
    <div className="col-md-3">
    <div className="card p-2 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637563753.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>santosh</h5>
    <Link to="./Levelhistory" ><div className="hovcolor1 mt-2">
  read more
</div></Link>
</div>
    
    </div>
    <div className="col-md-3">
    <div className="card p-2 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637730652.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>sipu</h5>
    <Link to="./Levelhistory"><div className="hovcolor1 mt-2">
  read more
</div></Link>
</div>
    
    </div>
</div>

      </div>




      <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"><div className="row">
  <div className="col-md-3">
<div className="card p-2 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637563769.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>Ankit</h5>
    <Link to="./Levelhistory" ><div className="hovcolor1 mt-2">
  read more
</div></Link>
</div>
  </div>
  <div className="col-md-3">
  <div className="card p-2 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637563734.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>sachin</h5>
    <Link to="./Levelhistory"><div className="hovcolor1 mt-2">
  read more
</div></Link>
</div>
    </div>
    <div className="col-md-3">
    <div className="card p-2 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637563753.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>santosh</h5>
    <Link to="./Levelhistory"><div className="hovcolor1 mt-2">
  read more
</div></Link>
</div>
    
    </div>
    <div className="col-md-3">
    <div className="card p-2 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637730652.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>sipu</h5>
    <Link to="./Levelhistory" ><div className="hovcolor1 mt-2">
  read more
</div></Link>
</div>
    
    </div>
</div></div>



      <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"><div className="row">
  <div className="col-md-3 ">
<div className="card p-2 boxhover ">
<div className="circal">
    <img src={require('../assets/images/1637563769.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>Ankit</h5>
    <Link to="./Levelhistory"><div className="hovcolor1 mt-2">
  read more
</div></Link>
</div>
  </div>
  <div className="col-md-3">
  <div className="card p-2 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637563734.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>sachin</h5>
   <Link to="./Levelhistory" ><div className="hovcolor1 mt-2">
  read more
</div></Link>
</div>
    </div>
    <div className="col-md-3">
    <div className="card p-2 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637563753.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>santosh</h5>
    <Link to="./Levelhistory"><div className="hovcolor1 mt-2">
  read more
</div></Link>
</div>
    
    </div>
    <div className="col-md-3">
    <div className="card p-2 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637730652.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>sipu</h5>
    <Link to="./Levelhistory"><div className="hovcolor1 mt-2">
  read more
</div></Link>
</div>
    
    </div>
</div></div>



      <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"><div className="row">
  <div className="col-md-3">
<div className="card p-2 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637563769.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>Ankit</h5>
    <Link to="./Levelhistory"><div className="hovcolor1 mt-2">
  read more
</div>
</Link>
</div>
  </div>
  <div className="col-md-3">
  <div className="card p-2 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637563734.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>sachin</h5>
    <Link to="./Levelhistory"><div className="hovcolor1 mt-2">
  read more
</div></Link>
</div>
    </div>
    <div className="col-md-3">
    <div className="card p-2 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637563753.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>santosh</h5>
    <Link to='./Levelhistory' ><div className="hovcolor1 mt-2">
  read more
</div>
</Link>
</div>
    
    </div>
    <div className="col-md-3">
    <div className="card p-2 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637730652.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>sipu</h5>
  <Link to='./Levelhistory' >  <div className="hovcolor1 mt-2">
  read more
</div>
</Link>
</div>
    
    </div>
</div></div>



    </div>
  </div>
</div>

</div>
<br/>



<div className="bgb-color">

<br/>
  <h2 className='text-center '><b>GAME INFO</b></h2>
  <br/>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row">
        <div className="col-md-6">
          <p className='text-center textox'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, nemo labore. Officia, et nihil ab repellendus, non incidunt culpa adipisci explicabo officiis commodi corporis eos, quidem eveniet? Eum, totam beatae!</p>
          <br/>
          <Link to='./Levelhistory' >  <div className="test_btn mt-2">
  READ MORE
</div></Link>
          
        </div>
        <div className="col-md-6">
        <img src={require('../assets/images/1637730652.jpg')} className="d-block w-100" alt="..."/>
        </div>
      </div>
     
    </div>
    <div className="carousel-item">
    <div className="row">
        <div className="col-md-6">
          <p className='text-center textox'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, nemo labore. Officia, et nihil ab repellendus, non incidunt culpa adipisci explicabo officiis commodi corporis eos, quidem eveniet? Eum, totam beatae!</p>
          <br/>
          <Link to='./Levelhistory' >  <div className="test_btn mt-2">
          READ MORE
</div></Link>
        </div>
        <div className="col-md-6">
        <img src={require('../assets/images/1637563753.jpg')} className="d-block w-100" alt="..."/>
        </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="row">
        <div className="col-md-6">
          <p className='text-center textox'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, nemo labore. Officia, et nihil ab repellendus, non incidunt culpa adipisci explicabo officiis commodi corporis eos, quidem eveniet? Eum, totam beatae!</p>
          <br/>
          <Link to='./Levelhistory' >  <div className="test_btn mt-2">
          READ MORE
</div></Link>
        </div>
        <div className="col-md-6">
        <img src={require('../assets/images/1637563769.jpg')} className="d-block w-100" alt="..."/>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>












<div className="latestgame">
<br/>
<h2 className='text-center'><b>LATEST GAMES</b></h2>
<br/>

<div className="row">
  <div className="col-md-3  mrtop">
<div className="card p-2 h-100  boxhover">
<div className="circal">
    <img src={require('../assets/images/1637563769.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>candy game</h5>
    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic maiores perferendis ipsa laborum iste iure facere minima recusandae fugit.</p>
    <Link to="./Levelhistory"><div className="hovcolor1  hovcolor4  mt-2">
  read more
</div></Link>
</div>
  </div>
  <div className="col-md-3 mrtop">
  <div className="card p-2 h-100 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637563734.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>superman game</h5>
    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ea, fuga itaque veritatis porro culpa accusantium neque tenetur nisi velit.</p>
    <Link to="./Levelhistory"><div className="hovcolor1 hovcolor4 mt-2">
  read more
</div></Link>
</div>
    </div>
    <div className="col-md-3 mrtop">
    <div className="card p-2 h-100 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637563753.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>slicing game</h5>
    <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolorum asperiores unde, sequi ducimus hic explicabo. Eius earum sed et.</p>
    <Link to="./Levelhistory" ><div className="hovcolor1  hovcolor4 mt-2">
  read more
</div></Link>
</div>
    
    </div>
    <div className="col-md-3  mrtop">
    <div className="card p-2  pb-4 h-100 boxhover">
<div className="circal">
    <img src={require('../assets/images/1637730652.jpg')} className="circalbox1" alt="..."/>
    </div>
    <h5 className='text-center mt-3'>racing game</h5>
    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, doloremque at? Ullam asperiores, autem maxime perspiciatis temporibus itaque suscipit quibusdam.</p>
    <Link to="./Levelhistory"><div className="hovcolor1  hovcolor4 mt-2">
  read more
</div></Link>
</div>
    
    </div>
</div>

</div> */}



<br/>
</div>
        </>
    )
}

export default Headbanner;
