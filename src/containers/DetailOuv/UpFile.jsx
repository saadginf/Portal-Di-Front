import React, {useState} from 'react'
import {Modal,Button}  from 'react-bootstrap'
import { useForm } from "react-hook-form";
import scc from '../../assets/success.png'
import Axios from "axios";
const UpFile = (props) => {
  const { handleSubmit, register, errors } = useForm();
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const onSubmit = values =>{
    
    let formData = new FormData();
    formData.append("file", values.fichier[0]);
    Axios.post('http://localhost:8080/api/biblio/ouvrages/uploadFile/'+props.ouv, formData,{
                  
                    headers:{
                      "Content-Type": "multipart/form-data",
                    }
                  })
                  .then(res=>{
                    setSuccess(true)
                    setError('')
                  })
                  .catch(err=>{
                     setError('Fichier Invalide')
                     
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
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
         {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      { !success && <form onSubmit={handleSubmit(onSubmit)}>

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
        <div className="text-danger ">
        {error  && error}
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
              setError('')
            }}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default UpFile
