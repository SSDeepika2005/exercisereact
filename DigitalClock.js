import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './DigitalClock.css'
export const DigitalClock = () => {
    const[curtime,setCurtime]=useState(new Date())


    useEffect(()=>{
        const timer=setInterval(()=>{
             setCurtime(new Date());
        },1000);
        return ()=> clearInterval(timer)
         
    },[])
  return (
    <div className="box">
   <div  className="Clock">
    <h1>DigitalClock</h1>
   </div>
   <div className="time" style={{color:"red"}}>
   {curtime.toLocaleTimeString()}
   </div>
   <div className="date">
   {curtime.toLocaleDateString('en-US', {
                    weekday: 'long',   // Full name of the weekday (e.g., "Wednesday")
                    year: 'numeric',    // Numeric year (e.g., "2024")
                    month: 'long',      // Full name of the month (e.g., "October")
                    day: 'numeric'      // Day of the month (e.g., "2")
                })}
   </div>
    </div>
  )
}
