import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter  } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import {withRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Axios from "axios"
const DataTableArchive = (props) => {
  


  const linkFormatter = (cell, row, rowIndex) => {
    return (
      <div className="result-item-eye">
          <FontAwesomeIcon icon={faEye} color="green" onClick={()=>{
                 
                 
                 Axios.get('http://localhost:8080/api/archive/doc/download/'+cell, {
                    responseType:'blob',
                    haders:{
                      'Accept':'application/pdf'
                    }
                  })
                  .then(res=>{
                   const file = new Blob([res.data],{type:'application/pdf'});
                  const fileUrl=URL.createObjectURL(file);
                  window.open(fileUrl)
                  })
                  .catch(err=>{
                      console.log(err)
                     
                  })
            }}/>
      </div>
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
    dataField: 'typedocument.label',
    text: 'Type',
    align: 'center',
    title: true,
    headerAlign: 'center',
    filter: textFilter(),
    sort: true
    
  },
  {
    dataField: 'origine.libbele',
    text: 'Origine',
    align: 'center',
    title: true,
    headerAlign: 'center',
    filter: textFilter(),
    sort: true
    
  },
  {
    dataField: 'mumero',
    text: 'Numéro',
    align: 'center',
    title: true,
    headerAlign: 'center',
    filter: textFilter(),
    sort: true
    
  },
  {
    dataField: 'dateArrivee',
    text: 'Date',
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

  
  return  <ToolkitProvider
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
          noDataIndication="Aucun Document Trouvé"
          
        />
      </div>
    )
  }
</ToolkitProvider>
}

export default withRouter(DataTableArchive);