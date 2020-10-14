import React from 'react'
import {Table} from 'react-bootstrap';
const Esolde = ({id,esoldes}) => {
    return (
        <div className='info-item'>
            <div className="add-btn-item">
            <button className='btn btn-success'>Ajouter</button>
            </div>
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



            </div>
        </div>
    )
}

export default Esolde
