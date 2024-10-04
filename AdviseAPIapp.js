
import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import './AdviseAPIapp.css'


export const AdviseAPIapp = () => {
    const[advise,setadvise]=useState("Advise API")
    const[count,setcount]=useState(0);
    async function handleEvent(){
        const res= await fetch("https://api.adviceslip.com/advice")
        const data=await res.json();
         setadvise(data.slip.advice)
         setcount(count+1);
    }
  return (
    <div className='container'>
        <h1>{advise}</h1>
         <Button variant="contained" style={{backgroundColor:"blueviolet"}}disableElevation onClick={handleEvent}>
            
     Words Of Wisdom
     
    </Button>
    <div className="counter">
    <h2>{count}</h2>
    </div>
    </div>
  )
}
