//imports
import { useLocation } from "react-router-dom"
import Carrousel from "../../components/Carrousel/Carrousel"
import Tag from "../../components/Tag/Tag.jsx" 
import Collapser from "../../components/Collapser/Collapser"
import Sidenote from "../../components/Sidenote/Sidenote"
import "../House/house.scss"

//object/content available in stateLocation via comp.Card
//object/content.properties used for display or Prop
export default function House () {
    let {state} =  useLocation()
    
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
                    <Collapser title="Description" classAdd="medium" content={state.description} />
                    <Collapser title="Équipement" classAdd="medium" content={state.equipments} listing={true}/>
                </div>
            </div>
    )
}

