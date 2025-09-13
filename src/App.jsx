import { useState } from 'react'

import {Route,Routes, } from "react-router-dom" 


import React from 'react'
// import Navebar from "./components/navebar.jsx"
// import Main from "./components/Main.jsx"
// import Footer from  "./components/Footer.jsx"
// import PageTwoNav from  "./components/pageTwo-nav.jsx"
import Page2 from  "./Page2.jsx"
import Page1 from  "./Page1.jsx"
import Page3 from  "./Page3.jsx"
import Application from "./applications.jsx"


export default function App() {
  return (
    <>
      
      <Routes>
            <Route path='/' element = {<Page1 />} />
            <Route path='/Page2' element = {< Page2 />} />
            <Route path='/Page3' element = {< Page3 />} />
            <Route path='/applications' element = {< Application />} />

           </Routes>
          </>
    
  )
}
























// export default function App() {
//   return (
//     <>
//     <Navebar />
//     <Main />
//     <Footer />
//      <PageTwoNav />
//     </>
//   )
// }
