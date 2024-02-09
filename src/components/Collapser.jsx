/* eslint-disable react/prop-types */

import "../utils/style/collapser.scss"
import icon from "../assets/arrow_up.svg"
import iconAlt from "../assets/arrow_down.svg"
import { useState } from "react"

export default function Collapser ({title, classAdd, contenu, listing}) {
    const [arrow, setArrow] = useState(icon)
    function reversingArrow () {
        arrow === icon ? setArrow(iconAlt) : setArrow(icon);
    }
    
    let displayContent 
    if(listing){
        displayContent = (
            <ul>
                { Array.from(contenu).map( (element) => {
                    return <li key={ `${element}_${contenu.indexOf(element)}` } > {element} </li>
                } ) }
            </ul>
        )
    }
    else {
        displayContent = contenu
    }
    
 
    

    return (
        <>
            <div className={`collapser  ${classAdd}`}>
                <h2> {title} </h2>
                <img src={arrow} onClick={reversingArrow}/>
            </div>
           
            <div className= {arrow === iconAlt ? "revealerOn" : undefined} > {arrow === iconAlt && displayContent } </div>
        </>
       
    )
} 