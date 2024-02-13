//importation de bibliothèques

//importation de composants

//importation d'utilitaires
import LogoBW from "../../assets/LOGOBandW.svg"
import "../Footer/footer.scss"


export default function Footer () {
    return (
        <footer className="footer">
            <img src={LogoBW} alt="logo de Kasa alternatif, une maison blanche sur fond noir" />
            <p> © 2020 Kasa. All rights reserved </p>
        </footer>
    )
}