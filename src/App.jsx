import { useState } from 'react'
import './App.css'

function App() {
  let [theme , setTheme] = useState("Dark")
  let [bg , setBg] = useState('')
  let [textcolor , setTextColor] = useState('')
  let [icon, setIcon] = useState('🔆')

  function handleTheme(){
    if(theme=='Dark'){
      setTheme('Light')
      setBg("#FFFFFF")
      setTextColor('black')
      setIcon('🌙')
    }
    else{
      setTheme('Dark')
      setBg('#242424')
      setTextColor('white')
      setIcon('🔆')
    }
  }
  return(
    <>
      <div className='container' style={{ color: `${textcolor}`, backgroundColor: `${bg}`, transition: "all 0.5s ease-in-out" }}>
        <h1>Choose Theme</h1>
        <button onClick={handleTheme}>{icon}</button>
        <br />
        <h2>{theme}</h2>
      </div>
    </>
  )
}

export default App
