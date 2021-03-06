import React, {useState, useEffect} from 'react'
import Axios from "axios"
import BiblioCard from "../../Components/bibliocard/Bibliocard"
import {connect} from 'react-redux';
import {getEpUnit, getThByUnit,getLecByUnit, getEptByUnit} from '../../actions/expunitactions'
import {Tabs,Tab} from "react-bootstrap"
import Form from "../../Components/Formulaire/Formu"
import './Biblioinsp.css'
import OuvFom from '../../Components/Formulaire/FormuOu'
import FormuTom from '../../Components/Formulaire/FormuTom';
import Datable from "../../Components/Datatable/DataTableUnite"
import DatableLec from "../../Components/Datatable/DataTableLecteurs"
import Borrows from './Brrows'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
const BiblioInsp = (props) => {
    const [key, setKey] = useState('emprunts');
    const { match: { params } } = props;
     
      useEffect(() => {
        props.getEptByUnit(params.unit)
        props.getLecByUnit(params.unit)
        props.getExpUnite(params.unit)
        props.getThByUnit(params.unit)
      }, [props.getExpUnite])  
    
    
    return (
        <div>
            <BiblioCard number ={props.exps.length}unite={props.exps[0] ? props.exps[0].unite : ""}/>
            <div style={{  margin:"20px",padding:"15px"}} className="fluid-container">
            <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Liste">
      <div className="data-table-container">
      <h1 className ="title-unite-biblio">Liste des ouvrages de l'unité</h1>
      <Datable data={props.exps} lecteurs={props.lec? props.lec : []} />
      </div>
      </Tab>
      <Tab eventKey="ouvrage" title="Ajouter un Ouvrage">
       <h1 className="add-title title-unite-biblio">Ajouter un nouvel Ouvrage</h1>
       <div className="col-md-6  offset-md-3">
       
       <OuvFom/>
       </div>
      </Tab>
      <Tab eventKey="Tome" title="Ajouter un Tome">
       <h1 className="add-title title-unite-biblio">Ajouter un Tome</h1>
       <div className="col-md-6 offset-md-3">
       <FormuTom/>
       </div>
      </Tab>
      <Tab eventKey="profile" title="Ajouter un Exemplaire">
       <h1 className="add-title title-unite-biblio ">Ajouter un nouvel Exemplaire</h1>
       <div className="col-md-6  offset-md-3">
       <Form/>
       </div>
      </Tab>
      <Tab eventKey="lecteurs" title="Lecteurs">
       <h1 className="add-title title-unite-biblio ">Liste des Lecteurs</h1>
       <div className="col-md-8  offset-md-2">
       <DatableLec data={props.lec} />
       </div>
      </Tab>
      <Tab eventKey="emprunts" title="Emprunts">
       <h1 className="add-title title-unite-biblio ">Liste des Emprunts</h1>
       <div className="col-md-10  offset-md-1">
       <Borrows items={props.ept? props.ept : []}/>
       </div>
      </Tab>
      <Tab eventKey="inventaire" title="Catalague Inventaire">
       <h1 className="add-title title-unite-biblio ">Liste des Thèmes</h1>
       
       <ul>
       {props.th.length ? props.th.map((value) => (
                 <li>{value[1]} <FontAwesomeIcon icon={faDownload} color="green" onClick={()=>{
                  Axios.get('http://localhost:8080/api/biblio/exemplaires/unite/'+params.unit+'/'+value[0], {
                    responseType:'blob',
                    haders:{
                      'Accept':'application/pdf'
                    }
                  })
                  .then(res=>{
                   const file = new Blob([res.data],{type:'application/pdf'});
                  const fileUrl=URL.createObjectURL(file);
                  window.open(fileUrl)
                  })
                  .catch(err=>{
                      console.log(err)
                     
                  })
                }}/>  </li>
              )) : "Base de donnee vide"}
       </ul>
      </Tab>
    </Tabs>
       
      </div>
        </div>
    )
}



const mapStateToProps = ({expunite}) => ({
  loading:expunite.loading,
  error:expunite.error,
  exps:expunite.exp,
  th:expunite.th,
  lec:expunite.lecteurs,
  ept:expunite.emprunts
});

const mapDispatchToProps = {
  getEptByUnit:getEptByUnit,
getExpUnite: getEpUnit,
getThByUnit:getThByUnit,
getLecByUnit:getLecByUnit
};



export default connect(mapStateToProps,mapDispatchToProps)(BiblioInsp);