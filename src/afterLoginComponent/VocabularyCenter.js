import React,{useEffect} from 'react';
import Menubar from './Menubar';

export default function VocabularyCenter() {

    useEffect(()=>{
        let bodyElement = document.getElementsByTagName('body')[0];
        bodyElement.className = "";
      })

  return <>
  <Menubar/>
<br/><br/><br/><br/>
<h1 className='text-center'>Welcome Vocabulary Center</h1>
  </>;
}
