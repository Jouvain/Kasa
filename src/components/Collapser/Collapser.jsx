/* eslint-disable react/prop-types */

import "../Collapser/collapser.scss"
import icon from "../../assets/arrow_up.svg"
import iconAlt from "../../assets/arrow_down.svg"
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
            <div className="containCollapser">
                <div className={`collapser  ${classAdd}`} onClick={reversingArrow} >
                    <h2> {title} </h2>
                    <img src={arrow} />
                </div>
            
                <p className= {arrow === iconAlt ? `revealerOn ${classAdd}` : undefined} > {arrow === iconAlt && displayContent } </p>
            </div>
        </>
       
    )
} 