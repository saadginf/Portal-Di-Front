import React from 'react'
import { useForm, Controller } from "react-hook-form";
import {Modal, Button}  from 'react-bootstrap'
import ReactSelect from "react-select";
import { useState } from 'react';
import Axios from 'axios'
import scc from '../../assets/success.png'
const AddEmpruntModal = (props) => {
  const [success, setSuccess] = useState(false)

  const { handleSubmit, register, errors,control } = useForm();
  const onSubmit = values =>{
      let emprunt ={
        dateDebut:values.dateEmprunt,
        emprunteur:{
          id:values.lecteur.value
        },
        exemplaire:{
            id: values.rayonId
        }
      }
      Axios.post('http://localhost:8080/api/biblio/emprunt/borrow', emprunt)
      .then(res=>{
         console.log(res.data) 
        setSuccess(true)
      })
      .catch(err=>{
      console.log(err.data)
          
      })
    }
  return (
            <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={props.show} onHide={()=>{props.handleClose()
            setSuccess(false)
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
             {success? <h2>Ajouté avec succés</h2>:<h2>Aouter un Emprunt</h2>}
            </Modal.Title>
          </Modal.Header>
         
          <Modal.Body>
        { !success && <form onSubmit={handleSubmit(onSubmit)}>
      
        <input
            className="form-control"
            name="rayonId"
            placeholder="RayonId"
            value={props.idexemp}
            hidden
            type="text"
            ref={register({
              required: "Champ Obligatoire",
            })}
          />
          
        <div className="forme-group form-fields">
              <label htmlFor="lecteur">Lecteur:</label>
              <Controller
              placeholder="Lecteur"
              as={ReactSelect}
              options={props.lecteurs.length ? props.lecteurs.map(person => ({ value: person.id, label: person.cin })):[]}
              name="lecteur"
              isClearable
              control={control}
             />
        </div>
             
      <div className="forme-group form-fields">
        <label htmlFor="dateEmprunt">Date:</label>
       
      <input
        className="form-control"
        name="dateEmprunt"
        placeholder="yyyy-mm-dd"
        type="date"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
    <div className="text-danger ">
        {errors.dateEmprunt && errors.dateEmprunt.message}
        </div>
      </div>
            <div className="button-form">
            <button type="submit" className="btn btn-success add-btn" >Enregistrer</button>
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
              props.handleClose()
              setSuccess(false)
            }}>Close</Button>
          </Modal.Footer>
        </Modal>
  )
}

export default AddEmpruntModal

