import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import './Bmiapp.css'
export default function Bmiapp() {
    const[height, setheight]=useState("")
    const[weight, setweight]=useState("")
    const[bmival, setbmi]=useState(null)
    const[bmistatus, setbmistatus]=useState(null)
    const[error,seterror]=useState("")
    const handlechange=(e)=>{
        setheight(e.target.value)
    }
    const handleweight=(e)=>{
        setweight(e.target.value)
    }
    const calculateBmi=()=>{
        const isvalidheight=/^\d+$/.test(height);
        const isvalidweight=/^\d+$/.test(weight);
        if(isvalidheight && isvalidweight)
        {
            
               const hm=height/100;
               const bmival=weight/(hm*hm);
               setbmi(bmival.toFixed(2));
               seterror("")
               if(bmival < 18.5)
               {
                setbmistatus("Under Weight")
               }
               else if(bmival>=18.5 && bmival < 24.9)
               {
                setbmistatus("Normal Weight");
               }
               else if(bmival>=25 && bmival<29.9)
               {
                setbmistatus("Overweight")
               }
               else{
                setbmistatus("Obese")
               }
        }
        else{
            setbmi(null);
            setbmistatus(null);
            seterror("Please enter a valid value")
        }
    }
    const clearall=()=>{
        setheight("")
            setweight("")
            setbmistatus("")
            setbmi("")
        
    }
  return (
    <div className="Main">
        <div className="container">
            <div className="images"><img src="https://img.freepik.com/premium-vector/body-mass-index-concept-obese-woman-stands-scales-indicator-bmi-improper-nutrition_118813-23362.jpg?size=626&ext=jpg&uid=R157036013&ga=GA1.1.1779534054.1722068175&semt=ais_hybrid" alt="bmi"/></div>
         <div className="blocks">
          <div className="heading"> <h1>BMI CALCULATOR</h1></div> 
          <p style={{color:"red"}}>{error}</p>
           <div className="height" htmlFor="height" ><label>Height (cm)</label><br></br>
        
            <input className="height-input" value={height} onChange={handlechange}></input>
            </div> 

           <div className="weight" html for="weight"> <label>Weight (kg)</label><br></br>


            <input className="weight-input" value={weight} onChange={handleweight}></input>
            </div> 
            <div className="button">
            <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={calculateBmi}>Calculate</Button>
      
      <Button variant="contained" href="#contained-buttons" style={{backgroundColor:"red"}} onClick={clearall}>
        Clear
      </Button>
    </Stack>
    </div>
   {bmival!==null && (
     <div className="result">
     <p style={{fontSize:"18px", fontFamily:"bold"}}>YOUR BMI IS: {bmival}</p>
     <p>    Status: {bmistatus}</p>
         </div>
   )}
    </div>
        </div>

        </div> 
  )
}
