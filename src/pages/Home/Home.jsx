//importation de bibliothèques


//importation de composants
import Promise from "../../components/Promise/Promise"
import Card from "../../components/Card/Card"

//importation d'utilitaires
import paysage from "../../assets/Image source 1.png"
import data from "../../utils/logements.json"
import "../Home/home.scss"

export default function Home () {
    return (
        <div className="home">
            < Promise picture={paysage} text="Chez vous, partout et ailleurs" />
            <div className="gallery">
                { data.map( (object) => {
                    
                    return (
                        <Card key={object.id} title={object.title} content={object} />
                    )
                } ) } 
            </div>
        </div>
    )
} 