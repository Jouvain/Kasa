//imports
import Promise from "../../components/Promise/Promise"
import Card from "../../components/Card/Card"
import paysage from "../../assets/Image source 1.png"
import data from "../../utils/logements.json"
import "../Home/home.scss"

//fetch/import all data once then => each object (i.e "house") (and relevant properties) is passed on Prop to comp.Cards
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