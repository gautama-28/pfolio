import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react";
import HomePage from './pages/HomePage'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    <Footer/>
    <Analytics />
    </BrowserRouter>

  )
}

export default App
