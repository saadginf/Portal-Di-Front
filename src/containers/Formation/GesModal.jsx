import React from 'react'
import {Modal}  from 'react-bootstrap'
const GesModal = (props) => {
    return (
      
          
                <Modal 
                centered
                size="md"
                show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
            <Modal.Title>Gestion</Modal.Title>
                </Modal.Header>
            
                <Modal.Body>
                    
                    <div className="modal-ges">
                   
                       <a href="/rh"><h4>Personnels</h4></a>
                        <hr/>
                        <a href="/inst"> <h4>Formtions</h4></a>
                    </div>
                    
                </Modal.Body>
              
              </Modal>
    )
        }
        
   


export default GesModal
