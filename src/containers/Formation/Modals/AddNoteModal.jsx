import React from 'react'
import { useForm, Controller } from "react-hook-form";
import {Modal, Button}  from 'react-bootstrap'
import ReactSelect from "react-select";
import { useState } from 'react';
import Axios from 'axios'
import scc from '../../../assets/success.png'
const AddNoteModal = (props) => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const { handleSubmit, register, errors,control } = useForm();
  const onSubmit = values =>{

 let data ={
        personel:{
            id:values.personel
       },
       note:values.note,
       
       dateNote:values.dateNote,
       
       }

    console.log(data)
  Axios.post('http://localhost:8080/api/rh/perso/addNote', data)
    .then(res=>{
      console.log(res.data) 
     setSuccess(true)
    })
 .catch(err=>{
      console.log(err)
      setError('Champ Invalide')
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
             {success? <h2>Ajouté avec succés</h2>:<h2>Ajouter un grade</h2>}
            </Modal.Title>
          </Modal.Header>
         
          <Modal.Body>
        { !success && <form onSubmit={handleSubmit(onSubmit)}>
        <div className="forme-group form-fields">
        <label htmlFor="note">Note</label>
          <input
            className="form-control"
            name="note"
            placeholder="Note"
            step="0.01"
            type="number"
            ref={register({
              required: "Champ Obligatoire",
            })}
          />
            <div className="text-danger ">
            {errors.note && errors.note.message}
            </div>
            </div>
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
        <label htmlFor="dateNote">Date Nomination:</label>
          <input
            className="form-control"
            name="dateNote"
            placeholder="Date nomination"
            type="date"
            ref={register({
              required: "Champ Obligatoire",
            })}
          />
            <div className="text-danger ">
            {errors.dateNote && errors.dateNote.message}
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

export default AddNoteModal

