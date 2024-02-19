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
    let content = notation.map( (element, index) => {
        console.log(index)
        if (element === "star") {
            return (<img src={activeStar} key={`${index}_${id}`} />)
        }
        else {
            return (<img src={inactiveStar} key={`${index}_${id}`} />)
        }
        
    } )
    return (
        <div>
           {content}
        </div>
    )
}

