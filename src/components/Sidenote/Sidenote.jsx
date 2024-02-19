/* eslint-disable react/prop-types */

//imports
import "../Sidenote/sidenote.scss"
import Notation from "../Notation/Notation"

//display host name and photo + pass needed Props to comp."Notation"
export default function Sidenote ({host, rating, id}) {    
    return (
        <div className="sidenote">
            <div className="sidenote__host">
                <p>{host.name}</p>
                <img src={host.picture} />
            </div>
            <Notation rating={rating} id={id} /> 
        </div>
    )
}