/* eslint-disable react/prop-types */

//imports
import "../Card/card.scss"
import { Link } from "react-router-dom"

//display ".title" and "cover" picture of the received "content" object
//link to housepage with all "content" object in locationState for further use
export default function Card ({content}) {
    
 return (
    <Link to="/house" state={content} className="link">
    <article className="card">
        
        <img src={content.cover} />
        <p> {content.title} </p>
        
    </article>
    </Link>
 )
}

