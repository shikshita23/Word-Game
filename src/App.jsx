import './App.css'
import React, { useState } from 'react';
import Dashboard from './components/Dashboard'

function App() {
  const[component,setComponent]=useState(true)
  const handleClick=()=>{
    setComponent(false)
  }
  return (
    <div className='home'>
      {component?(
        <>
          <div className='Heading'>Welcome To Word Game</div>
        <p>Are you ready</p>
        <div className='startButton'> <button className="getStartButton" onClick={handleClick}>Lets Get started</button> </div> </>
        ) :(
           <Dashboard/>)}
    </div>
  )
}

export default App