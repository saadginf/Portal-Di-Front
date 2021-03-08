import React, {useState} from 'react'
import {Table} from 'react-bootstrap';
import AddFonctionModal from './Modals/AddFonctionModal';
const Fonctions = ({id,fonctions}) => {
  const [show, setShow] = useState(false);
const close = () => setShow(false);
const handleShow = () => setShow(true);
    return (
        <div className='info-item'>
            <div className="add-btn-item">
            <button className='btn btn-success'
            onClick={handleShow}
            >Ajouter</button>
            </div>
            <div className="title-dtails">
                <h3>Historique des Fonctions</h3>
            </div>
            <div className="table-details">
        {fonctions && <Table striped bordered hover>
  <thead>
    <tr>
      <th>Fonction</th>
      <th>Debut</th>
      <th>fin</th>
    </tr>
  </thead>
  <tbody>
    
    {fonctions.length ? fonctions.map(a=> <tr key={a.id}>
    <td>{a.fonction.label}</td>
      <td>{a.dateDebutAff}</td>
      <td>{a.dateFinAff}</td>
    </tr>):<tr><td colSpan="3" className='maj'>Mise a jour obligatoire</td></tr>}
   
  </tbody>
</Table>}
<AddFonctionModal show={show} onHide={close} id={id}/>


            </div>
        </div>
    )
}

export default Fonctions
