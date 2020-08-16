import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const addOuvrageForm = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
    <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formik
        initialValues={{
            libbele: '',
           
        }}
        validationSchema={Yup.object().shape({
            
           
                libbele: Yup.string()
                .required('Champ obligatoire'),

        })}
        onSubmit={fields => {
            console.log(fields)
            props.trans(fields)
            
           
          
        }}
        render={({ errors, status, touched }) => (
            <Form>
              
                
               
                  
            
              
                <div className="form-group">
                    <label htmlFor="libbele">Libbelé</label>
                    <Field name="libbele" type="text" className={'form-control' + (errors.libbele && touched.libbele ? ' is-invalid' : '')} />
                    <ErrorMessage name="libbele" component="div" className="invalid-feedback" />
                </div>
              
                    {props.error && <div className="text-danger">{props.error.libelle}</div> }
                
                
                    <button type="submit" className="btn btn-success add-btn" >Enregistrer</button>
               
                
            </Form>
        )}
    />







            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default addOuvrageForm
