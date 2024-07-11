import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/home/index';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Home/>
    </>
  )
}

export default App
