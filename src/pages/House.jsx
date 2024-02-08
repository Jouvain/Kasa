/* eslint-disable react/prop-types */
//importation des bibliothèques
import { useLocation } from "react-router-dom"


//importation des composants
import Carrousel from "../components/Carrousel"
import Tag from "../components/Tag"
import Collapser from "../components/Collapser"
import Sidenote from "../components/Sidenote"

//importation des utilitaires

export default function House () {
    let {state} =  useLocation()
    console.log(state)

    return (
        <div>
            <Carrousel photoList={state.pictures} />
            <h2> {state.title} </h2>
            <p> {state.location} </p>
            <Tag tag={DataTransfer.tags} />
           <Collapser title="Description" classAdd="" contenu={state.description} />
           <Collapser title="Équipement" classAdd="" contenu={state.equipments} />
           <Sidenote />
           
        </div>
    )
}
// TODO : mapper et itérer les Tags 
// TODO : parcourir tableau des strings Equipments pour <ul> avant passage en prop ?
// TODO : paramétrer import d'images du Carrousel + fonction flèches
// TODO : mapper et itérer les Tags 
// paramétrer composant Sidenote (couper en deux sous-compo ?)