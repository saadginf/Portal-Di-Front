import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter,selectFilter  } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';
import {withRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
const DataTableEvents = (props) => {
  
  const { ExportCSVButton } = CSVExport;
  const selectOptions = {
    292: 'Ponctuel',
    293: 'Cyclique',
   
  };
  const linkFormatter = (cell, row, rowIndex) => {
    return (
      <div className="links-events">
      <div target="_blank">
        <FontAwesomeIcon icon={faTrash} color="red" onClick={()=>{
          let res = window.confirm("Vous allez Suprimer un Evénemt! ");
          if(res){props.delete(cell)}
        }}/>
      </div>
    
      </div>
      
    );
  };
  const columns = [
  
  {
    dataField: 'title',
    text: 'Titre',
    align: 'center',
    title: true,
    headerAlign: 'center',
    filter: textFilter(),
    sort: true
    
  },
  {
    dataField: 'start',
    text: 'Date Début',
    align: 'center',
    title: true,
    headerAlign: 'center',
    filter: textFilter(),
    sort: true
    
  },
  {
    dataField: 'end',
    text: 'Date fin',
    align: 'center',
    title: true,
    headerAlign: 'center',
    filter: textFilter(),
    sort: true
    
  },
  
  
  {
    dataField: 'typeEvent.id',
    text: 'Position',
    title: true,
    align: 'center',
    headerAlign: 'center',
    
    sort: true,
   
    formatter: cell => selectOptions[cell],
  filter: selectFilter({
    options: selectOptions
  },
  
  )
  },
  {
    dataField: "id",
    text: " ",
    formatter: linkFormatter,
    align: 'center',
    title: true,
    headerAlign: 'center'
  },
  
]
  ;
 
  
  
  return  <ToolkitProvider
  keyField={'id'} data={ props.data? props.data : [] } 
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
          noDataIndication="Aucun Evenénement trouvé"
          
        />
      </div>
    )
  }
</ToolkitProvider>
}

export default withRouter(DataTableEvents);