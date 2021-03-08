import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {
  textFilter,
  selectFilter,
} from "react-bootstrap-table2-filter";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

const DataTablePersonelFormations = (props) => {
  const selectOptions = {
    1: "Planification",
    2: "En cours",
    3: "Valide",
    4: "Rejete",
  };
  const selectOptionsType = {
    1: "F. de Base",
    2: "F. Continue",
    3: "F. specifique",
    4: "F. Diverse",
  };
  const selectOptionsCat = {
    1: "F. Militaire",
    2: "F. Civile",
  };

  const columns = [
    {
      dataField: "sformation.formation.label",
      text: "Formation",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },

    {
      dataField: "sformation.label",
      text: "Session",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: "sformation.formation.typeFormation.value",
      text: "Type",
      align: "center",
      title: true,
      headerAlign: "center",
      formatter: (cell) => selectOptionsType[cell],
      filter: selectFilter({
        options: selectOptionsType,
      }),
      sort: true,
    },
    {
      dataField: "sformation.formation.categorieFormation.value",
      text: "Categorie",
      align: "center",
      title: true,
      headerAlign: "center",
      formatter: (cell) => selectOptionsCat[cell],
      filter: selectFilter({
        options: selectOptionsCat,
      }),
      sort: true,
    },
    {
      dataField: "sformation.formation.etablissement.label",
      text: "Etablissement",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: "statut.value",
      text: "Statut",
      title: true,
      align: "center",
      headerAlign: "center",
      sort: true,

      formatter: (cell) => selectOptions[cell],
      filter: selectFilter({
        options: selectOptions,
      }),
    },
    {
      dataField: "motif",

      text: "Motif",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
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
          <BootstrapTable
            {...props.baseProps}
            pagination={paginationFactory()}
            filter={filterFactory()}
            bordered={false}
            headerClasses="header-class"
            noDataIndication="Aucune Formation"
          />
        </div>
      )}
    </ToolkitProvider>
  );
};

export default DataTablePersonelFormations;
