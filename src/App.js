import Dark_Mode from "./Components2/Dark_Mode";
import NavBar from "./Components2/NavBar";
import TextForm from "./Components2/TextForm";
import React, { useState } from 'react'
import Alert from "./Components2/Alert";
function App(){
  const [Mode, setMode] = useState('light')
  const [alert, setalert] = useState(null);
  const [Color, setcolor] = useState(null)
  const changecolor=(str2)=>{
    setcolor(str2);
  }
  const showAlert=(message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1600);
  }
  const toggleMode=()=>{
    switch(Mode)
    {
      case "light":
      setMode("dark");
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled","success");
      break;
    
    case "dark":
      setMode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled","success");
    break;
    default:
  }
}
  return(
  <> 
  
<NavBar mode={Mode} togglemode={toggleMode} />
<Alert alert={alert}/>
<Dark_Mode/>
<TextForm topic="Kuch to likho" mode={Mode} AlertChaiye={showAlert}/>
  </>
    );
    
  
}
export default App