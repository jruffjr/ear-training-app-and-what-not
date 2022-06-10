import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Startpage from './components/Startpage';
import Menupage from './components/Menupage';
import Final from './components/Final';
import './components/Main.scss'



function App() {
  



  return (
    <div className="fullscreen">
      <Startpage/>
      <Menupage/>
      <Final/>
  
    </div>

    
    
      

      
      
      

    
      
    
  );
}

export default App;
