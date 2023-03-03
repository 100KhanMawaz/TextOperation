import React, {useState}  from 'react'
export default function TextForm(props) {
  const [text,setText]=useState('Enter text here');
  
 const handleUpClick =()=>{
    console.log(text);
    console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.AlertChaiye("Converted to Upper Case","success")
 }
 const handleLowClick =()=>{
    console.log(text);
    console.log("Lowercase was clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.AlertChaiye("Converted to Lower Case","success")

  }
 const Capitalize =()=>{
    console.log(text);
    console.log("Capitalize was clicked");
   let i=0;
   let str=" ";
    for(i=0;i<text.length;i++)
    {
      if(text[i]==" ")
      {
        str+=` ${text[i+1].toUpperCase()}`;
        i++;
      }
      else if(i==0)
      {
        str+=text[i].toUpperCase();
      }
      else{
        str+=text[i];
      }
    }
    setText(str);
    props.AlertChaiye("Capitalized","success")

  }
  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  console.log(text);
  return(
    <>
      <div className="container my-4" >
<div className="mb-3 " >
  <label htmlFor="textarea" className="form-label" > {props.topic}</label>
  <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} value={text} id="textarea" rows="8"></textarea>
</div>       
 <button className="btn btn-danger mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
 <button className="btn btn-danger mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
 <button className="btn btn-danger mx-2" onClick={Capitalize}>Capitalize</button>
</div>  
<div className="container">
  <h1>What u are writing is Below</h1>
  <p>Total number of alphabets {text.length} total number of words {text.split(" ").length}</p>
    <p>You can read this in {text.split(" ").length*0.008} minutes</p>
    <h1>Preview</h1>
    <p>{text}</p>
</div>
</>
);
}
