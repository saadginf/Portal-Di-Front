import React, {useState} from 'react'
import logo from '../../assets/book-default.png'
import Addfile from "./UpFile"
import Axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
const DetailItem = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDownload=()=>{
        Axios.get('http://localhost:8080/api/biblio/ouvrages/downloadFile/'+props.link, {
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
    } 
    return (
       
       <div className='container-detailItem'>
            <div className="classification-item">
                 ----- {props.classification}------
              </div>
            <div className='logo-item'>
                    <img src={logo} alt="default"/>
            </div>
            <div className="details-item">
                <h1>{props.titre}</h1>
                <h3>Auteur(s):</h3>
                {props.auteurs.map((value) => (
                  <strong key={value.id}>{value.libbele} <br></br></strong>
              ))}
              <div className="descrptif-item">
                  <h3>Maison d'édition:</h3>
                  {props.editeur}
              </div>
              <div className="descrptif-item">
                  <h3>Descriptif:</h3>
                  {props.descriptif}
              </div>
              <div className="theme-item">
                  <h3>Thème:</h3>
                {props.theme}
              </div>
              <div className="origine-item">
                  <h3>origine</h3>
                  {props.origine}
              </div>
              
              <div className="type-item">
                  <h3>Type:</h3>
                  {props.type}
              </div>
              <div className="created-item">
                  <h3>Date de Publication:</h3>
                  {props.createdAt}
              </div>
              {!props.link && <div className="btn btn-primary" onClick={handleShow}>
                        Upload
              </div>}
              {props.link && <div className="btn btn-success" onClick={handleDownload}>
              <FontAwesomeIcon icon={faFileDownload}/>      Télecharger: {props.link}
              </div>}

           <Addfile show={show} handleClose={handleClose} title="Ajouter un fichier" ouv={props.id}/>
            </div>
        </div>
    )
}

export default DetailItem
