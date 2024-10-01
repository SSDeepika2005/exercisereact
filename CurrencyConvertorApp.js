import React from 'react'
import { useState } from 'react';
import './CurrencyConvertorApp.css'
import axios from "axios";
import { useEffect } from 'react';
export const CurrencyConvertorApp = () => {
   const[amount,setamount]=useState(1);
   const[fromamt,setFromamt]=useState("");
   const[toamt,setToamt]=useState("");
   const[convertedamt,setConvertedamt]=useState(null)
   const [exchangeRate, setExchangeRate]=useState(null)


   const handleamt=(e)=>{
    const floatamt=parseFloat(e.target.value);
    setamount(isNaN(floatamt)? 0: floatamt)
   }
   useEffect(()=>{
    const exchange=async () =>{
        try{
             let url=`https://api.exchangerate-api.com/v4/latest/${fromamt}`;
             const response = await axios.get(url);
             console.log(response);
             setExchangeRate(response.data.rates[toamt])
        }
        catch(error){
            console.error("Error fetched")
        }
    }
    exchange();
   },[fromamt,toamt]);

   useEffect(()=>{
     if(exchangeRate !==null){
        setConvertedamt((amount*exchangeRate).toFixed(2));
     }

   },[amount, exchangeRate])
   const handleFromamt=(e)=>{
    setFromamt(e.target.value)
   }
   const handletoamt=(e)=>{
    setToamt(e.target.value)
   }
  return (
   
    <div className="container">
       <h1 style={{ textAlign: "center", display: "inline-block", whiteSpace: "nowrap", color:"red" }}>Currency Convertor</h1>

         <div className="images">
            <img src="https://img.freepik.com/free-vector/illustration-characters-exchanging-currency_53876-37251.jpg?uid=R157036013&ga=GA1.1.1779534054.1722068175" alt="currency"/>
         </div>
         <div className="allinputs">
            
            <div className="input">
            <label>Amount</label>
            <input  value={amount} onChange={handleamt}></input></div>
            <div className="f1">
            <label>From Currency:</label><br></br>
            <select id="fromCurrency" value={fromamt} onChange={handleFromamt}>
  <option value="USD">United States Dollar (USD)</option>
  <option value="EUR">Euro (EUR)</option>
  <option value="JPY">Japanese Yen (JPY)</option>
  <option value="GBP">British Pound Sterling (GBP)</option>
  <option value="AUD">Australian Dollar (AUD)</option>
  <option value="CAD">Canadian Dollar (CAD)</option>
  <option value="CHF">Swiss Franc (CHF)</option>
  <option value="CNY">Chinese Yuan (CNY)</option>
  <option value="INR">Indian Rupee (INR)</option>
  <option value="BRL">Brazilian Real (BRL)</option>
  <option value="MXN">Mexican Peso (MXN)</option>
  <option value="ZAR">South African Rand (ZAR)</option>
  <option value="NZD">New Zealand Dollar (NZD)</option>
  <option value="KRW">South Korean Won (KRW)</option>
  <option value="SGD">Singapore Dollar (SGD)</option>
  <option value="SEK">Swedish Krona (SEK)</option>
  <option value="NOK">Norwegian Krone (NOK)</option>
  <option value="RUB">Russian Ruble (RUB)</option>
  <option value="TRY">Turkish Lira (TRY)</option>
  <option value="SAR">Saudi Riyal (SAR)</option>
  <option value="AED">United Arab Emirates Dirham (AED)</option>
 
</select>
</div>
<div className="to2">
  
        <label >To Currency:</label><br></br>
        <select id="toCurrency" value={toamt} onChange={handletoamt}>
  <option value="USD">United States Dollar (USD)</option>
  <option value="EUR">Euro (EUR)</option>
  <option value="JPY">Japanese Yen (JPY)</option>
  <option value="GBP">British Pound Sterling (GBP)</option>
  <option value="AUD">Australian Dollar (AUD)</option>
  <option value="CAD">Canadian Dollar (CAD)</option>
  <option value="CHF">Swiss Franc (CHF)</option>
  <option value="CNY">Chinese Yuan (CNY)</option>
  <option value="INR">Indian Rupee (INR)</option>
  <option value="BRL">Brazilian Real (BRL)</option>
  <option value="MXN">Mexican Peso (MXN)</option>
  <option value="ZAR">South African Rand (ZAR)</option>
  <option value="NZD">New Zealand Dollar (NZD)</option>
  <option value="KRW">South Korean Won (KRW)</option>
  <option value="SGD">Singapore Dollar (SGD)</option>
  <option value="SEK">Swedish Krona (SEK)</option>
  <option value="NOK">Norwegian Krone (NOK)</option>
  <option value="RUB">Russian Ruble (RUB)</option>
  <option value="TRY">Turkish Lira (TRY)</option>
  <option value="SAR">Saudi Riyal (SAR)</option>
  <option value="AED">United Arab Emirates Dirham (AED)</option>
 
</select>

     </div>
     <div className="result">
        <p style={{fontFamily:"bold", fontSize:"30px"}}>{amount} {fromamt} is equal to {convertedamt} {toamt}</p>
     </div>
         </div>
    </div>
    
  )
}
