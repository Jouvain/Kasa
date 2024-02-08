//importation des bibliothèques
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//importation des composants
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'
import House from './pages/House.jsx'
import Header from "./components/Header.jsx"
import Footer from './components/Footer.jsx'

//importation des utilitaires
import "./utils/style/fonts.scss"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/house' element={<House />} />
            <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    
  </React.StrictMode>,
)
