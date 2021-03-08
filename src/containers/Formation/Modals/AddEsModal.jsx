import React from 'react'
import { useForm, Controller } from "react-hook-form";
import {Modal, Button}  from 'react-bootstrap'
import ReactSelect from "react-select";
import { useState } from 'react';
import Axios from 'axios'
import scc from '../../../assets/success.png'
const AddEsModal = (props) => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const { handleSubmit, register, errors,control } = useForm();
  const onSubmit = values =>{

 let data ={
        personel:{
            id:values.personel
       },
       echelleSolde:{
            value:values.echelleSolde.value
       },
       dateEchelle:values.dateEchelle,
       
       }

    console.log(values)
   Axios.post('http://localhost:8080/api/rh/perso/addEs', data)
    .then(res=>{
      console.log(res.data) 
     setSuccess(true)
    })
 .catch(err=>{
      console.log(err)
      setError('Champ invalide')
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
             {success? <h2>Ajouté avec succés</h2>:<h2>Ajouter une E.solde</h2>}
            </Modal.Title>
          </Modal.Header>
         
          <Modal.Body>
        { !success && <form onSubmit={handleSubmit(onSubmit)}>
        <div className="forme-group form-fields">
              <label htmlFor="echelleSolde">Echelle de solide</label>
              <Controller
              placeholder="E.Solde"
              as={ReactSelect}
              options={[
                  {
                      value:2,
                      label:"lt"
                  },
              ]}
              name="echelleSolde"
              isClearable
              control={control}
             />
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
        <label htmlFor="dateGrade">Date Nomination:</label>
          <input
            className="form-control"
            name="dateEchelle"
            placeholder="Date nomination"
            type="date"
            ref={register({
              required: "Champ Obligatoire",
            })}
          />
            <div className="text-danger ">
            {errors.dateEchelle && errors.dateEchelle.message}
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

export default AddEsModal

