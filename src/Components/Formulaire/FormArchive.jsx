
import React, {useState, useEffect} from "react";
import { useForm , Controller} from "react-hook-form";
import ReactSelect from "react-select";
import {connect} from 'react-redux';
import {getFieldsDoc} from '../../actions/fieldsdocactions '
import Axios from "axios";
import './formu.css'
const Formu = (props) => {
  useEffect(() => {
    props.getFields()
  }, [props.getFields]) 
  
  
  const { handleSubmit, register, errors,control } = useForm();

  const onSubmit = values =>{
    console.log(values);
    let formData = new FormData();
    let refs = ""
   if(values.reference) values.reference.map(a=>{
      refs =  a.value+ ','+refs
      return true
    })
    console.log(refs)
    formData.append("file", values.fichier[0]);
    formData.append("objet", values.objet);
    formData.append("origine", values.origine.value);
    formData.append("sousTheme", values.sousTheme.value);
      formData.append("mumero", values.mumero);
      formData.append("rayonId", values.rayonId);
      formData.append("dateArrivee", values.dateArrivee);
      formData.append("reference",refs);
      formData.append("typedocument", values.typedocument.value);
      formData.append("unite", values.unite.value);
      formData.append("classification", values.classification.value);
      
    Axios.post('http://localhost:8080/api/archive/doc', formData,{
                  
                 headers:{
                 "Content-Type": "multipart/form-data",
                    }
                  })
                  .then(res=>{
                   alert("Ajouter avec succès")
                  })
                  .catch(err=>{
                      console.log(err)
                     
                  })
  }




const [sousThemes, setSouThemes] = useState([]);

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
   <div className="form-archive">
   <div className="form-archive-part1">
    <div className="forme-group form-fields">
        <label htmlFor="fichier">Fichier:</label>
       
      <input
        className="form-control"
        name="fichier"
        placeholder="Ajouter un Fichier "
        type="file"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
        <div className="text-danger ">
        {errors.fichier && errors.fichier.message}
        </div>
        </div>
      <div className="forme-group form-fields">
      <label htmlFor="ouvrages">Thème</label>
      <Controller
              as={ReactSelect}
              options={props.fields.themes}
              name="theme"
              isClearable
              control={control}
              onChange={
                (values)=>{
                    if(values[0])
                    setSouThemes(values[0].sousThemes)
                    
                }
              }
              
             />
        </div>
        <div className="forme-group form-fields">
      <label htmlFor="sousTheme">Sous Thème</label>
      <Controller
              as={ReactSelect}
              options={sousThemes ? sousThemes : [] }
              name="sousTheme"
              isClearable
              control={control}
             />
        </div>
        <div className="forme-group form-fields">
        <label htmlFor="objet">Objet</label>
      <input
        className="form-control"
        name="objet"
        placeholder="Objet"
        type="text"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
        <div className="text-danger ">
        {errors.objet && errors.objet.message}
        </div>
      
      </div>
        <div className="forme-group form-fields">
        <label htmlFor="mumero">Numéro</label>
      <input
        className="form-control"
        name="mumero"
        placeholder="Numéro"
        type="text"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
        <div className="text-danger ">
        {errors.mumero && errors.mumero.message}
        </div>
      
      </div>
        <div className="forme-group form-fields">
        <label htmlFor="rayonId">RayonId</label>
      <input
        className="form-control"
        name="rayonId"
        placeholder="ID RAYON"
        type="text"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
        <div className="text-danger ">
        {errors.rayonId && errors.rayonId.message}
        </div>
      
      </div>
      </div>
      <div className="form-archive-part2">
        <div className="forme-group form-fields">
        <label htmlFor="dateArrivee">Date</label>
      <input
        className="form-control"
        name="dateArrivee"
        placeholder="Date d'acquisition"
        type="date"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
        <div className="text-danger ">
        {errors.dateArrivee && errors.dateArrivee.message}
        </div>
      
      </div>
      <div className="forme-group form-fields">
        <label htmlFor="reference">Références</label>
        <Controller
              as={ReactSelect}
              options={props.fields.documents}
              name="reference"
              isClearable
              control={control}
              isMulti
             />
        <div className="text-danger ">
        {errors.reference && errors.reference.message}
        </div>
      
      </div>
      <div className="forme-group form-fields">
      <label htmlFor="origine">Origine</label>

      <Controller
              as={ReactSelect}
              options={props.fields.origine}
              name="origine"
              isClearable
              control={control}
             />
            
        </div>
      <div className="forme-group form-fields">
      <label htmlFor="typedocument">Type</label>

      <Controller
              as={ReactSelect}
              options={props.fields.type}
              name="typedocument"
              isClearable
              control={control}
             />
             
        </div>
      
        <div className="forme-group form-fields">
        <label htmlFor="classification">Classification</label>
            <Controller
              as={ReactSelect}
              options={props.fields.classification}
              name="classification"
              isClearable
              control={control}
             />
           
        </div>
        
        <div className="forme-group form-fields">
      <label htmlFor="format">Unité</label>

      <Controller
              as={ReactSelect}
              options={props.fields.unites}
              name="unite"
              isClearable
              control={control}
             />
        </div>
        </div>
        </div>
        <div className="button-form">
        <button type="submit" className="btn btn-success add-btn" >Enregistrer</button>
        </div>
    </form>
   
    
            </>   
  );
};


const mapStateToProps = ({fieldsdoc}) => ({
  loading:fieldsdoc.loading,
  error:fieldsdoc.error,
  fields:fieldsdoc.fieldsdoc,
});

const mapDispatchToProps = {
getFields:getFieldsDoc,

};



export default connect(mapStateToProps,mapDispatchToProps)(Formu);