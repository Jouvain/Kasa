import "../Promise/promise.scss"

/* eslint-disable react/prop-types */
export default function Promise ({picture, text}) {
    return (
        <div className="promise" >
             <img src={picture} />
             <p> {text} </p>
        </div>
    )
}