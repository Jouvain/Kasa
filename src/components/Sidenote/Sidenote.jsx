import "../Sidenote/sidenote.scss"
import Notation from "../Notation/Notation"

/* eslint-disable react/prop-types */
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