//imports
import Promise from "../../components/Promise/Promise.jsx"
import Collapser from "../../components/Collapser/Collapser.jsx"
import "../About/about.scss"
import paysage from "../../assets/Image source 2.png"
import data from "../../utils/principes.json"

//data/principles fetched/imported once then => properties passed on Prop
export default function About () {
    let text = ""

    return (
        <div className="about">
            <Promise picture={paysage} text={text} />
            <div className="about__collapseBox">
                {data.map((object) => {
                    return <Collapser key={object.id} title={object.principe} content={object.annonce} classAdd="large"/>
                }
                )}
            </div>
        </div>
    )
}