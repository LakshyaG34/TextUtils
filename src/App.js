import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>
  {
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("The light mode has been enabled", "Success");
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor='#2c679b';
      showAlert("The dark mode has been enabled", "Success");
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>
  {setAlert({
  msg: message,
    type: type
  })
}
  return (
  <>

<Navbar title ="Textutils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert= {alert}/>
  {/* <Router>
  <Switch>
          <Route path="/about">
            
          </Route>
          <Route path="/">
          
          </Route>
  </Switch>
 </Router> */}
 <About />
 <TextForm/>
 </>
  );
}
export default App;


