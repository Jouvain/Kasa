/* eslint-disable react/prop-types */

//imports
import "../Tag/tag.scss"

//use mapped array "tag" for displaying tags 
export default function Tag ({tag}) {
    
    return(
        <div className="tagsIn">
            { tag.map( (element) => {
                return (
                    <div key={`${element}_${tag.indexOf(element)}`} className="tagsIn__tag" > {element} </div>
                )
            } ) }
        </div>
    )
}