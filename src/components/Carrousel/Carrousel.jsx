/* eslint-disable react/prop-types */

//imports
import { useState } from "react"
import arrowLeft from "../../assets/arrow_left.svg"
import arrowRight from "../../assets/arrow_right.svg"
import "../Carrousel/carrousel.scss"

//display picture form "photoList" according to counter/State
//display controls arrows if more than one picture
//State=>displayed picture changed on click
export default function Carrousel ({photoList}) {
    const [index, setIndex] = useState(0)
    function handleClick (event) {
        if(event.target.className === "carrousel__leftClick") {
            index>0 ? setIndex(index - 1) : setIndex(photoList.length-1)
        }
        else {
            index<photoList.length-1 ? setIndex(index + 1) : setIndex(0)
        }
    }
   
    return(
        <div className="carrousel">
            <img src={photoList[index]} className="carrousel__portrait"/>
            {photoList.length>1 && 
                <>
                <img src={arrowLeft} onClick={handleClick} className="carrousel__leftClick"/>
                <img src={arrowRight} onClick={handleClick} className="carrousel__rightClick"/>
                <p> {index+1}/{photoList.length} </p>
                </>
            }
            
        </div>
    )
}

