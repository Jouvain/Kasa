import "../utils/style/sidenote.scss"
import Notation from "./Notation"

/* eslint-disable react/prop-types */
export default function Sidenote ({host, rating, id}) {
    console.log(host)
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