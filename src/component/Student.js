import React, {useState} from 'react'

export default function Student() {
    const[text, setText]=useState("hello text");


    function funupper(){
        console.log("i am changed " + text);
        let newtext=text.toUpperCase();
        setText(newtext);

    }

    let funlower=()=>{
        console.log("i am changed " + text);

         let newtext=text.toLowerCase();
         setText(newtext);
    }

    let funclear=()=>{
        console.log("i am changed " + text);
let newtext=" ";
setText(newtext);

    }
    let changefun=(event)=>{
setText(event.target.value);
    }
  return (
    <div className='std'>

      <textarea value={text} onChange={changefun}></textarea>
      <div>
      <button onClick={funupper} > Upper case</button>
      <button onClick={funlower}> Lower case</button>
      <button onClick={funclear}> clear text</button>



      </div>
    </div>
  );
}
