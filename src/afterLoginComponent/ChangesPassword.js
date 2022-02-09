import React,{useEffect} from 'react';
import Menubar from './Menubar';

export default function ChangesPassword() {
    useEffect(()=>{
        let bodyElement = document.getElementsByTagName('body')[0];
        bodyElement.className = "";
      })
  return <div>
<Menubar/>
<br/><br/><br/><br/><br/><br/>
<h1 className='text-center'>
welcome Change Password

</h1>
  </div>;
}
