import React from 'react'
import { useForm, Controller } from "react-hook-form";
import {Modal, Button}  from 'react-bootstrap'
import ReactSelect from "react-select";
import { useState } from 'react';
import Axios from 'axios'
import scc from '../../assets/success.png'
const AddLecModal = (props) => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const { handleSubmit, register, errors,control } = useForm();
  const onSubmit = values =>{

    let data = {
      cin:values.cin,
      nomPrenom:values.nomPrenom,
      service:values.service,
      grade:{
        value:values.grade.value
      },
      unite:{
        id:values.unite.value
      }

    }
    Axios.post('http://localhost:8080/api/biblio/emprunteur', data)
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
          show={props.show} onHide={props.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
             {success? <h2>Ajouté avec succés</h2>:<h2>Aouter un Lecteur</h2>}
            </Modal.Title>
          </Modal.Header>
         
          <Modal.Body>
        { !success && <form onSubmit={handleSubmit(onSubmit)}>
    
        <div className="forme-group form-fields">
        <label htmlFor="cin">CIN:</label>
          <input
            className="form-control"
            name="cin"
            placeholder="CIN"
            type="text"
            ref={register({
              required: "Champ Obligatoire",
            })}
          />
            <div className="text-danger ">
            {errors.cin && errors.cin.message}
            </div>
            </div>
            <div className="forme-group form-fields">
        <label htmlFor="nomPrenom">Nom:</label>
            <input
            className="form-control"
            name="nomPrenom"
            placeholder="Nom Du Lecteur"
            type="text"
            ref={register({
              required: "Champ Obligatoire",
            })}
          />
               <div className="text-danger ">
            {errors.nomPrenom && errors.nomPrenom.message}
            </div>
          </div>
        <div className="forme-group form-fields">
        <label htmlFor="service">Service:</label>
           <input
            className="form-control"
            name="service"
            placeholder="Service du Lecteur"
            type="text"
            ref={register({
              required: "Champ Obligatoire",
            })}
          />
            <div className="text-danger ">
            {errors.service && errors.service.message}
            </div>
          </div>
          <div className="forme-group form-fields">
              <label htmlFor="unite">Unité</label>
              <Controller
              placeholder="Unité"
              as={ReactSelect}
              options={[
                  {
                      value:42,
                      label:"INSP"
                  },
              ]}
              name="unite"
              isClearable
              control={control}
             />
        </div>
        <div className="forme-group form-fields">
              <label htmlFor="grade">Grade</label>
              <Controller
              placeholder="grade"
              as={ReactSelect}
              options={[
                  {
                      value:427,
                      label:"Lieutenant"
                  },
              ]}
              name="grade"
              isClearable
              control={control}
             />
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
              props.handleClose()
              setSuccess(false)
              setError('')
            }}>Close</Button>
          </Modal.Footer>
        </Modal>
  )
}

export default AddLecModal

