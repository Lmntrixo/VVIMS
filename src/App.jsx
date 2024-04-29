import { useState } from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Subheader from './components/subheader'
import CardSection from './components/cardSection'
import Section from './components/section/section'
import { motion } from 'framer-motion';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Header/>
        <div className="flex">
        <Sidebar/>
        <Section/>
        </div>
        
       
      
      
    </>
  )
}

export default App
