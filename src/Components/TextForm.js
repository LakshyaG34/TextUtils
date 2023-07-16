import React, {useState} from 'react';
export default function TextForm(props)
{
  const handleUpclick=() =>
  {
    let Text1= text.toUpperCase();
    setText(Text1)
  }
  const handlelwclick =()=>
  {
    let Text2 = text.toLowerCase();
    setText(Text2)
  }
  const handleonchange=(event)=>
  {
    setText(event.target.value)
  }
  const [text, setText]= useState('');
  const [myStyle, setMyStyle] = useState(
    {
      color : 'black',
      backgroundColor : 'white' 
    }
  )
  const testcase1 = () =>
  {
    if ( myStyle.color === 'black')
    {
      setMyStyle({
        color: 'white',
        backgroundColor:'black',
    })
    }
    else{
      setMyStyle({
        color: 'black',
        backgroundColor:'white'
    })
    }
  }
  return(
      <>     
  <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={testcase1}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change to Dark mode</label>
  </div>
    <div>
      <div className="mb-3">
      <h1>{props.heading}</h1>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleonchange} style={myStyle}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handlelwclick}>Lowercase</button>
    </div>
    <div className="container my-5">
      <h1>Your text summary</h1>
      <p>
        Number of words = {text.split(" ").length} and number of characters is = {text.length}
      </p>
    </div>
    </>
  )
}