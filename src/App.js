import React from "react";
import Democomponent from "./Components/DemoComponent";
import './App.css';
const arr=[1];

class App extends React.Component{
  render(){
    return(
      <>
      {arr.map(item=> <Democomponent data={item}/>)}
      </>
    )
  }
}



export default App;
