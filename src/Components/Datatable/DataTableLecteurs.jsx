import React, {useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter  } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import {withRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import AddLecModal from '../../containers/BiblioInsp/AddLecModal'
const DataTableLecteur = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    console.log(show)
  }
  const linkFormatter = (cell, row, rowIndex) => {
    return (
      <div className="result-item-eye">
          <FontAwesomeIcon icon={faFileDownload} color="green" />
      </div>
    );
  };
  const columns = [{
    dataField: 'cin',
    text: 'CIN',
    align: 'center',
    title: true,
    headerAlign: 'center',
    filter: textFilter(),
    sort: true
  }, 
  
  {
    dataField: 'grade.label',
    text: 'Grade',
    align: 'center',
    title: true,
    headerAlign: 'center',
    filter: textFilter(),
    sort: true
    
  },
  {
    dataField: 'nomPrenom',
    text: 'Nom',
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
  
  <button className="btn btn-primary addLecteur" onClick={handleShow}>Ajouter un Lecteur</button>
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
<AddLecModal title="Ajouter Un Lecteur" show={show} handleClose={handleClose}/>
</>
}

export default withRouter(DataTableLecteur);