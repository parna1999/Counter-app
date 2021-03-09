
import React from "react";

class Democomponent extends React.Component{
    constructor(){
        super();
        this.state={
            counter:0
        }
    }
    onClickHandler=() =>{
        this.setState((prevstate)=>({
            counter:prevstate.counter+1
        }))
    }
     getdecrease=() =>{
        this.setState((prevstate)=>({
            counter:prevstate.counter-1
        }))
    }
    render(){
        return(
            
            <div class="container">
            <div style={{textAlign:"center"}}>
            <div class="one">Counter App</div>
            <div class="two">{this.props.data}</div>
            <div class="three">It will update= {this.state.counter}</div>
            <button onClick={this.onClickHandler}>Increase by 1</button>
            <div class="divider"/>
            <button onClick={this.getdecrease}>Decrease by 1</button>
            </div>
        </div>
        )
    }

}
export default Democomponent;