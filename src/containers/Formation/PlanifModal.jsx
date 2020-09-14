import React from 'react'
import {Modal}  from 'react-bootstrap'
const PlanifModal = (props) => {
    return (
      
          
                <Modal 
                centered
                size="xl"
                show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
            <Modal.Title>Planification</Modal.Title>
                </Modal.Header>
            
                <Modal.Body>
                    
                    <div className="modal-planif">
                    <div>
                        <h4>Formation Initiale</h4>
                        <h6>Officiers</h6>
                        <ul>
                            <li>DA</li>
                        </ul>
                        <h6>S/Officiers</h6>
                        <ul>
                        <li>ESO</li>
                        <li>ESO A/A</li>
                        <li>ESO ISTA</li>
                        <li>ESO ISTA A/A</li>
                        </ul>
                        <h6>ESO</h6>
                        <ul>
                        <li>ESO</li>
                        <li>ESO A/A</li>
                        <li>ESO ISTA</li>
                        <li>ESO ISTA A/A</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Formation Continue</h4>
                        <h6>Officiers</h6>
                        <ul>
                            <li>CSD</li>
                            <li>CEM</li>
                            <li>COS</li>
                            <li>CSL</li>
                            <li>CDC</li>
                            <li>CP</li>
                            <li>DA</li>
                        </ul>
                        <h6>S/Officiers</h6>
                        <ul>
                        <li>C.Spécial</li>
                        <li>BcM</li>
                        <li>C.Adjudant</li>
                        <li>BS</li>
                        <li>BE</li>
                        </ul>
                        <h6>HDT</h6>
                        <ul>
                        <li>CAT1</li>
                        <li>CAT2</li>
                        <li>CIA</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Formation Spécifique</h4>
                        <ul>
                            <li>CFQHT</li>
                            
                        </ul>
                        
                    </div>
                    <div>
                        <h4>Formation Diverse</h4>
                        <h6>Officiers</h6>
                        <ul>
                            <li>Doctorat</li>
                            <li>Ingénieurie</li>
                            <li>Master</li>
                            <li>License</li>
                        </ul>
                        <h6>S/Officiers</h6>
                        <ul>
                        <li>ISTA</li>
                        </ul>
                        <h6>HDT</h6>
                        <ul>
                        <li>Bac</li>
                        <li>CES</li>
                        </ul>
                    </div>
                    </div>
        
                    
                </Modal.Body>
              
              </Modal>
    )
        }
        
   


export default PlanifModal
