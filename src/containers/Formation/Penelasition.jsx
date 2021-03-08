import React,{useState} from 'react'
import {Table} from 'react-bootstrap';
import AddPenModal from './Modals/AddPenModal';
const Penalisations = ({id,penalisations}) => {
  const [show, setShow] = useState(false);
  const close = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className='info-item'>
            <div className="add-btn-item">
            <button className='btn btn-success'
            onClick={handleShow}
            >Ajouter</button>            </div>
            <div className="title-dtails">
                <h3>Historique des Penalisations</h3>
            </div>
            <div className="table-details">
        {penalisations && <Table striped bordered hover>
  <thead>
    <tr>
    <th>Jours</th>
    <th>Motif</th>
    <th>Date</th>
    </tr>
  </thead>
  <tbody>
    
    {penalisations.length ? penalisations.map(a=> <tr key={a.value}>
      <td>{a.nbrJour}</td>
      <td>{a.motif}</td>
      <td>{a.datePenalisation}</td>
    </tr>):<tr><td colSpan="3" className='maj'>Mise a jour obligatoire</td></tr>}
   
  </tbody>
</Table>}
<AddPenModal show={show} onHide={close} id={id}/>



            </div>
        </div>
    )
}

export default Penalisations
