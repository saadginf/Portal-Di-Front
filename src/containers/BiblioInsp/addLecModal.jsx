import React from 'react'
import {Modal,Button}  from 'react-bootstrap'
import { useForm } from "react-hook-form";
import Axios from "axios";
const UpFile = (props) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values =>{
    let formData = new FormData();

    formData.append("file", values.fichier[0]);
    formData.append("objet", values.objet);
    formData.append("mumero", values.mumero);
    Axios.post('http://localhost:8080/api/archive/doc', formData,{
                  
                    headers:{
                      "Content-Type": "multipart/form-data",
                    }
                  })
                  .then(res=>{
                   alert("Ajouter avec succès")
                  })
                  .catch(err=>{
                      console.log(err)
                     
                  })
   
    console.log(values);

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
         {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={handleSubmit(onSubmit)}>

      <div className="forme-group form-fields">
        <label htmlFor="fichier">Fichier:</label>
       
      <input
        className="form-control"
        name="fichier"
        placeholder="Ajouter un Fichier "
        type="file"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
        <div className="text-danger ">
        {errors.fichier && errors.fichier.message}
        </div>
        <input
        className="form-control"
        name="objet"
        placeholder="objet"
        type="text"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
       <input
        className="form-control"
        name="mumero"
        placeholder="num"
        type="text"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
      </div>
        <div className="button-form">
        <button type="submit" className="btn btn-success add-btn" >Enregistrer</button>
        </div>
    </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default UpFile
