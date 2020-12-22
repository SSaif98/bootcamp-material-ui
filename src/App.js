import React from 'react';
import Navbar from './Components/navBar.js';
import Login from "./Components/login.js";
import Drawer from './Components/drawer.js';
import Barchart from './Components/barChart';
import Pichart from './Components/piChart'


function App() {
  return (
    <div >
      {/* <Navbar/>
      <Login/>
      <Drawer/> */}
      <Barchart /> 
      <Pichart/>
  </div>
  );
}

export default App;
