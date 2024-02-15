import "../Card/card.scss"
import { Link } from "react-router-dom"


/* eslint-disable react/prop-types */
export default function Card ({title, content}) {
    
    
 return (
    <Link to="/house" state={content} className="link">
    <article className="card">
        
        <img src={content.cover} />
        
        <p> {title} </p>
    </article>
    </Link>
 )
}