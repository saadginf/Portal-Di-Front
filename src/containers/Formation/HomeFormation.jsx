import React, {useState} from 'react'
import './formation.css'
import imagesuivie from '../../assets/suivie.png'
import imageplan from '../../assets/planif.png'
import imagerh from '../../assets/gestionrh.png'
import ItemRubrique from './ItemRubrique'
import PlanifModal from './PlanifModal'
const HomeFormation = () => {
    const [showplanif, setshowplanif] = useState(false)
    return (
        <>
        <div className="formation-home">
         <h4>Pilotage et Gestion de la formation</h4>
            <ItemRubrique 
            title="Planification" 
            image={imageplan} 
            text="Cette rubrique concerne la planification de tous les stages Militaires"
            onClick={()=>setshowplanif(true)}
            />
         
            <ItemRubrique title="Suivie" image={imagesuivie} text="Cette rubrique concerne le suivie de la formation du personnel de l'arme"/>
         
            <ItemRubrique title="Gestion" image={imagerh} text="Cette rubrique concerne le suivie de la formation du personnel de l'arme" />
         
        </div>

        <PlanifModal show = {showplanif} handleClose={()=>setshowplanif(false)}/>
        </>
    )
}

export default HomeFormation
