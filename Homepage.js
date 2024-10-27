import React, { Component } from 'react';
import './External.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

class Homepage extends Component {
  state = {
    count: 0,
    name:'uncover'
       
  };

  handleAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleSub = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleUncover = () => {
    this.setState({ name: 'Never underestimate ur potential' });
  };

  handleEvents = () => {
    window.location.href = '/homepage2'; // Navigate to Volunteer page
  };
 
  render() {
    return (
      <>
        <div className='flex-containerdiv'>
          <h1>WELCOME TO HOMEPAGE</h1>
          <div className='inner-box'>
            <h1 className='font-lobster'>COUNTER APP</h1>
            <div className="counter-number">
              <button onClick={this.handleAdd} className='butcolor'>+</button>
              {this.state.count}
              <button onClick={this.handleSub} className='butcolor'>-</button>
            </div>
          </div>
          <div className='inner-box'>
            <button onClick={this.handleUncover} className='font'>{this.state.name}</button>
            <h3 className='light-text'>The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders</h3>
          </div>
        </div>
        <Stack direction="row" spacing={2} style={{textAlign:'center'}}>
          <Button variant="contained" onClick={this.handleEvents} >view more</Button>
        </Stack>
       
      </>
    );
  }
}

export default Homepage;
