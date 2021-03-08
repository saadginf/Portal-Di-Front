import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
const PlanificationResults = ({ data }) => {
  const columns = [
    {
      dataField: "personnel",
      text: "Militaire",
    },
    {
      dataField: "inscription.statut.value",
      text: "Statut",
      formatter: (cellContent, row) => {
        if (cellContent === 1) {
          return <FontAwesomeIcon icon={faCheck} size="lg" color="green" />;
        }
        return <FontAwesomeIcon icon={faTimes} size="lg" color="red" />;
      },
    },

    {
      dataField: "inscription.motif",
      text: "Motif",
      formatter: (cellContent, row) => {
        if (cellContent) {
          return <span>{cellContent}</span>;
        }
        return <span>RAS</span>;
      },
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
      Resultat de la planification
    </h3>
  );

  return (
    <BootstrapTable
      keyField="inscription.id"
      data={data}
      caption={<CaptionElement />}
      columns={columns}
      striped
    />
  );
};

export default PlanificationResults;
