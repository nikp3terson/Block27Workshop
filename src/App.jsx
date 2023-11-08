import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [token, setToken] =useState(null);
  
  return (
    <>
     <h1>whats good dawg?</h1>
     <Authenticate token={token} setToken={setToken}/>
     <SignUpForm token={token} setToken={setToken}/>
    </>
  )
}

export default App
