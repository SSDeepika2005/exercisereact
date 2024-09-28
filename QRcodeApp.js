
import * as React from 'react';
import { useState } from 'react';
import './QRcode.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export const QRcodeApp = () => {
  const [imgs,setimgs] =useState()
  const[load,setload]=useState(false)
  const[qrdata,setqrdata]=useState("joes")
  const[qrsize,setqrsize]=useState("150")
  const [generated, setGenerated] = useState(false);
/* const handleEvent=()=>{
      
      
  }*/
 const handledownload=()=>{
  fetch(imgs)
  .then((response) => response.blob())
  .then((blob)=>{
    const link= document.createElement("a");
    link.href=URL.createObjectURL(blob);
    link.download="qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
 }
 const handlesize=(e)=>{
         setqrsize(e.target.value)
 }
 const handlechange=(e)=>{
      setqrdata(e.target.value)
 }
  async function handleEvent(){
    setload(true)
    try{
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
      setimgs(url);
      setGenerated(true)
    }
    catch(error)
    {
      console.error("Error generated QR code")
    }
    finally{
      setload(false)
    }
  }
  return (
    <div className="app-container">
      <h2 className='stys'>QR CODE GENERATOR</h2>
      {load && <p>Please wait...</p>}
      {imgs && <img className="qrimg-desing" src={imgs} alt=""/>}  
        <div className="inputs">
          <div className='text1'>
          <label type="text"  className='sty'>Data for QR code</label><br></br>
          <input type="text" onChange={handlechange} placeholder="QR"></input><br></br>
          </div>
          <div className="text2">
        <label htmlFor="sizeInput" className='sty'>Size of QR</label><br></br>
        <input placeholder="Enter image size" onChange={handlesize}></input>
        </div>
        </div>
       <div class="button">
        <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleEvent}disabled={load || generated}>Generate QR Code</Button>
        <Button variant="contained" style={{background:"green"}}onClick={handledownload}>Download QR Code</Button>
        </Stack>
       </div>
           <div style={{textAlign:"center"}}>
            <footer>
            <p className='sty'>Designed by S.S Deepika</p>
            </footer>
            
           </div>
        </div>
  )
}
