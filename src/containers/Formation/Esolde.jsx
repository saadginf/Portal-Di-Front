import React, {useState} from 'react'
import {Table} from 'react-bootstrap';
import AddEsModal from './Modals/AddEsModal';

const Esolde = ({id,esoldes}) => {
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
                <h3>Historique des E.Soldes</h3>
            </div>
            <div className="table-details">
        {esoldes && <Table striped bordered hover>
  <thead>
    <tr>
      <th>Unite</th>
      <th>Date d'obtention</th>
    </tr>
  </thead>
  <tbody>
    
    {esoldes.length ? esoldes.map(a=> <tr key={a.id}>
    <td>{a.echelleSolde.label}</td>
      <td>{a.dateEchelle}</td>
    </tr>):<tr><td colSpan="2" className='maj'>Mise a jour obligatoire</td></tr>}
   
  </tbody>
</Table>}

<AddEsModal show={show} onHide={close} id={id}/>


            </div>
        </div>
    )
}

export default Esolde
