import React from 'react'
import Item from "./Item"

import Image5 from '../../assets/EOAProofPoints.jpg'
import './sCard.css'
const SecondCard = () => {
    return (
        <div className="s-card">
          <div>
           <Item uri={Image5} txt="Ce portail Web est une porte d'entrée commune à un éventail de services centrés sur le domaine de l'instruction et la formation
           de l'Arme des Transmissions des Forces Armées Royales
           "/>  
           
            </div>
        
        </div>
    )
}

export default SecondCard
