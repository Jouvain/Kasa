//imports
import { Link } from "react-router-dom"
import Logo from "../../assets/LOGO.svg"
import "../Header/header.scss"

export default function Header () {
    return (
        <header className="header" >
            <img src={Logo} alt="logo de Kasa, une maison rouge sur fond blanc" />
            <nav>
                <Link onClick={underlining} className="header__link" to="/" > Accueil </Link>
                <Link onClick={underlining} className="header__link" to="/about" > A Propos </Link>
            </nav>
        </header>
    )
}

//underline clicked "Link" + remove underline from others
function underlining(event) {
    const links = document.querySelectorAll(".header__link")
    links.forEach((element) => element.setAttribute("class", "header__link"))
    event.target.classList.add("underlined")
}
