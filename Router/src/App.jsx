import { useState } from 'react'
import {Route,Routes,Link} from "react-router-dom" 
import Home from "./Home"
import NotHome from './NotHome'
import './App.css'

function App() {
   return(
    <>
     <nav>
      <ul>
        <li><Link  to="/" >home</Link></li>
        <li><Link  to="/NotHome" >Nothome</Link></li>
      </ul>
     </nav>
     <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/NotHome' element = {< NotHome />} />
     </Routes>
    </>
   )
}

export default App
