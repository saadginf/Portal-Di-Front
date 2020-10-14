import React from 'react'
import {Table} from 'react-bootstrap';
const Grade = ({id,grades}) => {
    return (
        <div className='info-item'>
            <div className="add-btn-item">
            <button className='btn btn-success'>Ajouter</button>
            </div>
            <div className="title-dtails">
                <h3>Historique des Grades</h3>
            </div>
            <div className="table-details">
        {grades && <Table striped bordered hover>
  <thead>
    <tr>
      <th>Unite</th>
      <th>Date de Nomination</th>
    </tr>
  </thead>
  <tbody>
    
    {grades.length ? grades.map(a=> <tr key={a.id}>
    <td>{a.grade.label}</td>
      <td>{a.dateGrade}</td>
    </tr>):<tr><td colSpan="2" className='maj'>Mise a jour obligatoire</td></tr>}
   
  </tbody>
</Table>}



            </div>
        </div>
    )
}

export default Grade
