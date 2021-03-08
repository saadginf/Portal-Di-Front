import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
const DataTableSession = (props) => {
  const linkFormatter = (cell, row, rowIndex) => {
    return (
      <a href={"/session/" + cell}>
        <FontAwesomeIcon icon={faInfoCircle} size="lg" color="green" />
      </a>
    );
  };
  const columns = [
    {
      dataField: "formation.label",
      text: "Formations",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },

    {
      dataField: "formation.etablissement.label",
      text: "Etablissement",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: "dateDebut",
      text: "Date Debut",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: "dateFin",
      text: "Date Fin",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: "value",
      text: "",
      formatter: linkFormatter,
      align: "center",
      title: true,
      headerAlign: "center",
    },
  ];
  return (
    <>
      <ToolkitProvider
        keyField={"value"}
        data={props.data ? props.data : []}
        bootstrap4
        columns={columns}
      >
        {(props) => (
          <div>
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory()}
              filter={filterFactory()}
              bordered={false}
              headerClasses="header-class"
              noDataIndication="Aucune Formation Trouvée"
            />
          </div>
        )}
      </ToolkitProvider>
    </>
  );
};

export default DataTableSession;
