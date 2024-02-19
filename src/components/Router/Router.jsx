//imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home.jsx"
import About from '../../pages/About/About.jsx'
import Error from '../../pages/Error/Error.jsx'
import House from '../../pages/House/House.jsx'
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"

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