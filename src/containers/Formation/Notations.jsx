import React,{useState} from 'react'
import {Table} from 'react-bootstrap';
import AddNoteModal from './Modals/AddNoteModal';
const Notations = ({id,notations}) => {
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
                <h3>Historique des Notations</h3>
            </div>
            <div className="table-details">
        {notations && <Table striped bordered hover>
  <thead>
    <tr>
      <th>Date</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    
    {notations.length ? notations.map(a=> <tr key={a.value}>
      <td >{a.dateNote}</td>
      <td>{a.note}</td>
    </tr>):<tr><td colSpan="2" className='maj'>Mise a jour obligatoire</td></tr>}
   
  </tbody>
</Table>}

<AddNoteModal show={show} onHide={close} id={id}/>


            </div>
        </div>
    )
}

export default Notations
