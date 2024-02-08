//importation de bibliothèques


//importation de composants
import Promise from "../components/Promise"
import Collapser from "../components/Collapser"

//importation d'utilitaires
import "../utils/style/about.scss"
import paysage from "../assets/Image source 2.png"
import data from "../utils/principes.json"


export default function About () {
    let text = ""

    
    console.log(data[0].principe)

    return (
        <div className="about">
            <Promise picture={paysage} text={text} />
            <div className="about__collapseBox">
                {data.map((object) => {
                    return <Collapser key={object.id} title={object.principe} contenu={object.annonce} classAdd="about__collapser"/>
                }
                )}
            </div>
        </div>
    )
}