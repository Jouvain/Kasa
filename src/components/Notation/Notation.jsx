import activeStar from "../../assets/star_active.svg"
import inactiveStar from "../../assets/star_inactive.svg"

/* eslint-disable react/prop-types */
export default function Notation ({rating, id}) {
    let note = Number(rating)
    const notation = []
    let i = 0
    while (i < 5) {
        i<note ? notation.push("star") : notation.push("antiStar") 
        i=i+1
    }
    let content = notation.map( (element) => {
        if (element === "star") {
            return (<img src={activeStar} key={`${notation.indexOf(element)}_${id}`} />)
        }
        else {
            return (<img src={inactiveStar} key={`${notation.indexOf(element)}_${id}`} />)
        }
        
    } )
    return (
        <div>
           {content}
        </div>
    )
}

