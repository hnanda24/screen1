import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MenuBar from './Components/MenuBar'
import MainBody from './Components/MainBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen flex'>
      <MenuBar/>
      <MainBody/>
    </div>
  )
}

export default App
