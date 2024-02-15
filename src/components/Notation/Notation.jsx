import activeStar from "../../assets/star_active.svg"
import inactiveStar from "../../assets/star_inactive.svg"

/* eslint-disable react/prop-types */
export default function Notation ({rating, id}) {
    let note = Number(rating)
    const notation = []
    const antiNotation = []
    let i = 0
    while (i < note) {
        notation.push("star")
        i=i+1    
    }
    
    while (i < 5) {
        antiNotation.push("antiStar")
        i=i+1
    }
    
    return (
        <div>
           { notation.map((star)=> {
                return <img src={activeStar} key={`${star}_${id}`} />
           } )}
           { antiNotation.map((antiStar)=> {
                return <img src={inactiveStar} key={`${antiStar}_${id}`} />
           } )}

        </div>
    )
}