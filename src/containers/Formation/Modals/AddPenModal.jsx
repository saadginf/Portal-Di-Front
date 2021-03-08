import React from 'react'
import { useForm } from "react-hook-form";
import {Modal, Button}  from 'react-bootstrap'
import { useState } from 'react';
import Axios from 'axios'
import scc from '../../../assets/success.png'
const AddPenModal = (props) => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const { handleSubmit, register, errors,control } = useForm();
  const onSubmit = values =>{

    let data ={
     
        personel:{
            id:values.personel
        },
        motif:
           values.motif
        ,
        datePenalisation:values.datePenalisation,
        nbrJour:values.nbrJour
        }

    console.log(data)
   Axios.post('http://localhost:8080/api/rh/perso/addPen', data)
    .then(res=>{
       console.log(res.data) 
      setSuccess(true)
   })
 .catch(err=>{
       console.log(err)
       setError('Lecteur déjà existant')
    })

  }
  return (
            <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={props.show} onHide={props.onHide}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
             {success? <h2>Ajouté avec succés</h2>:<h2>Ajouter une fonction</h2>}
            </Modal.Title>
          </Modal.Header>
         
          <Modal.Body>
        { !success && <form onSubmit={handleSubmit(onSubmit)}>
      
        <input
            className="form-control"
            name="personel"
            placeholder="Personel"
            value={props.id}
            readOnly
            hidden
            type="text"
            ref={register({
              required: "Champ Obligatoire",
            })}
          />
            <div className="forme-group form-fields">
        <label htmlFor="nbrJour">Sanction:</label>
          <input
            className="form-control"
            name="nbrJour"
            placeholder="Sanction"
            type="number"
            ref={register({
              required: "Champ Obligatoire",
            })}
          />
            <div className="text-danger ">
            {errors.nbrJour && errors.nbrJour.message}
            </div>
            </div>
            <div className="forme-group form-fields">
        <label htmlFor="motif">Motif:</label>
          <input
            className="form-control"
            name="motif"
            placeholder="Motif"
            type="text"
            ref={register({
              required: "Champ Obligatoire",
            })}
          />
            <div className="text-danger ">
            {errors.motif && errors.motif.message}
            </div>
            </div>
        <div className="forme-group form-fields">
        <label htmlFor="datePenalisation">Date Penalisation:</label>
          <input
            className="form-control"
            name="datePenalisation"
            placeholder="Date"
            type="date"
            ref={register({
              required: "Champ Obligatoire",
            })}
          />
            <div className="text-danger ">
            {errors.datePenalisation && errors.datePenalisation.message}
            </div>
            </div>
          
      
    
            <div className="button-form">
            <button type="submit" className="btn btn-success add-btn" >Enregistrer</button>
            {error && <p className="text-danger ">{error}</p> }
            </div>
        </form>
}
            {success && <div className="success-vector">
              <img src={scc} alt=""/>
            </div>

            }
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{
              props.onHide()
              setSuccess(false)
              setError('')
            }}>Close</Button>
          </Modal.Footer>
        </Modal>
  )
}

export default AddPenModal

