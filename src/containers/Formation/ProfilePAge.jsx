import React, {useEffect, useState} from 'react'
import DefaultUser from '../../assets/Default-welcomer.png'
import {Table,Tab,Row,Col,Nav} from 'react-bootstrap';
import Axios from 'axios'

const ProfilePAge = (props) => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        Axios.get('http://localhost:8080/api/rh/perso/getById/'+props.match.params.id)
        .then(res=>{
          
        setItem(res.data)
        console.log(res.data)
        setLoading(false)
        })
        .catch(err=>{
            console.log(err)
           
        })
        console.log(props.match.params.id)
       }, []);
    return (
        <>
      {!loading &&  <div>
            <div className="card-profile">
            </div>
            <div className="profile-intern">
                <div className="img-container">
                <img src={DefaultUser} alt="" className='profile-page-userimg'/>
                <h4>{item.gradeActuelle.label}</h4>
                <h2>{item.nom+' '+item.prenom}</h2>
                </div>
                <div className="info-profile">
                    <div className="direct-info">
    <Table striped bordered hover variant="dark">
  <tbody>
    <tr>
      <td>CIN</td>
      <td>{item.cin}</td>
    </tr>
    <tr>
      <td>MLE</td>
      <td>{item.mle}</td>
    </tr>
    <tr>
      <td>Date de Naissance</td>
      <td>{item.dateNaissance}</td>
    </tr>
    <tr>
      <td>Date d'entrée en service</td>
      <td>{item.dateEntreeService}</td>
    </tr>
    <tr>
      <td>Unité</td>
      <td>{item.dateEntreeService}</td>
    </tr>
    <tr>
      <td>Fonction</td>
      <td>{item.uniteActuelle.label}</td>
    </tr>
    <tr>
      <td>Spécialité</td>
      <td>{item.fonctionActuelle ? item.fonctionActuelle.label : "AD"}</td>
    </tr>
    <tr>
      <td>Origine</td>
      <td>{item.origine.label}</td>
    </tr>
    <tr>
      <td>Aptitude Physique</td>
      <td>
          {item.apptitudePhysique && <div className="aptitudphy-ok"></div>}
          {!item.apptitudePhysique && <div className="aptitudphy-nok"></div>}
      </td>
    </tr>
  </tbody>
</Table>
                    </div>
                    <div className="multi-info">
                  
<Tab.Container id="left-tabs-example" defaultActiveKey="1">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column nav-info">
        <Nav.Item>
          <Nav.Link eventKey="1">Fonctions</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2">Unités</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3">Grades</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="4">E.Solde</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="5">Notations</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="6">Pénalisations</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="1">
          <h2>PAge1</h2>
        </Tab.Pane>
        <Tab.Pane eventKey="2">
        <h2>PAge2</h2>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
                    </div>
                </div>
            </div>
        </div> }
        {loading && <h2>Loading</h2>}
        </>
    )
}

export default ProfilePAge
