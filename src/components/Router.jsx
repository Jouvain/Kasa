import { BrowserRouter, Routes, Route } from "react-router-dom";

//importation des composants
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Error from '../pages/Error.jsx'
import House from '../pages/House.jsx'
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"


export default function Router () {
    return(
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
    )
}