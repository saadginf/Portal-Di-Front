import React, {useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter  } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import {withRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const DataTablePerso = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    console.log(show)
  }
  const linkFormatter = (cell, row, rowIndex) => {
    return (
      <div className="result-item-eye">
          <FontAwesomeIcon icon={faEdit} color="red" />
      </div>
    );
  };
  const columns = [{
    dataField: 'mle',
    text: '----Mle-----',
    align: 'center',
    title: true,
    headerAlign: 'center',
    filter: textFilter(),
    sort: true
  }, 
  
  {
    dataField: 'grade.label',
    text: '----Grade-----',
    align: 'center',
    title: true,
    headerAlign: 'center',
    filter: textFilter(),
    sort: true
    
  },
  {
    dataField: 'nom',
    text: '----Nom-----',
    align: 'center',
    title: true,
    headerAlign: 'center',
    filter: textFilter(),
    sort: true
    
  },
  
  {
    dataField: 'prenom',
    text: '----Prénom----',
    align: 'center',
    title: true,
    headerAlign: 'center',
    filter: textFilter(),
    sort: true
    
  },
  {
    dataField: "id",
    text: " ",
    formatter: linkFormatter,
    align: 'center',
    title: true,
    headerAlign: 'center'
  }
]
  ;

  
  return  <>
  
  <button className="btn btn-primary addmilitaire" onClick={handleShow}>Ajouter un Militaire</button>
  <ToolkitProvider
  keyField={'id'} data={ props.data? props.data : [] } 
  bootstrap4
  columns={ columns } 
  exportCSV
>
  {
    props => (
      <div>
       
        <BootstrapTable
          { ...props.baseProps }
          pagination={ paginationFactory() }
          filter={ filterFactory() }
          bordered={ false } 
          headerClasses="header-class"
          noDataIndication="Aucun Lecteur Trouvé"
          
        />
      </div>
    )
  }
</ToolkitProvider>
</>
}

export default withRouter(DataTablePerso);