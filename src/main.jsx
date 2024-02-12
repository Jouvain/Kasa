//importation des bibliothèques
import React from 'react'
import ReactDOM from 'react-dom/client'


//importation des composants



import Router from './components/Router.jsx'

//importation des utilitaires
import "./utils/style/fonts.scss"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Router />
    
    
  </React.StrictMode>,
)
