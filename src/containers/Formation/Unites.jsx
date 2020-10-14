import React, {useState} from 'react'
import {Table} from 'react-bootstrap';
import AddUniteModal from './Modals/AddUniteModal';

const Unites = ({id,unites}) => {
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
                <h3>Historique des Unites</h3>
            </div>
            <div className="table-details">
        {unites && <Table striped bordered hover>
  <thead>
    <tr>
      <th>Unite</th>
      <th>Debut</th>
      <th>fin</th>
    </tr>
  </thead>
  <tbody>
    
    {unites.length ? unites.map(a=> <tr key={a.value}>
    <td>{a.unite.label}</td>
      <td>{a.dateDebutAff}</td>
      <td>{a.dateFinAff}</td>
    </tr>):<tr><td colSpan="3" className='maj'>Mise a jour obligatoire</td></tr>}
   
  </tbody>
</Table>}
<AddUniteModal show={show} handleClose={close} id={id}/>


            </div>
        </div>
    )
}

export default Unites
