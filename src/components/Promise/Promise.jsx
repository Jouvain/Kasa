/* eslint-disable react/prop-types */

//imports
import "../Promise/promise.scss"

//display "text" on a banner-like "picture" 
export default function Promise ({picture, text}) {
    return (
        <div className="promise" >
             <img src={picture} />
             <p> {text} </p>
        </div>
    )
}