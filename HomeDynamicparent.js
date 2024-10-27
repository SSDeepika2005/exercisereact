import React, { Component } from 'react';
import HomeDynamicChild from './HomeDynamicChild';
import './Dynamic.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

class HomeDynamicparent extends Component {
    state = { name: "" };

    handleEvent = (e) => {
        this.setState({ name: e.target.value });
    }
        funs = () => {
            window.location.href = "/homepage"; // Navigate to homepage
        }
    render() {
        return (
            <>
         
            <div className="page-container">
                  <Stack direction="row" spacing={2}>
                    <div   style={{
                            position: 'absolute', // Position the button absolutely
                            top: '20px',          // 20px from the top of the page
                            left: '20px',         // 20px from the left of the page
                        }}>
                    <Button variant="contained" href="#contained-buttons" onClick={this.funs}>
                        Before
                    </Button>
                    </div>
                </Stack>
                <div className="parent-container">
                    <h2>Example for props and state</h2>
                    <input 
                        onChange={this.handleEvent} 
                        value={this.state.name} 
                        placeholder="Give your feedback" 
                    />
                    <HomeDynamicChild val={this.state.name} />
                </div>
            </div>
           </> 
        );
    }
}

export default HomeDynamicparent;
