import React, {useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter,selectFilter  } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';
import {withRouter} from 'react-router-dom'
import AddEmprunModal from '../../containers/BiblioInsp/AddEmpruntModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
const DataTableUnite = (props) => {
  const [show, setShow] = useState(false)
  const [idexemp, setIdexemp] = useState(0)

  const close = () => setShow(false);
 
  const { ExportCSVButton } = CSVExport;
  const selectOptions = {
    1: 'Existe',
    0: 'Emprunté',
   
  };
  const linkFormatter = (cell, row, rowIndex) => {
    return (
        <FontAwesomeIcon  icon={faSignOutAlt} size="lg" color="green" onClick={()=>{
          if(row.position){
          setIdexemp(cell)
          setShow(true)
          }else{
            alert("Cet exemplaire est déjá emprunté")
          }
        }}
       />

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
  }
]
  ;

  
  return  <>
  <ToolkitProvider
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
          noDataIndication="Aucun Livre Trouvé"
          
        />
      </div>
    )
  }
</ToolkitProvider>
<AddEmprunModal show={show} handleClose={close} idexemp={idexemp} lecteurs={props.lecteurs}/>
</>
}

export default withRouter(DataTableUnite);