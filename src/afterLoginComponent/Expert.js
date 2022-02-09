import React,{useState, useEffect} from 'react'

import { Link } from 'react-router-dom'


export default function Expert() {
    const [functioncall,setFunctioncall] = useState("")
    const [anyleftcolor,setAnyLeftColor] = useState("red")
    const [anyrightcolor,setAnyRightColor] = useState("red")
    const [leftcolor,setleftcolor] = useState("red")
    const [rightcolor,setrightcolor] = useState("#00FF00")
    const[roundcounter,setRoundCounter] = useState(1);
    const [hintvalue,sethintvalue] = useState("Hint (1)")
      const [classnm,setclassnm]= useState("easylose")
      const [hintword,sethintword] = useState("")
      const [hintstate,sethintstate] = useState(false)
      const [color,setcolor] = useState("#C70100")
      const [image,setimage] = useState("lose_reslut.png")
      const [val, setVal] = useState("");
      const [val1,setVal1] = useState("")
      const [defination,setDefination] = useState("")
      const [turn, setTurn] = useState("computer");
      const [startgame,setStartGame] = useState(true)
      const [minutes, setMinutes] = useState(1);
      const [seconds, setSeconds] = useState(30);
      const [countset, setcountset] = useState(2);
      const [showTimer, setShowTimer] = useState(false);
      const [showbutton,setShowButton] = useState(true);
      const [conmsgdown,setconmsgdown] = useState("")
      const [conmsg,setconmsg] = useState("")
      const [word,setWord] = useState("")
      const [gameoverbox,setGameOverBox] = useState(false)
      const [positionflag,setPositionflag] = useState(1)
      const [msg,setMsg] = useState("")
      const [counter,setcounter] = useState(0)
      const [laststore,setlaststore] = useState("")
      const [counter1, setcounter1] = useState(val.length - 1);
      const [turndata,setturndata] = useState("")
      const randomChar = () => {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVW";
          text = possible.charAt(Math.floor(Math.random() * possible.length));
          return text;
      };
  
      
      const startGame = async ()=>{
          let newVal;
      
      
          newVal = randomChar();
            setturndata("")
            setlaststore(newVal.toLowerCase())
          setVal(newVal);
          setTurn("user");
          setPositionflag(1)
        setMinutes(1)
        setSeconds(30)
        setcountset(2)
          setAnyLeftColor("red")
          setAnyRightColor("red")
          setleftcolor("red")
          setrightcolor("#00FF00")
          setShowTimer(true);
          setPositionflag(1)
          setcounter1(newVal.length-1)
          setFunctioncall("")
          setlaststore("")
          setShowButton(false)
          const url3 = "https://ne-games.com/ne_lite/api/userHints?user_id="+window.sessionStorage.getItem("id");
          
          var myHeaders = new Headers();
          myHeaders.append(
          'APPKEY',
          'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
          );
          await fetch(url3,{
              headers: myHeaders
          }).then((response) => response.json())
          .then((response) => {
          
              if (response.status === 200 && response.message === "Success") {
                  window.sessionStorage.setItem("hint_id",response.hint_id);
                  sethintvalue(`Hint ${response.count}`)
               
              }else{
                  sethintvalue("No Hint (0)")
              }
          })
      
          
      }
      // useEffect(()=>{
      //     history.push('/Easy')
      // })
  
      useEffect(() => {
       if(turndata !== ""){
            console.log(turndata)
       }else{
         
            if (countset > 0) {
                if(countset>1){
                  if (minutes === 0) {
                    setcountset(countset - 1);
                  }
                }else{
                  if(seconds === 0){
                    setcountset(countset - 1);
                  }
                }
                
                let myInterval = setInterval(() => {
                  if (seconds > 0) {
                    setSeconds(seconds - 1);
                  }
                  if (seconds === 0) {
                    if (minutes === 0) {
                      clearInterval(myInterval);
                    } else {
                      setMinutes(minutes - 1);
                      setSeconds(59);
                    }
                  }
                }, 1000);
                return () => {
                  clearInterval(myInterval);
                };
              } else {
                setGameOverBox(true)
          let passvalue = ""
          if(val.toLowerCase() === laststore.toLowerCase()){
              passvalue = val.toLowerCase()
          }else if(laststore === ""){
              passvalue = val.toLowerCase()
          }
          else if(laststore !== ""){
              
              passvalue = laststore.toLowerCase()
          }
          const url = "https://ne-games.com/ne_lite/api/level_three?search=" + passvalue.toLowerCase();
         
          const myHeaders = new Headers();
          myHeaders.append(
          'APPKEY',
          'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
          );
          fetch(url,{
              headers: myHeaders
          }).then((response) => response.json())
          .then((response) => {
          
              if (response.status === 200 && response.message === "Success") {
                
                  const word = response.data.word;
                  setVal1(word.toUpperCase())
                  setDefination(response.data.definition)
                 
              }
          })
        
            setclassnm("easylose")
            setimage("lose_reslut.png")
            setcolor("#C70100")
            setMsg("TRY AGAIN")
            setconmsg("Time Out!")
            setconmsgdown("A word that could have been made is")
            setFunctioncall("")
            setAnyLeftColor("red")
            setAnyRightColor("red")
            setleftcolor("red")
            setrightcolor("red")
            }      
        
          
         
         
         
          
          }
      },[minutes,seconds,countset,turn]);
      function getrandomInput(inputStr, randomStr) {
          console.log(inputStr, randomStr);
          let randomStrmap = new Map();
          let inputStrmap = new Map();
          let lastIndex = 0;
          for (let i = 0; i < inputStr.length; i++) {
            for (let j = lastIndex; j < randomStr.length; j++) {
              if (inputStr.charAt(i) === randomStr.charAt(j)) {
                inputStrmap.set(j, String(randomStr.charAt(j)));
                lastIndex = j + 1;
                break;
              } else {
                randomStrmap.set(j, String(randomStr.charAt(j)));
              }
            }
          }
          for (let i = lastIndex; i < randomStr.length; i++) {
            randomStrmap.set(i, String(randomStr.charAt(i)));
          }
          let crunchifyKeys = [];
          crunchifyKeys = Array.from(randomStrmap.keys());
      
          let key = crunchifyKeys[Math.floor(Math.random() * crunchifyKeys.length)];
      
          inputStrmap.set(key, randomStrmap.get(key));
          var str4 =""
          var arr1 = Array.from(inputStrmap.keys()).sort(function(a, b){return a - b})
        for(let i=0;i<arr1.length;i++){
            str4 += inputStrmap.get(arr1[i])
        }
       
       
          return str4
        }
      const handle = (event) => {
        
          
          var value =document.querySelectorAll(".getdata")
          if (turn === "user" && countset > 0) {
          var newVal = event.target.name;
       
          if(functioncall === "Left" && positionflag === 0){
            
              newVal = newVal.concat(val)
              setVal(newVal.toUpperCase());
          }else if(functioncall === "Right" && positionflag === 1){
            
              newVal =  val.concat(newVal)
              setVal(newVal.toUpperCase());
          }else if(functioncall === "AnyLeft"){
              let givenString1 = val;
      
              let stringToInsert = newVal;
              let arrGivenString = [...givenString1];
              if (counter1 === 0) {
                let insertAtPosition = counter1;
                arrGivenString.splice(insertAtPosition + 1, 0, stringToInsert);
                let givenString = arrGivenString.join("");
          
                setVal(givenString.toUpperCase());
              
                setcounter1(givenString.length - 1);
                value[counter1].classList.remove("color");
              } else if (counter1 > 0 && counter1 < val.length - 1) {
                let insertAtPosition = counter1;
                arrGivenString.splice(insertAtPosition + 1, 0, stringToInsert);
                let givenString = arrGivenString.join("");
          
                setVal(givenString.toUpperCase());
              
                setcounter1(givenString.length - 1);
                value[counter1].classList.remove("color");
                
              } else if (counter1 === val.length - 1) {
                let insertAtPosition = counter1;
                arrGivenString.splice(insertAtPosition + 1, 0, stringToInsert);
                let givenString = arrGivenString.join("");
          
                setVal(givenString.toUpperCase());
              
                setcounter1(givenString.length - 1);
             
                value[counter1].classList.remove("color");
              }
              
          }else if(functioncall === "AnyRight"){
              let givenString1 = val;
  
              let stringToInsert = newVal;
              let arrGivenString = [...givenString1];
              console.log(counter)
              if (counter1 === 0) {
                  let insertAtPosition = counter1;
                  arrGivenString.splice(insertAtPosition + 1, 0, stringToInsert);
                  let givenString = arrGivenString.join("");
                  value[counter1].classList.remove("color");
  
                  setVal(givenString.toUpperCase());
                  setcounter1(givenString.length - 1);
              } else if (counter1 < val.length - 1) {
                  let insertAtPosition = counter1;
                  arrGivenString.splice(insertAtPosition + 1, 0, stringToInsert);
                  let givenString = arrGivenString.join("");
  
                  setVal(givenString.toUpperCase());
                  setcounter1(givenString.length - 1);
                  value[counter1].classList.remove("color");
              } else {
                  let insertAtPosition = counter1;
                  arrGivenString.splice(insertAtPosition + 1, 0, stringToInsert);
                  let givenString = arrGivenString.join("");
  
                  setcounter1(givenString.length - 1);
                  setVal(givenString.toUpperCase());
                  value[counter1].classList.remove("color");
              }
          }else{
              newVal = val+newVal
              setVal(newVal.toUpperCase());
          }
        
          
        
      
          setWord(val)
         
          setTurn("computer");
        
  
          
          setShowButton(true)
        
          
          }
      };
  
  
      useEffect(() => {
          startGame()
          
      
      
  
      },[startgame]);
  
  
  
  
  
  
  
  
  
      function handles(){ 
        setAnyLeftColor("red")
        setAnyRightColor("red")
        setleftcolor("red")
        setrightcolor("#00FF00")
          setStartGame(false)
          startGame()
      
      }
      async function Play(){
          let newVal;
          setFunctioncall("")
          setPositionflag(1)
         
        
  
          if(val.length <3){
          
              var url = "https://ne-games.com/ne_lite/api/level_three?search=" + val.toLowerCase();
            
              var myHeaders = new Headers();
              myHeaders.append(
              'APPKEY',
              'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
              );
              await fetch(url,{
                  headers: myHeaders
              }).then((response) => response.json())
              .then((response) => {
                 
                  if (response.status === 200 && response.message === "Success") {
  
                     
                      const word = response.data.word;
                      console.log(word)
                      newVal = getrandomInput(val.toLowerCase(),word.toLowerCase())
                      setlaststore(newVal.toLowerCase())
                      console.log(newVal)
                      setcounter1(newVal.length-1)
                      setVal(newVal.toUpperCase());
                      
                      setMinutes(1)
                      setSeconds(30)
                      setcountset(2)
                      setShowTimer(true);
                      setTurn("user");
                      setShowButton(false)
                      setAnyLeftColor("red")
                      setAnyRightColor("red")
                      setleftcolor("red")
                      setrightcolor("#00FF00")
                  }else if(response.status === 400 && response.message === "Error"){
                      let passvalue = ""
                      if(val.toLowerCase() === laststore.toLowerCase()){
                          passvalue = val.toLowerCase()
                      }else if(laststore === ""){
                          passvalue = val.toLowerCase()
                      }
                      else if(laststore !== ""){
                          
                          passvalue = laststore.toLowerCase()
                      }
                      console.log(passvalue)
                      url = "https://ne-games.com/ne_lite/api/level_three?search=" + passvalue;
                      fetch(url,{
                          headers: myHeaders
                      }).then((response) => response.json())
                      .then((response) => {
                          
                          if (response.status === 200 && response.message === "Success") {
                              setVal1(response.data.word.toUpperCase())
                              setDefination(response.data.definition)
                          }
                      })
                     
                      setclassnm("easylose")
                      setconmsg("There is no word in the NE Games dictionary that could be made from the letters")
                      setconmsgdown("A word that could have been made is")
                      setimage("lose_reslut.png")
                      setcolor("#C70100")
                      setAnyLeftColor("red")
                      setAnyRightColor("red")
                      setleftcolor("red")
                      setrightcolor("#00FF00")
                      setturndata("deded")
                      setMsg("TRY AGAIN")
                      setGameOverBox(true)
                  }
                      
                  
              })
                      
              
              
                              
                      
          }else{
              let url = "https://ne-games.com/ne_lite/api/level_three?search=" + val.toLowerCase();
             
              myHeaders = new Headers();
              myHeaders.append(
              'APPKEY',
              'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
              );
  
              const url1 = "https://ne-games.com/ne_lite/api/check_word?search="+ val.toLowerCase();
              const wordFinder = new Promise(async (resolve,reject)=>{
                  await fetch(url1,{
                      headers: myHeaders
                  }).then((response) => response.json())
                  .then((response) => {
                      resolve(response)
          
                  }).catch((err)=>{
                      reject(err)
                  })
              })
              wordFinder.then(async (result)=>{
                 
                  if(result.status === 200 && result.message === "Success" ){
                     
                      if(result.data.word.length === val.length){
                          if(turn !== "computer"){
                            setconmsgdown("")
                            setDefination(result.data.definition)
                            setGameOverBox(true)
                            setVal1("")
                            setimage("win_reslut.png")
                            setcolor("#00c767")
                            setclassnm("easywinnerexpert")
                            setconmsg("The computer completed the word")
                            setturndata("deded2")
                            setMsg("YOU WIN")
                              setAnyLeftColor("red")
                              setAnyRightColor("red")
                              setleftcolor("red")
                              setrightcolor("#00FF00")

                          }else{
                            setVal("")
                            setconmsg("")
                            setconmsgdown("You completed the word ")
                            setVal1(val)
                            setDefination(result.data.definition)
                            setMsg("TRY AGAIN")
                            setclassnm("easylose")
                            setimage("lose_reslut.png")
                            setcolor("#C70100")
                            setGameOverBox(true)
                            setturndata("dsdsd")
                              setAnyLeftColor("red")
                              setAnyRightColor("red")
                              setleftcolor("red")
                              setrightcolor("#00FF00")
                             
                          }
                      }
                      
  
                  }else{
                      await fetch(url,{
                          headers: myHeaders
                      }).then((response) => response.json())
                      .then((response) => {
                      
                          if (response.status === 200 && response.message === "Success") {
                             
                              const word = response.data.word;
                              console.log(word)
                              newVal = getrandomInput(val.toLowerCase(),word.toLowerCase())
                              console.log(newVal)
                              setcounter1(newVal.length-1)
                              setlaststore(newVal.toLowerCase())
                              setVal(newVal.toUpperCase());
                              setMinutes(1)
                              setSeconds(30)
                              setcountset(2)
                             
                              setShowTimer(true);
                              setTurn("user");
                              setShowButton(false)
                              setAnyLeftColor("red")
                              setAnyRightColor("red")
                              setleftcolor("red")
                              setrightcolor("#00FF00")
                          }else if(response.status === 400 && response.message === "Error"){
                              let passvalue = ""
                              if(val.toLowerCase() === laststore.toLowerCase()){
                                  passvalue = val.toLowerCase()
                              }else if(laststore === ""){
                                  passvalue = val.toLowerCase()
                              }
                              else if(laststore !== ""){
                                  
                                  passvalue = laststore.toLowerCase()
                              }
                              console.log(passvalue)
                              url = "https://ne-games.com/ne_lite/api/level_three?search=" + passvalue;
                              fetch(url,{
                                  headers: myHeaders
                              }).then((response) => response.json())
                              .then((response) => {
                                 
                                  if (response.status === 200 && response.message === "Success") {
                                      setVal1(response.data.word.toUpperCase())
                                      setDefination(response.data.definition)
                                  }
                              })
                             
                              setclassnm("easylose")
                              setconmsg("There is no word in the NE Games dictionary that could be made from the letters")
                              setconmsgdown("A word that could have been made is")
                              setimage("lose_reslut.png")
                              setcolor("#C70100")
                             
                              setMsg("TRY AGAIN")
                              setGameOverBox(true)
                              setturndata("dsds2")
                              setAnyLeftColor("red")
                              setAnyRightColor("red")
                              setleftcolor("red")
                              setrightcolor("#00FF00")
                                          
                          }
                              
                          
                      })
              
                  }
              })
          
              
          }
  
      }
      useEffect(() => {
         
          if (turn !== "computer" && val.length >3) {
              var myHeaders = new Headers();
              myHeaders.append(
              'APPKEY',
              'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
              );
  
              const url1 = "https://ne-games.com/ne_lite/api/check_word?search="+ val.toLowerCase();
              const wordFinder = new Promise(async (resolve,reject)=>{
                  await fetch(url1,{
                      headers: myHeaders
                  }).then((response) => response.json())
                  .then((response) => {
                      resolve(response)
          
                  }).catch((err)=>{
                      reject(err)
                  })
              })
              wordFinder.then(async (result)=>{
                 
                  if(result.status === 200 && result.message === "Success" ){
                     
                      if(result.data.word.length === val.length){
                          if(turn !== "computer"){
                            setconmsgdown("")
                            setDefination(result.data.definition)
                            setGameOverBox(true)
                            setVal1("")
                            setimage("win_reslut.png")
                            setcolor("#00c767")
                            setclassnm("easywinnerexpert")
                            setconmsg("The computer completed the word")
                            setMsg("YOU WIN")
                            setturndata("deded3")
                              setAnyLeftColor("red")
                              setAnyRightColor("red")
                              setleftcolor("red")
                              setrightcolor("#00FF00")
                          }else{
                              
                            setVal1(val)
                            setconmsg("")
                            setVal("")
                            setconmsgdown("You completed the word ")
                            setDefination(result.data.definition)
                            setMsg("TRY AGAIN")
                            setimage("lose_reslut.png")
                            setcolor("#C70100")
                            setclassnm("easylose")
                            setGameOverBox(true)
                            setturndata("fdfd")
                              setAnyLeftColor("red")
                              setAnyRightColor("red")
                              setleftcolor("red")
                              setrightcolor("#00FF00")
                          }
                      }
                      
  
                  }else{
                      const url = "https://ne-games.com/ne_lite/api/level_three?search=" + val.toLowerCase();
                  
                      myHeaders = new Headers();
                      myHeaders.append(
                      'APPKEY',
                      'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
                      );
                      await fetch(url,{
                          headers: myHeaders
                      }).then((response) => response.json())
                      .then((response) => {
                        
                          if (response.status === 200 && response.message === "Success") {
                          
                              const word = response.data.word;
                              setVal1(word.toUpperCase())
                              setDefination(response.data.definition)
                              
                          
                          }
                      })
                      setimage("lose_reslut.png")
                      setcolor("#C70100")
                      setclassnm("easylose")
                      setMsg("TRY AGAIN")
                      setconmsg("There is no word in the NE Games dictionary that could be made from the letters")
                      setconmsgdown("A word that could have been made is")
                     
                      setAnyLeftColor("red")
                      setAnyRightColor("red")
                      setleftcolor("red")
                      setrightcolor("#00FF00")
          
                      
                  }
  
              })
  
          }
      },[turn,val])
  
      function cancel(){
          var value =document.querySelectorAll(".getdata")
          if (counter1 === 0) {
           
              value[counter1].classList.remove("color");
  
              
             
          } else if (counter1 < val.length - 1) {
             
            
             
              value[counter1].classList.remove("color");
          } else {
             
             
             
              value[counter1].classList.remove("color");
          }
          var newVal  =word
          
          setcounter1(val.length-2)
          setVal(newVal);
          setTurn("user");
          setMsg("")
         
          setShowTimer(true)
          setShowButton(false)
          setPositionflag(1)
       
          setFunctioncall("")
          setAnyLeftColor("red")
          setAnyRightColor("red")
          setleftcolor("red")
          setrightcolor("#00FF00")
          
      }
      async function gethintvalue(){
          const url3 = "https://ne-games.com/ne_lite/api/useHints"
          const url4 = "https://ne-games.com/ne_lite/api/userHints?user_id="+window.sessionStorage.getItem("id");
          var myHeaders = new Headers();
          myHeaders.append(
          'APPKEY',
          'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
          );
          var formdata = new FormData();
         formdata.append("user_id",window.sessionStorage.getItem("id"));
         formdata.append("hint_id",window.sessionStorage.getItem("hint_id"))
         formdata.append("match_id",window.sessionStorage.getItem("match_id"))
         formdata.append("round",roundcounter);
        
          await fetch(url3,{
              method: 'POST',
              headers: myHeaders,
              body: formdata,
              redirect: 'follow',
          }).then((response) => response.json())
          .then(async (response) => {
          
              if (response.status === 200 && response.message === "Success") {
                  
                 
                  await fetch(url4,{
                      headers: myHeaders
                  }).then((response) => response.json())
                  .then((response) => {
                  
                      if (response.status === 200 && response.message === "Success") {
                          window.sessionStorage.setItem("hint_id",response.hint_id);
                          sethintvalue("Hint Used")
                      }
                  })
              }
          })
         
  
      }
      function showDiv() {
        var myHeaders = new Headers();
        myHeaders.append(
        'APPKEY',
        'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
        );
        if(msg === "TRY AGAIN"){
            console.log(msg)
            var formdata2 = new FormData();
            formdata2.append('user_id', window.sessionStorage.getItem("id"));
            formdata2.append('match_id', window.sessionStorage.getItem("match_id"));
            formdata2.append('level',roundcounter);
            formdata2.append('length', "0");
            if(val === ""){
                formdata2.append('incorrect_word',val1);
                formdata2.append('correct_word',val1);
            }else{
                formdata2.append('incorrect_word',val);
                formdata2.append('correct_word',val1);
            }
           
            formdata2.append('word_meaning',defination);
           
        
    
            
            const url4 = "https://ne-games.com/ne_lite/api/createMatchLossWord"
            
            
            fetch(url4,{
                method: 'POST',
                headers: myHeaders,
                body: formdata2,
                redirect: 'follow',
                }).then((response) => response.json())
                .then(async (response) => {
                    console.log(response)
                if(response.status === 200){
                    
                    console.log(response)
                
                
                }else{
                    console.log("error")
                }
    
                
                })
           
            var formdata = new FormData();
            formdata.append('id', window.sessionStorage.getItem("mat_id"));
            formdata.append('round',roundcounter);
            formdata.append('status', "0");
            formdata.append('points',"-91");
            console.log(window.sessionStorage.getItem("mat_id"),roundcounter)
    
        
    
            
            const url3 = "https://ne-games.com/ne_lite/api/match/round"
            
            
            fetch(url3,{
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow',
                }).then((response) => response.json())
                .then(async (response) => {
                    console.log(response)
                if(response.status === 200){
                    
                    console.log(response)
                
                
                }else{
                    console.log("error")
                }
    
                
                })
        }else{
            console.log(msg)
            var formdata3 = new FormData();
            formdata3.append('user_id', window.sessionStorage.getItem("id"));
            formdata3.append('match_id', window.sessionStorage.getItem("match_id"));
            formdata3.append('level',roundcounter);
            formdata3.append('length', "0");
            if(val === ""){
                formdata3.append('incorrect_word',val1);
                formdata3.append('correct_word',val1);
            }else{
                formdata3.append('incorrect_word',val);
                formdata3.append('correct_word',val);
            }
           
            formdata3.append('word_meaning',defination);
            
    
        
    
            
            const url5 = "https://ne-games.com/ne_lite/api/createMatchLossWord"
            
            
            fetch(url5,{
                method: 'POST',
                headers: myHeaders,
                body: formdata3,
                redirect: 'follow',
                }).then((response) => response.json())
                .then(async (response) => {
                    console.log(response)
                if(response.status === 200){
                    
                    console.log(response)
                
                
                }else{
                    console.log("error")
                }
    
                
                })
            var formdata1 = new FormData();
            formdata1.append('id', window.sessionStorage.getItem("mat_id"));
            formdata1.append('round',roundcounter);
            formdata1.append('status', "1");
            formdata1.append('points',"+91");
            console.log(window.sessionStorage.getItem("mat_id"),roundcounter)
    
        
    
            
            const url3 = "https://ne-games.com/ne_lite/api/match/round"
            
            
            fetch(url3,{
                method: 'POST',
                headers: myHeaders,
                body: formdata1,
                redirect: 'follow',
                }).then((response) => response.json())
                .then(async (response) => {
                    console.log(response)
                if(response.status === 200){
                    
                    console.log(response)
                
                
                }else{
                    console.log("error")
                }
    
                
                })
        }
        setturndata("")
        setMinutes(1)
        setSeconds(30)
        setcountset(2)
          document.getElementById('welcomeDiv').style.display = "none";
          setRoundCounter(roundcounter+1)
          handles()
          setcounter(0)
          setGameOverBox(false)
         
       
      }
      async function exit(){
        var myHeaders = new Headers();
        myHeaders.append(
          'APPKEY',
          'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
        );
          const url4 = "https://ne-games.com/ne_lite/api/user/exit?user_id="+window.sessionStorage.getItem("id");
          await fetch(url4,{
            headers: myHeaders
        }).then((response) => response.json())
        .then((response) => { 
            if(response.status === 200){
              console.log(response)
               
              
                
            }else{
              console.log("Error")
              
            }
          
          
        })
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
        setMinutes(1)
        setSeconds(30)
        setcountset(2)
          setcounter(0)
          setRoundCounter(1)
      }
  
  
      async function  concede(){
          const url = "https://ne-games.com/ne_lite/api/level_three?search=" + val.toLowerCase();
        
          const myHeaders = new Headers();
          myHeaders.append(
          'APPKEY',
          'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
          );
          await fetch(url,{
              headers: myHeaders
          }).then((response) => response.json())
          .then((response) => {
              console.log(response)
               if (response.status === 200 && response.message === "Success") {
                
                  const word = response.data.word;
                  setVal1(word.toUpperCase())
                  setDefination(response.data.definition)
                 
              }
          })
          var value =document.querySelectorAll(".getdata")
          if (counter1 === 0) {
           
              value[counter1].classList.remove("color");
  
              
             
          } else if (counter1 < val.length - 1) {
             
            
             
              value[counter1].classList.remove("color");
          } else {
             
             
             
              value[counter1].classList.remove("color");
          }
          setGameOverBox(true)
          setimage("lose_reslut.png")
          setcolor("#C70100")
          setclassnm("easylose")
          setMsg("TRY AGAIN")
          setconmsg("You conceded")
          setconmsgdown("A word that could have been made is") 
          setFunctioncall("")
          setPositionflag(1)
          setrightcolor("#00FF00")
          setleftcolor("red")
          setturndata("dsds")
          setAnyLeftColor("red")
          setAnyRightColor("red")
         
        
          
         
      }
      
      async function hint(){
          if(hintvalue !== "No Hint (0)"){
              if(counter<1){
                  const url3 = "https://ne-games.com/ne_lite/api/userHints?user_id="+window.sessionStorage.getItem("id");
                  const url = "https://ne-games.com/ne_lite/api/level_three?search=" + val.toLowerCase();
              
                  var myHeaders = new Headers();
                  myHeaders.append(
                  'APPKEY',
                  'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
                  );
                  await fetch(url,{
                      headers: myHeaders
                  }).then((response) => response.json())
                  .then((response) => {
                  
                      if (response.status === 200 && response.message === "Success") {
                        
                          const word = response.data.word;
                            gethintvalue()
                          sethintword(word)
                          setcounter(counter+1)
                          sethintstate(true)
                          sethintvalue("Hint Used")
                      }
                  })
                  await fetch(url3,{
                      headers: myHeaders
                  }).then((response) => response.json())
                  .then((response) => {
                  
                      if (response.status === 200 && response.message === "Success") {
                          window.sessionStorage.setItem("hint_id",response.hint_id);
                       
                      }
                  })
              }else{
                sethintvalue("Hint Used")
              }
              var value =document.querySelectorAll(".getdata")
        if (counter1 === 0) {
         
            value[counter1].classList.remove("color");

            
           
        } else if (counter1 < val.length - 1) {
           
          
           
            value[counter1].classList.remove("color");
        } else {
           
           
           
            value[counter1].classList.remove("color");
        }
        setAnyLeftColor("red")
        setAnyRightColor("red")
        setleftcolor("red")
        setrightcolor("#00FF00")
          setFunctioncall("Right")
          setPositionflag(1)
          }
          
      }
      function Left(){
          setcounter1(val.length-1)
        var value =document.querySelectorAll(".getdata")
        if (counter1 === 0) {
         
            value[counter1].classList.remove("color");

            
           
        } else if (counter1 < val.length - 1) {
           
          
           
            value[counter1].classList.remove("color");
        } else {
           
           
           
            value[counter1].classList.remove("color");
        }
        setAnyLeftColor("red")
        setAnyRightColor("red")
        setleftcolor("#00FF00")
        setrightcolor("red")
          setFunctioncall("Left")
          setPositionflag(0)
      
         
      }
      function Right(){
        setcounter1(val.length-1)
        var value =document.querySelectorAll(".getdata")
        if (counter1 === 0) {
         
            value[counter1].classList.remove("color");

            
           
        } else if (counter1 < val.length - 1) {
           
          
           
            value[counter1].classList.remove("color");
        } else {
           
           
           
            value[counter1].classList.remove("color");
        }
        setAnyLeftColor("red")
        setAnyRightColor("red")
        setleftcolor("red")
        setrightcolor("#00FF00")
          setFunctioncall("Right")
          setPositionflag(1)
       
        
         
      }
      function AnyLeft(){
          setFunctioncall("AnyLeft")
         
     
          var value = document.querySelectorAll(".getdata");
          if (counter1 === 0) {
            setcounter1(counter1);
            value[counter1].classList.add("color");
          } else if (counter1 > 0 && counter1 < val.length - 1) {
            value[counter1 - 1].classList.add("color");
            value[counter1].classList.remove("color");
            setcounter1(counter1 - 1);
          } else if (counter1 === val.length - 1) {
            setcounter1(counter1 - 1);
            value[counter1 - 1].classList.add("color");
            value[counter1].classList.remove("color");
          }
          setAnyLeftColor("#00FF00")
          setAnyRightColor("red")
          setleftcolor("red")
          setrightcolor("red")
    
      }
      function AnyRight(){
        
          setFunctioncall("AnyRight");
         
          var value = document.querySelectorAll(".getdata");
          console.log(counter1)
          if(val.length === 1){
       
              value[counter1].classList.add("color");
        
            }else{
              if (counter1 === 0) {
                setcounter1(counter1 + 1);
                value[counter1 + 1].classList.add("color");
                value[counter1].classList.remove("color");
              } else if (counter1 < val.length - 1) {
                setcounter1(counter1 + 1);
                value[counter1 + 1].classList.add("color");
                value[counter1].classList.remove("color");
              } else {
                setcounter1(counter1);
                value[counter1].classList.add("color");
              }
            }
            setAnyLeftColor("red")
            setAnyRightColor("#00FF00")
            setleftcolor("red")
            setrightcolor("red")
         
      }



    return (
        <>
        {hintstate?
        <div className='modalmaindiv' id='welcomeDiv1'>
        <div className='modaldiv'>
        <div className=" cardbox " style={{backgroundColor:"#2c509a"}} >
       
        <p className='text-center text-white'><h2>Your Hint</h2></p>
        <br/>
    
        <p className='text-center text-white'><h3>{hintword.toUpperCase()}</h3></p>

        <br/><br/>
<div style={{display: "flex",
    justifyContent: "center"}}>

        <button className='headbutonok' type="text" onClick={()=>{ sethintstate(false)}}>Ok</button>
    </div>
       
        
        
        
        </div>
        </div>
        </div>
        :""}

            
                        <div className='easybg_image'>
                            

                        <div className='layer'>           
                       
                        <div className="flex-container">

<div className="">
<button className='hovcolor mt-1 ml-5' data-bs-toggle="modal" data-bs-target="#staticBackdrop" ><p>EXIT</p></button>
</div>
<div className="">
    <h2 className='text-center mb-2'>NE <i>Lite</i></h2>
    <h4 className='text-center'>Expert Level</h4>
</div>
<div className="">
<button className='hovcolor' style={{float:' right'}} ><p><i className="fas fa-cog"></i></p></button>
</div>


</div>


                            </div>
                            
                            


                        <div className="container">
                            <div className="esaybox">
                            <div className="esayprofilebox">

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="circal">
                    <img src={window.sessionStorage.getItem("image")} className="circalbox1" alt="..."/>
                    </div>
                                        
                                    </div>
                                    <div className="col-md-4">
                                    <h4 className="text-center mt-3" >GAME : {roundcounter}</h4>

                                    <h2 className="text-center mt-5" style={{ visibility: showTimer ? "visible" : "hidden" }}>00:0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>

                                    </div>
                                    <div className="col-md-4">
                                    <div className="circal">
                    <img src={require('../assets/images/newdashcom.png')} className="circalbox1" alt="..."/>
                    </div>
                                    </div>
                                </div>  </div>




                <div className="formboxs2">
                            <h1  className=" easytextbox mt-2" >  {Array.from(val).map((number, keys) => (
            <span className="getdata" key={keys}>{number}</span>
          ))} </h1>
                            </div>

                            


                            {showbutton ? 
                            

                            <div class="playbuttonbox ">
                            <div class="buttonbox2"  onClick={Play}>Play</div>
                            <br/>
                            <div class="buttonbox3" onClick={cancel}>Cancel</div>
                            
                            </div>
                    
                                // <div className="playbuttonbox  ">
                                // <div className="row">
                                //     <div className="col-md-6">
                                //     <div className='buttonbox3' onClick={cancel}>Cancel</div>
                                //     </div>
                                //     <div className="col-md-6">
                                // <div className='buttonbox2' onClick={Play}>Play</div>
                                //     </div>
                                // </div>
                                
                                // </div> 


                    
                        
                            : 
                          
                           
                            <div className="keybordbox mr-5 ml-5">

            

                                {/* <button type='text'  >Left</button>
                                <button type='text' onClick={AnyLeft} >left-</button>
                                <button type='text' onClick={AnyRight}>-right</button>
                           <button type='text' onClick={Right}>Right</button> */}
                           <br/>
                            <div id="keyword">
                            <div className='hintbtbmain1' >
                <button  className='hintbtbcolor' onClick={Left} style={{backgroundColor:leftcolor}} ><i className="fas fa-chevron-left"></i> </button>
                <button  className='hintbtbcolor' onClick={AnyLeft} style={{backgroundColor:anyleftcolor}} ><i class="fas fa-angle-double-left"></i></button>
                <button className='hintbtbcolor   ' onClick={AnyRight} style={{backgroundColor:anyrightcolor}}><i class="fas fa-angle-double-right"></i></button>
                <button className='hintbtbcolor  ' onClick={Right} style={{backgroundColor:rightcolor}}><i className="fas fa-chevron-right"></i></button>
                </div>
                <div className="keyfirstrow" >
                <button className="operator" name='Q' id="clear" onClick={handle}>Q</button>
                <button className="operator" name='W' id="backspace"  onClick={handle} >W</button>
                <button className="operator" name='E' id="%"  onClick={handle} >E</button>
                <button className="operator"  name='R' id="/"  onClick={handle} >R</button>
                <button className="number" name='T' id="7"  onClick={handle} >T</button>
                <button className="number" name='Y' id="8"  onClick={handle} >Y</button>
                <button className="number" name='U' id="9"  onClick={handle} >U</button>
                <button className="operator" name='I' id="*"  onClick={handle} >I</button>
                <button className="number" name='o' id="4" onClick={handle} >O</button>
                <button className="number" name='P' id="5" onClick={handle} >P</button><br/>
                </div>
                <div className="keysecondbox">
                <button className="number" name='A' id="6" onClick={handle} >A</button>
                <button className="operator" name='S' id="-" onClick={handle} >S</button>
                <button className="number" name='D' id="1" onClick={handle} >D</button>
                <button className="number" name='F' id="2" onClick={handle} >F</button>
                <button className="number" name='G' id="3" onClick={handle} >G</button>
                <button className="operator" name='H' id="+" onClick={handle} >H</button>
                <button className="empty" name='J' id="empty" onClick={handle} >J</button>
                <button className="number" name='K' id="0" onClick={handle} >K</button>
                <button className="empty" name='L' id="empty" onClick={handle} >L</button><br/>
                </div>
                <div className='keythirdbox'>
                <button className="operator" name='Z' id="=" onClick={handle} >Z</button>
                <button className="operator" name='X' id="=" onClick={handle} >X</button>
                <button className="operator" name='C' id="=" onClick={handle} >C</button>
                <button className="operator" name='V' id="=" onClick={handle} >V</button>
                <button className="operator" name='B' id="=" onClick={handle} >B</button>
                <button className="operator" name='N' id="=" onClick={handle} >N</button>
                <button className="operator" name='M' id="=" onClick={handle} >M</button>
                </div>
                <div className='hintbtbmain' >
                <button  className='hintbtb'  onClick={hint} >{hintvalue}</button>
                <button className='hintbtb   hintbtb2 ' onClick={concede} >Concede</button>
                </div>
                </div>

                </div> 
               

               
             }
                   


               </div>
           </div>
           

<div>{gameoverbox ? 



<div className='modalmaindiv' id='welcomeDiv'>
<div className='modaldiv'>
<div className=" cardbox " style={{backgroundColor:color}} >
<div className="closebuttonmain mt-4">
    <div className='colsebutton'  >
    
<img src={require(`../assets/images/${image}`)} className="loseimg" alt="..."/>
    
    </div>
    </div>
    <br/>
<h2 className='text-center text-white'>{msg}</h2>

<div className={classnm}>
<div className='mainimg'>
<img src={require('../assets/images/winner_point.png')} className="winnerbtn" alt="..."/>
</div>
</div>

<p className='text-center text-white'>{conmsg}</p>
<h2 className='text-center text-white '>{val}</h2>

<p className='text-center text-white'>{conmsgdown}</p>

<h2 className='text-center text-white '>{val1}</h2>
<p className='text-center text-white mb-2' ><i>{defination}</i></p>
<div className="mainroundbtn" onClick={showDiv}>
<img src={require('../assets/images/nextplaybutton.png')}  className="roundbtn" alt="..."/>
</div>
<div className="sherebox">
<img src={require('../assets/images/shere.png')} className="sherebtn" alt="..."/>

</div>



</div>
</div>
</div>

: ' '}</div>

</div>
<div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      {/* <div className="modal-header"> */}
        {/* <h5 className="modal-title" id="staticBackdropLabel"></h5> */}
        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
      {/* </div> */}
      <div className="modal-body">
       <h3 className='text_color'>Are you Exit</h3>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn buttonboxcopy" data-bs-dismiss="modal">cancel</button>
       <Link to="/Dashbord" > <button type="button" className="btn buttonboxcopy2" data-bs-dismiss="modal" aria-label="Close" onClick={exit}   >Exit</button></Link>
      </div>
    </div>
  </div>
</div>


     
       
          </>
         






    )
}
