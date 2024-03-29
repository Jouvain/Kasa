/* eslint-disable react/no-unescaped-entities */

//imports
import { Link } from "react-router-dom"
import picture from "../../assets/404.svg"
import "../Error/error.scss"

export default function Error () {
    return (
        <div className="error">
        <img src={picture} alt="404 écrit en rouge, gras et stylisé" />
        <h1> Oups ! La page que vous demandez n'existe pas. </h1>
        <Link to="/" > Retourner sur la page d'accueil </Link>
        </div>
    )
}