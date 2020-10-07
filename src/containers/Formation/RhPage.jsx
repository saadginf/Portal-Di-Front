import React, {useState} from 'react'
import RhSearch from './RhSearch'
import AddPesonNodal from './AddPersonModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
const RhPage = () => {
    const [showplanif, setshowplanif] = useState(false)
    return (
        <div>
            <div className="card-title-rh">
                <h1>Gestion du Personel</h1>
                <h4>Inspection des Transmissions</h4>
            </div>
            <div className="tabs-rh">
                <button className="btn btn-primary btnAdd"
                onClick={()=>setshowplanif(true)}
                >
                    <span className="addButton">Ajouter</span> 
                    <FontAwesomeIcon icon={faAddressCard} color="white" />
                </button>
                <RhSearch/>

           
            </div>
            <AddPesonNodal show = {showplanif} handleClose={()=>setshowplanif(false)}/>
        </div>
    )
}

export default RhPage
