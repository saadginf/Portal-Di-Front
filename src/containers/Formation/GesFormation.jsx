import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import AddFormationModal from "./Modals/AddFormationModal";
import AddSessionModal from "./Modals/AddSessionModal";
import FormationsdeBases from "./FormationTabs/FormationsdeBases";
import SessionActive from "./FormationTabs/SessionActives";
const GesFormation = () => {
  const [key, setKey] = useState("home");
  const [show, setShow] = useState(false);
  const close = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showSess, setShowSess] = useState(false);
  const closeSess = () => setShowSess(false);
  const handleShowSess = () => setShowSess(true);

  return (
    <div className="container-gesFormation">
      <div className="card-title-rh">
        <h1>Gestion des Formations</h1>
      </div>
      <div className="container-gesFormation-tabs">
        <div className="addbuttons-gesForm">
          <button
            className="btn btn-primary btnAddGesForm"
            onClick={handleShow}
          >
            <FontAwesomeIcon icon={faPlusSquare} color="white" />
            <span className="addButton-gesForm">Ajouter Une Formation</span>
          </button>
          <button
            className="btn btn-primary btnAddGesForm"
            onClick={handleShowSess}
          >
            <FontAwesomeIcon icon={faPlusSquare} color="white" />
            <span className="addButton-gesForm">Ajouter Une Session</span>
          </button>
        </div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="home" title="Formotions de Base">
            <FormationsdeBases
              type="formationsdebase"
              title="Formotions de Base"
            />
          </Tab>
          <Tab eventKey="ouvrage" title="Formotions Continues">
            <FormationsdeBases
              type="formationcontinues"
              title="Formotions Continues"
            />
          </Tab>
          <Tab eventKey="profile" title="Formations Specifiques">
            <FormationsdeBases
              type="formationspecifiques"
              title="Formations Specifiques"
            />
          </Tab>
          <Tab eventKey="diverse" title="Formations Diverses">
            <FormationsdeBases
              type="formationdiverse"
              title="Formations Diverses"
            />
          </Tab>
          <Tab eventKey="session" title="Session Actives">
            <SessionActive title="Sessions en cours" />
          </Tab>
        </Tabs>
      </div>
      <AddFormationModal show={show} onHide={close} />
      <AddSessionModal show={showSess} onHide={closeSess} />
    </div>
  );
};

export default GesFormation;
