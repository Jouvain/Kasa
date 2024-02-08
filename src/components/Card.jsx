import "../utils/style/card.scss"
import { Link } from "react-router-dom"


/* eslint-disable react/prop-types */
export default function Card ({title, content}) {
    
    
 return (
    <Link to="/house" state={content} className="link">
    <article className="card">
        <p> {title} </p>
    </article>
    </Link>
 )
}