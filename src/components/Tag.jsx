import "../utils/style/tag.scss"

/* eslint-disable react/prop-types */
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