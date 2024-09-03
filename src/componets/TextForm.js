import React, { useState } from 'react';

export default function TextForm(props) {
    const handleupclick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText) 
        props.showAlert("converted to Uppercase","success");
    }
 
    const handleloclick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lowercase","success");
    }
    const handlecleclick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText); 
        props.showAlert("Text Cleared!","success");
    }
    const handlecopyclick = ()=>{ 
        // console.log("i am copy");
        var text= document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copide to Clipboaed!","success");
    }
    const handleExsoaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText (newText.join(" "))
        props.showAlert("Extra spaces removed!","success");
    }
    
const handleonchange = (event)=>{
    // console.log("Onchange was clicked" + text);
    setText(event.target.value); 
}




const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'black'}} onChange={handleonchange} id='mybox' rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to upper case</button>
            <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to lower case</button>
            <button className="btn btn-primary mx-2" onClick={handlecleclick}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handlecopyclick}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExsoaces}>handleExsoaces</button>
        </div>
        <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
            <h2 className='my-3'>Your text summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}


  