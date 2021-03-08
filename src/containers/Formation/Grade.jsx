import React, {useState} from 'react'
import {Table} from 'react-bootstrap';
import AddGradeModal from './Modals/AddGradeModal';

const Grade = ({id,grades}) => {
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

<AddGradeModal show={show} onHide={close} id={id}/>


            </div>
        </div>
    )
}

export default Grade
