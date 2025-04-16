import React from "react";
import Description from "./components/Description";
import Home from "./Home";
import Events from "./components/Events";

function App(){
  //We are using '<> </>" instead of  '<React.Fragment></React.Fragment>'. Both results same
  return <>
    <h1>Welcome to Karyakram</h1>
    <Home></Home>
    <Description></Description>
    <Events></Events>
    </>
};

export default App;
