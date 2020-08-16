import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Axios from "axios"
const SearchItemResult = (props) => {
    return (
        <div className= "result-item">
            <h4 className="result-item-type">{props.item.typedocument.label}</h4>
            <div className="result-item-eye">
            <FontAwesomeIcon icon={faEye} color="green" onClick={()=>{
                 
                 
                 Axios.get('http://localhost:8080/api/archive/doc/download/'+props.item.id, {
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
            }}/></div>
            <hr/>
            
            <div className="detail-result-item">
            <h6 className="result-item-class">--{props.item.classification.libbele}--</h6>
                <h5>N°:</h5>
                <p>{props.item.mumero}</p>
                <h5>Date:</h5>
                <p>{props.item.dateArrivee}</p>
                <h5>FM:</h5>
                <p>{props.item.origine.libbele}</p>
                <h5>Objet:</h5>
                <p>{props.item.objet}</p>
                <h5>Ref:</h5>
    {props.item.references.length ? props.item.references.map(a=><div className="result-item-ref"
    onClick={()=>{
                 
                 
        Axios.get('http://localhost:8080/api/archive/doc/download/'+a.id, {
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
   }}
    >{a.mumero}</div>) :"Aucune Reference"}
            <h6 className="result-item-class">--{props.item.classification.libbele}--</h6>
            </div>
        </div>
    )
}

export default SearchItemResult
