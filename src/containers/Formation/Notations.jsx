import React from 'react'
import {Table} from 'react-bootstrap';
const Notations = ({id,notations}) => {
    return (
        <div className='info-item'>
            <div className="add-btn-item">
            <button className='btn btn-success'>Ajouter</button>
            </div>
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



            </div>
        </div>
    )
}

export default Notations
