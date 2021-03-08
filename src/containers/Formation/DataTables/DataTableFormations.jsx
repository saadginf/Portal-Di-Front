import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
const DataTableFormations = (props) => {
  const linkFormatter = (cell, row, rowIndex) => {
    return (
      <a href={"formation/" + cell}>
        <FontAwesomeIcon icon={faSignOutAlt} size="lg" color="green" />
      </a>
    );
  };
  const columns = [
    {
      dataField: "label",
      text: "Formations",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },

    {
      dataField: "etablissement.label",
      text: "Etablissement",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: "reference",
      text: "Reference",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },

    {
      dataField: "id",
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
        keyField={"id"}
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

export default DataTableFormations;
