import React, {Component} from "react";
export default class App extends Component{
state={
count:0,
step:1
}

increaseCount =()=> {
  const {count,step}=this.state
  this.setState({
    count:count + step
  })
}
increaseStep =()=> {
  const {count,step}=this.state
  this.setState({
    step:step + 1
  })
}
render(){
  const {count,step}=this.state
  return(
    <div>
      <h1>{count} metr</h1>
      <button onClick={this.increaseCount}>Yurish:</button>
      <h1>Qadam kattaligi: {step}</h1>
      <button onClick={this.increaseStep}>Qadam kengaytirish: </button>
    </div>
  )
}
}