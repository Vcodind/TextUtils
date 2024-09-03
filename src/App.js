import { useState } from 'react';
import './App.css';

// import About from './componets/About';
import Alert from './componets/Alert';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);;
const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
        },1500);
}


  const togglemode = () =>{
    if(mode === "light"){
      setMode  ("dark")
      document.body.style.backgroundColor = "#030333";
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode ("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
    }
   
  }

  return (
    <> 
      
      {/* <Navbar/> */}
      {/* <About/> */}
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
      <Alert Alert={alert}/>
      <div className="container my-3"> 
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode} />
      </div>
    </> 







    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Icoder
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
