import React from 'react'
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
const App = () => {
  
  const [time,setTime]=useState(new Date());
  
  useEffect(()=>{
    const clock =setInterval(()=>{
    setTime(new Date());
  },1000)
  return ()=>clearInterval(clock);
  },[])
  
  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  )
}

export default App
