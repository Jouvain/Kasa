import { useState } from "react"
import arrowLeft from "../assets/arrow_left.svg"
import arrowRight from "../assets/arrow_right.svg"
import "../utils/style/carrousel.scss"


/* eslint-disable react/prop-types */
export default function Carrousel ({photoList}) {
    const leftElement = document.querySelector(".carrousel__leftClick")
    
    
    const [index, setIndex] = useState(0)
    
    function handleClick (event) {
        
        if(event.target === leftElement) {
            index>0 ? setIndex(index - 1) : setIndex(photoList.length-1)
        }
        else {
            index<photoList.length-1 ? setIndex(index + 1) : setIndex(0)
        }
        
    }
    

    return(
        <div className="carrousel">
            <img src={photoList[index]} className="carrousel__portrait"/>
            
            
            {photoList.length>1 && <img src={arrowLeft} onClick={handleClick} className="carrousel__leftClick"/>}
            {photoList.length>1 && <img src={arrowRight} onClick={handleClick} className="carrousel__rightClick"/>}
            {photoList.length>1 && <p> {index+1}/{photoList.length} </p> }
        </div>
    )
}