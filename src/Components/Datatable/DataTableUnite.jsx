import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter,selectFilter  } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';
import {withRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
const DataTableUnite = (props) => {
  
  const { ExportCSVButton } = CSVExport;
  const selectOptions = {
    1: 'Existe',
    0: 'Emprunté',
   
  };
  const linkFormatter = (cell, row, rowIndex) => {
    return (
      <a href={props.location.pathname+"/"+cell} >
        <FontAwesomeIcon icon={faEye} color="green"/>
      </a>
    );
  };
  const columns = [{
    dataField: 'rayonId',
    text: 'Id Rayon',
    align: 'center',
    title: true,
    headerAlign: 'center',
    filter: textFilter(),
    sort: true
  }, 
  
  {
    dataField: 'titre',
    text: 'Titre',
    align: 'center',
    title: true,
    headerAlign: 'center',
    filter: textFilter(),
    sort: true
    
  },
  {
    dataField: 'auteurs',
    text: 'Auteur(s)',
    align: 'center',
    title: true,
    headerAlign: 'center',
    filter: textFilter(),
    sort: true
    
  },
  {
    dataField: 'theme',
    text: 'Thème',
    align: 'center',
    title: true,
    headerAlign: 'center',
    filter: textFilter(),
    sort: true
    
  },
  {
    dataField: 'classification',
    text: 'Classification',
    align: 'center',
    title: true,
    headerAlign: 'center',
    filter: textFilter(),
    sort: true
    
  },
  {
    dataField: 'position',
    text: 'Position',
    title: true,
    align: 'center',
    headerAlign: 'center',
    filter: textFilter(),
    sort: true,
   
    formatter: cell => selectOptions[cell],
  filter: selectFilter({
    options: selectOptions
  },
  
  )
  },
  {
    dataField: "rayonId",
    text: " ",
    formatter: linkFormatter,
    align: 'center',
    title: true,
    headerAlign: 'center'
  }
]
  ;

  
  return  <ToolkitProvider
  keyField={'rayonId'} data={ props.data? props.data : [] } 
  bootstrap4
  columns={ columns } 
  exportCSV
>
  {
    props => (
      <div>
        <ExportCSVButton className="btn-primary"  { ...props.csvProps }>Export CSV!!</ExportCSVButton>
        <hr />
      
        <BootstrapTable
          { ...props.baseProps }
          pagination={ paginationFactory() }
          filter={ filterFactory() }
          bordered={ false } 
          headerClasses="header-class"
          noDataIndication="Aucun Livre Trouvé"
          
        />
      </div>
    )
  }
</ToolkitProvider>
}

export default withRouter(DataTableUnite);