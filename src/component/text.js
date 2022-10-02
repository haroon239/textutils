import React,{useState} from 'react'

export default function Text() {
    // use states
const[text,chnagetText]=useState(" ");
//function 
const uprcase=()=>{
    let upr=text.toUpperCase();
    chnagetText(upr);
}


const lwrcase=()=>{
    let lwr=text.toLowerCase();
    chnagetText(lwr);
}


const empty=()=>{
    chnagetText(" ");
}


const chnge=(event)=>{
chnagetText(event.target.value);
}
    // return 
  return (
    <div className='container'>
        
      <textarea value={text} onChange={chnge}></textarea>
<div>
<button onClick={uprcase}>upperCase</button>
<button onClick={lwrcase}>lowerCase</button>
<button onClick={empty}>Empty</button>
</div>
    </div>
  )
}
