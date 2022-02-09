import React,{useState, useEffect} from 'react'

import { Link } from 'react-router-dom'


export default function Easy() {
    
//   const history = useHistory();
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
    const [time, setTime] = useState(59);
    const [showTimer, setShowTimer] = useState(false);
    const [showbutton,setShowButton] = useState(true);
    const [conmsgdown,setconmsgdown] = useState("")
    const [conmsg,setconmsg] = useState("")
    const [word,setWord] = useState("")
    const [gameoverbox,setGameOverBox] = useState(false)
    const [turndata,setturndata] = useState("")
    
    const [msg,setMsg] = useState("")
    const [counter,setcounter] = useState(0)

    const randomChar = () => {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVW";
        text = possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    const startGame = async ()=>{
        let newVal;
    
    
        newVal = randomChar();
        console.log(newVal)
        setVal(newVal);
        setTurn("user");
        setturndata("")
        setTime(59);
        setShowTimer(true);
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
                sethintvalue(`Hint (${response.count})`)
             
            }else{
                sethintvalue(`No Hint (${response.count})`)
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
        if (time > 0) {
        const interval = setInterval(() => {
            setTime(time - 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
        } else if (time === 0) {
           
        setGameOverBox(true)
        const url = "https://ne-games.com/ne_lite/api/level_one?search=" + val.toLowerCase();
        console.log("concede",val.toLowerCase(), url);
        const myHeaders = new Headers();
        myHeaders.append(
        'APPKEY',
        'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
        );
        fetch(url,{
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
        
        setclassnm("easylose")
        setimage("lose_reslut.png")
        setcolor("#C70100")
        setMsg("TRY AGAIN")
        setconmsg("Time Out!")
        setconmsgdown("A word that could have been made is")
      
        
        }
    }
   

    },[time,turn]);

    const handle = (event) => {
        console.log(turn)
        if (turn === "user" && time > 0) {
        var newVal = event.target.name;
        newVal = val+newVal
        console.log(val)
        console.log(newVal)
        setWord(val)
        setVal(newVal.toUpperCase());
      
        setTurn("computer");
        
      

        
        setShowButton(true)
        
        }
    };


    useEffect(() => {
        startGame()
        
    
    

    },[startgame]);









    function handles(){ 
        setStartGame(false)
       
        startGame()

    
    }
    async function Play(){
        let newVal;
        

       

        if(val.length <3){
        
            var url = "https://ne-games.com/ne_lite/api/level_one?search=" + val.toLowerCase();
            console.log(val.toLowerCase(), url);
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
                    newVal = val + word[val.length];
                    setVal(newVal.toUpperCase());
                    setTime(59);
                    setturndata("")
                    setShowTimer(true);
                    setTurn("user");
                    setShowButton(false)
                }else if(response.status === 400 && response.message === "Error"){
                   
                    url = "https://ne-games.com/ne_lite/api/level_one?search=" + val.slice(0,val.length-1).toLowerCase();
                    fetch(url,{
                        headers: myHeaders
                    }).then((response) => response.json())
                    .then((response) => {
                        console.log(response)
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
                    setturndata("ds")
                    setMsg("TRY AGAIN")
                    setGameOverBox(true)
                }
                    
                
            })
                    
            
            
                            
                    
        }else{
            let url = "https://ne-games.com/ne_lite/api/level_one?search=" + val.toLowerCase();
            console.log(val.toLowerCase(), url);
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
                console.log(result)
                if(result.status === 200 && result.message === "Success" ){
                    console.log("check user",result.data.word," ",result.data.word.length, "  ",val.length," ",val)
                    if(result.data.word.length === val.length){
                        if(turn !== "computer"){
                            setconmsgdown("")
                            setDefination(result.data.definition)
                            setGameOverBox(true)
                            setVal1("")
                            setimage("win_reslut.png")
                            setcolor("#00c767")
                            setclassnm("easywinner")
                            setconmsg("The computer completed the word")
                            setturndata("ds")
                            setMsg("YOU WIN")
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
                            setturndata("ds")
                            
                        }
                    }
                    

                }else{
                    await fetch(url,{
                        headers: myHeaders
                    }).then((response) => response.json())
                    .then((response) => {
                    
                        if (response.status === 200 && response.message === "Success") {
                            console.log(response.data.word.length, "  ",val.length)
                            const word = response.data.word;
                            console.log(word)
                            newVal = val + word[val.length];
                            setVal(newVal.toUpperCase());
                            setTime(59);
                            setturndata("")
                            setShowTimer(true);
                            setTurn("user");
                            setShowButton(false)
                        }else if(response.status === 400 && response.message === "Error"){
                          
                            url = "https://ne-games.com/ne_lite/api/level_one?search=" + val.slice(0,val.length-1).toLowerCase();
                            fetch(url,{
                                headers: myHeaders
                            }).then((response) => response.json())
                            .then((response) => {
                                console.log(response)
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
                            setturndata("ds")
                        
                                        
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
                console.log(result)
                if(result.status === 200 && result.message === "Success" ){
                    console.log("check",result.data.word," ",result.data.word.length, "  ",val.length," ",val)
                    if(result.data.word.length === val.length){
                        if(turn !== "computer"){
                            setconmsgdown("")
                            setDefination(result.data.definition)
                            setGameOverBox(true)
                            setVal1("")
                            setimage("win_reslut.png")
                            setcolor("#00c767")
                            setclassnm("easywinner")
                            setconmsg("The computer completed the word")
                            setMsg("YOU WIN")
                            setturndata("ds")
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
                              setturndata("ds")
                        }
                    }
                    

                }else{
                    const url = "https://ne-games.com/ne_lite/api/level_one?search=" + val.toLowerCase();
                    console.log("concede",val.toLowerCase(), url);
                    myHeaders = new Headers();
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
                    setimage("lose_reslut.png")
                    setcolor("#C70100")
                    setclassnm("easylose")
                    setMsg("TRY AGAIN")
                    setconmsg("There is no word in the NE Games dictionary that could be made from the letters")
                    setconmsgdown("A word that could have been made is")
                 
                    
                }

            })

        }
    },[turn,val])

    function cancel(){
       
        var newVal  =word
        setVal(newVal);
        setTurn("user");
        setMsg("")
       
        setShowTimer(true)
        setShowButton(false)

        
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
       console.log(window.sessionStorage.getItem("id"),window.sessionStorage.getItem("hint_id"),window.sessionStorage.getItem("match_id"),roundcounter)
        await fetch(url3,{
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
        }).then((response) => response.json())
        .then(async (response) => {
        
            if (response.status === 200 && response.message === "Success") {
                
                console.log(response)
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
        setcounter(0)
        setRoundCounter(1)
    }


    async function  concede(){
        const url = "https://ne-games.com/ne_lite/api/level_one?search=" + val.toLowerCase();
        console.log("concede",val.toLowerCase(), url);
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
        setTime(0)
        setimage("lose_reslut.png")
        setcolor("#C70100")
        setclassnm("easylose")
        setMsg("TRY AGAIN")
        setconmsg("You conceded")
       
        
        setturndata("dsds")
        
       
    }
    
    async function hint(){
        if(hintvalue !== "No Hint (0)"){
            if(counter<1){
                const url3 = "https://ne-games.com/ne_lite/api/userHints?user_id="+window.sessionStorage.getItem("id");
                const url = "https://ne-games.com/ne_lite/api/level_one?search=" + val.toLowerCase();
                console.log(val.toLowerCase(), url);
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
                        console.log(response.data.word.length, "  ",val.length)
                        const word = response.data.word;
                        console.log(word)
                        sethintword(word)
                        setcounter(counter+1)
                        sethintstate(true)
                       
                        gethintvalue()
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
        }
        
    }




    return (
        <>
       

            
                        <div className='easybg_image'>
                            

                        <div className='layer'>           
                       
                        <div className="flex-container">

<div className="">

<div className=' mt-1 ml-5' data-bs-toggle="modal" data-bs-target="#staticBackdrop" >    <img src={require('../assets/images/game_eee.png')} className="extbtn" alt="..."/> </div>
</div>
<div className="">
    <h2 className='text-center mb-2'>NE <i>Lite</i></h2>
    <h4 className='text-center'>Easy Level</h4>
</div>
<div className="">
<div className='' style={{float:' right'}} ><img src={require('../assets/images/newdashsetting.png')} className="extbtn" alt="..."/> </div>
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

                                    <h2 className="text-center mt-5" style={{ visibility: showTimer ? "visible" : "hidden" }}>00:00:{time}</h2>

                                    </div>
                                    <div className="col-md-4">
                                    <div className="circal">
                    <img src={require('../assets/images/newdashcom.png')} className="circalbox1" alt="..."/>
                    </div>
                                    </div>
                                </div>  </div>




                <div className="formboxs2">
                            <h1  className=" easytextbox mt-2" > { val  }</h1>
                            </div>

                            


                            {showbutton ? 
                            

                        
                    
                                <div className="playbuttonbox  ">
                                {/* <div className="row"> */}
                                    {/* <div className="col-md-6"> */}
                                <div className='buttonbox2' onClick={Play}>Play</div>
                                    <br/>
                                    <div className='buttonbox3' onClick={cancel}>Cancel</div>
                                    {/* </div> */}
                                    {/* <div className="col-md-6"> */}
                                    {/* </div> */}
                                {/* </div> */}
                                
                                </div> 
                    
                        
                            : 
                          
                           
                            <div className="keybordbox mr-5 ml-5">
                            <div id="keyword">
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
