import React, { Component } from 'react'

export class Homepage3 extends Component {
    state={name:"", reg:"", class:"", dept:"", email:"", phone:"", submit:true}
    handleName=(e)=>{
          this.setState({name:e.target.value})
    }
    
    handlereg=(e)=>{
        this.setState({reg:e.target.value})
    }

    

  render() {
    return (
      <div>
             <form>
                <input onChange={this.handleName}></input>
                <input onChange={this.handlereg}></input>
             </form>

      </div>
      
    )
  }
}

export default Homepage3