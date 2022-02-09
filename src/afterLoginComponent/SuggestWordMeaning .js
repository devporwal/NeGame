import React,{useEffect} from 'react';
import Menubar from './Menubar';
export default function SuggestWordMeaning () {

    useEffect(()=>{
        let bodyElement = document.getElementsByTagName('body')[0];
        bodyElement.className = "";
      })

  return <>
  <Menubar/>
<br/><br/><br/><br/><br/><br/>
      <h1 className='text-center'>Welcome Suggest a new word and meaning </h1>
  </>;
}
