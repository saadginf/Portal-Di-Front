import React, {useState} from 'react'
import BorrowItem from './ItemBroowed'
import RetrunModal from './ReturnModal'
const Brrows = (props) => {
  const [idemprunt, setIdemprunt] = useState(0);
const [show, setShow] = useState(false);
const close = () => setShow(false);
const handleShow = () => setShow(true);
    return (

        <>
        <div className="borrows">
          {props.items.length ? props.items.map(x=><BorrowItem 
          lecteur={x.emprunteur.grade.label+" "+x.emprunteur.nomPrenom}
          rayonId={x.exemplaire.rayonId}
          dateDebut={x.dateDebut}
          onClick={()=>{
            handleShow();
            setIdemprunt(x.id)
          }}
          />) : "Aucun Livre n'est emprunté"   }
        </div>
        <RetrunModal show={show} handleClose={close} idemprunt={idemprunt}/>
        </>
    )
}

export default Brrows
