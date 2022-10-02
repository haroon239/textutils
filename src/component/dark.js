import React,{useState} from 'react'

export default function Dark() {

    const [text, changeText]=useState("light");
function chnge(){
    if(text==='light'){
    document.body.style.background='blue';
    changeText("white");
    }
    else{
    document.body.style.background='white';
changeText("light");
    }
}


const chngeyellow=()=>{
  if(text==='light'){
    console.log("helooooooo");
    document.body.style.background='yellow';
    changeText("white");
    }
    else{
    document.body.style.background='white';
changeText("light");
    }
}


const chngepink=()=>{
  if(text==='light'){
    console.log("helooooooo");
    document.body.style.background='pink';
    changeText("white");
    }
    else{
    document.body.style.background='white';
changeText("light");
    }
}

return (
    <div>
<label className="switch" >
  <input type="checkbox" onClick={chnge} onChange={chnge}/>
  <span className="slider round"></span>
</label>


<label className="switch" >
  <input id='yellowee' type="checkbox" onClick={chngeyellow} onChange={chngeyellow}/>
  <span className="slider round"></span>
</label>

<label className="switch" >
  <input id='pinkee' type="checkbox" onClick={chngepink} onChange={chngepink}/>
  <span className="slider round" ></span>
</label>

    </div>
  );
}

