import React, { useState } from "react";
import DataTablePersonelFormations from "./DataTables/DataTablePersonelFormations";
import AddFormationToP from "./Modals/AddFormationToP";
const InsciptionsProfile = ({ data, id }) => {
  const [show, setShow] = useState(false);
  const close = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <hr />
      <h2>Formations</h2>
      <div className="add-btn-item">
        <button className="btn btn-success" onClick={handleShow}>
          Ajouter
        </button>
      </div>
      <hr style={{ width: "50%" }} />
      <DataTablePersonelFormations data={data} />
      <AddFormationToP show={show} onHide={close} id={id} />
    </div>
  );
};

export default InsciptionsProfile;
