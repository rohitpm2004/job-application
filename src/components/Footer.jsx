import React from 'react'
import Data from "./Data"
import "./Footer.css"
import Arr from "./Arr"
export default function Footer() {

 let entry = Arr.map((e,i)=>{
  return (
    <Data key = {i} {...e}/>
  )
 })


  return (
    <>
    <div className='box-data'>
    {entry}
    </div>
   
    </>
  )
}


{/* <div> */}

{/* 

  {}

         <Data role = "Fullstack Developer" 
       location ="mumbai"
        required = "React and TypScript and Node.js" 
        about = "Build performate,accessible UIs for Web Apps"
        work = "Prodect managet"
        / >



       <Data role = "Frontend Engineer(react)" 
       location ="Hyderabad"
        required = "React and TypScript" 
        about = "Build performate,accessible UIs for Web Apps"
        work = "Prodect managet"
        / >
       {/* </div> */}

     {/* <div> */}
       {/* <Data role = "Web Disign(react)" 
       location ="Delhi"
        required = "Html and Css" 
        about = "Build performate,accessible UIs for Web Apps"
        work = "Team Leader"
        / >


        
             <Data role = "Fullstack Developer" 
       location ="Bengaluru"
        required = "React and TypScript and Node.js" 
        about = "Build performate,accessible UIs for Web Apps"
        work = "Teamleder"
        / > */} 