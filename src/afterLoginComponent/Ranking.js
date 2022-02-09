import React,{useEffect} from 'react';
import Menubar from './Menubar';
export default function Ranking() {
  useEffect(()=>{
    let bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.className = "";
  })
  return <>
  
<Menubar/>
<br/><br/><br/><br/><br/><br/>
  <h1 className='text-center'>WORLDWIDE RANKING</h1>
  </>;
}
