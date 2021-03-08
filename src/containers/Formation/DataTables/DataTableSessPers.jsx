import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
import RejectStatus from "../Modals/RejectStatus";
const DataTableSessPers = ({ data }) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  const close = () => setShow(false);
  const handleShow = () => setShow(true);
  const columns = [
    {
      dataField: "grade",
      text: "Grade",
    },
    {
      dataField: "nom",
      text: "Nom",
    },
    {
      dataField: "prenom",
      text: "Prenom",
    },
    {
      dataField: "unite",
      text: "Unite",
    },
    {
      dataField: "mle",
      text: "Mle",
    },
    {
      dataField: "statut",
      text: "Statut",
      formatter: (cellContent, row) => {
        if (cellContent != "Rejete") {
          return (
            <div className="edit-status">
              <FontAwesomeIcon icon={faCheck} size="lg" color="green" />
              <FontAwesomeIcon
                icon={faEdit}
                size="lg"
                color="#FFC300"
                onClick={() => {
                  setId(row.idpers);
                  handleShow();
                }}
              />
            </div>
          );
        }
        return (
          <div className="edit-status">
            {" "}
            <FontAwesomeIcon icon={faTimes} size="lg" color="red" />
          </div>
        );
      },
    },

    {
      dataField: "motif",
      text: "Motif",
    },
  ];
  const CaptionElement = () => (
    <h3
      style={{
        borderRadius: "0.25em",
        textAlign: "center",
        color: "green",
        border: "1px solid green",
        padding: "0.5em",
      }}
    >
      Liste Des Participants
    </h3>
  );

  return (
    <>
      <BootstrapTable
        keyField="idpers"
        data={data}
        caption={<CaptionElement />}
        columns={columns}
        striped
      />
      <RejectStatus show={show} onHide={close} id={id} />
    </>
  );
};

export default DataTableSessPers;
