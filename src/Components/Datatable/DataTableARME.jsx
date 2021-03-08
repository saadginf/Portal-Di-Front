import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { CSVExport } from "react-bootstrap-table2-toolkit";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const DataTableUnite = (props) => {
  const { ExportCSVButton } = CSVExport;
  const linkFormatter = (cell, row, rowIndex) => {
    return (
      <a href={"detailsOuvrage/" + cell}>
        <FontAwesomeIcon icon={faEye} color="green" />
      </a>
    );
  };
  const autFormatter = (cell, row, rowIndex) => {
    return (
      <div>
        {cell.map((value) => (
          <strong key={value.id}>{value.libbele}, </strong>
        ))}
      </div>
    );
  };
  const columns = [
    {
      dataField: "titre",
      text: "Titre",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: "auteurs",
      text: "Auteur(s)",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      formatter: autFormatter,
      sort: true,
    },
    {
      dataField: "origine.libbele",
      text: "Origine",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: "theme.libbele",
      text: "Thème",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: "classification.libbele",
      text: "Classification",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },

    {
      dataField: "id",
      text: " ",
      formatter: linkFormatter,
      align: "center",
      title: true,
      headerAlign: "center",
    },
  ];
  return (
    <ToolkitProvider
      keyField={"id"}
      data={props.data ? props.data : []}
      bootstrap4
      columns={columns}
      exportCSV
    >
      {(props) => (
        <div>
          <ExportCSVButton className="btn-primary" {...props.csvProps}>
            Export CSV!!
          </ExportCSVButton>
          <hr />

          <BootstrapTable
            {...props.baseProps}
            pagination={paginationFactory()}
            filter={filterFactory()}
            bordered={false}
            headerClasses="header-class"
            noDataIndication="Aucun Livre Trouvé"
          />
        </div>
      )}
    </ToolkitProvider>
  );
};

export default withRouter(DataTableUnite);
