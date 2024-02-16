//importation de bibliothèques


//importation de composants
import Promise from "../../components/Promise/Promise.jsx"
import Collapser from "../../components/Collapser/Collapser.jsx"

//importation d'utilitaires
import "../About/about.scss"
import paysage from "../../assets/Image source 2.png"
import data from "../../utils/principes.json"


export default function About () {
    let text = ""

    
    

    return (
        <div className="about">
            <Promise picture={paysage} text={text} />
            <div className="about__collapseBox">
                {data.map((object) => {
                    return <Collapser key={object.id} title={object.principe} contenu={object.annonce} classAdd="large"/>
                }
                )}
            </div>
        </div>
    )
}