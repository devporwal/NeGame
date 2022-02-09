import React,{useEffect} from 'react';
import Menubar from './Menubar';

export default function History() {
    useEffect(()=>{
        let bodyElement = document.getElementsByTagName('body')[0];
        bodyElement.className = "";
      })
  return<>

<Menubar/>
<br/><br/><br/><br/><br/><br/>
<h1 className='text-center'>welcome History</h1>

  </>;
}
