/* eslint-disable react/prop-types */
//importation des bibliothèques
import { useLocation } from "react-router-dom"


//importation des composants
import Carrousel from "../components/Carrousel"
import Tag from "../components/Tag"
import Collapser from "../components/Collapser"
import Sidenote from "../components/Sidenote"

//importation des utilitaires
import "../utils/style/house.scss"

export default function House () {
    let {state} =  useLocation()
    

    return (
        <div className="house">
            <Carrousel photoList={state.pictures} />
            <div className="house__infotab">
                <div className="house__text">
                    <h2> {state.title} </h2>
                    <p> {state.location} </p>
                    <Tag tag={state.tags} />
                </div>
                <Sidenote host={state.host} rating={state.rating} id={state.id}/>
            </div>
            
            
            <div className="house__collapseLine">
                <Collapser title="Description" classAdd="house__collapser" contenu={state.description} />
                <Collapser title="Équipement" classAdd="house__collapser" contenu={state.equipments} listing={true}/>
            </div>
           
           
           
        </div>
    )
}

// TODO : parcourir tableau des strings Equipments pour <ul> avant passage en prop ?
// TODO : paramétrer import d'images du Carrousel + fonction flèches
// paramétrer composant Sidenote (couper en deux sous-compo ?)