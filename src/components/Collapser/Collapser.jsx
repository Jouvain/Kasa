/* eslint-disable react/prop-types */

//imports
import "../Collapser/collapser.scss"
import icon from "../../assets/arrow_up.svg"
import iconAlt from "../../assets/arrow_down.svg"
import { useState } from "react"

//display a "titled" collapser who hide/reveal the "content"
//"classAdd" is a styling complement i.e "small/medium/large" width
//if revealed "content" is a array, Prop "listing" = True for adapted display
export default function Collapser ({title, classAdd, content, listing}) {
    //initial icon displayed via State, change on click
    const [arrow, setArrow] = useState(icon)
    function reversingArrow () {
        arrow === icon ? setArrow(iconAlt) : setArrow(icon);
    }
    let displayContent 
    if(listing){
        displayContent = (
            <ul>
                { Array.from(content).map( (element) => {
                    return <li key={ `${element}_${content.indexOf(element)}` } > {element} </li>
                } ) }
            </ul>
        )
    }
    else {
        displayContent = content
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