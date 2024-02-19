
//importation des bibliothèques
import { useLocation } from "react-router-dom"



//importation des composants
import Carrousel from "../../components/Carrousel/Carrousel"
import Tag from "../../components/Tag/Tag.jsx" 
import Collapser from "../../components/Collapser/Collapser"
import Sidenote from "../../components/Sidenote/Sidenote"



//importation des utilitaires
import "../House/house.scss"

export default function House () {
    let {state} =  useLocation()
    //let state = "OUPS"
    
    
    
    return (
        
            <div className="house">
                <Carrousel photoList={state.pictures} />
                <div className="house__infotab">
                    <div className="house__text">
                        <h1> {state.title} </h1>
                        <p> {state.location} </p>
                        <Tag tag={state.tags} />
                    </div>
                    <Sidenote host={state.host} rating={state.rating} id={state.id}/>
                </div>
                
                
                <div className="house__collapseLine">
                    <Collapser title="Description" classAdd="medium" contenu={state.description} />
                    <Collapser title="Équipement" classAdd="medium" contenu={state.equipments} listing={true}/>
                </div>
            
            
            
            </div>
        
    )
}

