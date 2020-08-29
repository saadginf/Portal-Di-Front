
import React, {useEffect, useState} from "react";
import { useForm , Controller} from "react-hook-form";
import ReactSelect from "react-select";
import {connect} from 'react-redux';
import {getFields,addType,addEditeur,addClass, addOr, addTh,addAut} from '../../actions/fieldsactions'
import{addOuv} from '../../actions/ouvactions'
import ModalInfo from '../addOuvrageFrom/ModalInfo'

const FormOu = (props) => {
  const [showtype, setShowtype] = useState(false);
  const [showtheme, setShowtheme] = useState(false);
  const [showclass, setShowclass] = useState(false);
  const [showedit, setShowedit] = useState(false);
  const [showor, setShowor] = useState(false);
  const [showaut, setShowaut] = useState(false);
  const typeClose = () => {
    setShowtype(false);
  
  }
  const typeShow = () => setShowtype(true);
  const themeClose = () => setShowtheme(false);
  const themeeShow = () => setShowtheme(true);
  const classClose = () => setShowclass(false);
  const classShow = () => setShowclass(true);
  const editClose = () => setShowedit(false);
  const editShow = () => setShowedit(true);
  const orShow = () => setShowor(true);
  const orClose = () => setShowor(false);
  const autClose = () => setShowaut(false);
  const autShow = () => setShowaut(true);
  
  useEffect(() => {
    props.getFields()
  }, [])  

  const { handleSubmit, register, errors,control } = useForm();
  const onSubmit = values =>{
    console.log(values);
    let result = values.auteurs.map(person => ({ id: person.value }));
    let ouv = {
       
      titre: values.titre,
      anneePublication: values.anneePublication,
      descriptif: values.descriptif,
      origine: {
          id:values.origine.value
          
      },
      theme: {
          id:values.theme.value
       
      },
      type: {
          id:values.type.value
          
      },
      classification: {
          id: values.classification.value
    
      },
      auteurs: result,
      
      
      editeur: {
          id:values.editeur.value
         
      }
  }
  
props.addOuv(ouv);
} 

  
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="forme-group form-fields">
      <label htmlFor="titre">Titre</label>
      <input
        className="form-control"
        name="titre"
        placeholder="Titre de l'Ouvrage"
        type="text"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
        <div className="text-danger">
        {errors.titre && errors.titre.message}
        </div>
      
      </div>
     
      <div className="forme-group form-fields">
      <label htmlFor="auteurs">Auteurs</label>
      <Controller
              as={ReactSelect}
              options={props.fields.auteurs}
              name="auteurs"
              isClearable
              control={control}
              isMulti
             />
        </div>
        <button onClick={autShow} className="btn btn-primary add-btn" >Ajouter Auteur</button>
        <div className="forme-group form-fields">

        <label htmlFor="anneePublication">Date de Publication</label>
       
      <input
        className="form-control"
        name="anneePublication"
        placeholder="Titre de l'Ouvrage"
        type="date"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
        <div className="text-danger ">
        {errors.anneePublication && errors.anneePublication.message}
        </div>
      
      </div>
      <div className="forme-group form-fields">
      <label htmlFor="descriptif">Descriptif</label>
      <textarea
        className="form-control"
        name="descriptif"
        placeholder="Descriptif"
        type="text"
        ref={register({
          required: "Champ Obligatoire",
          
        })}
      />
        <div className="text-danger">
        {errors.descriptif && errors.descriptif.message}
        </div>
      
      </div>
          
      <div className="forme-group form-fields">
      <label htmlFor="theme">Thème</label>

      <Controller
              as={ReactSelect}
              options={props.fields.theme}
              name="theme"
              isClearable
              control={control}
             />
              <button onClick={themeeShow} className="btn btn-primary add-btn" >Ajouter Thème</button>
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
              <button onClick={orShow} className="btn btn-primary add-btn" >Ajouter Une Origine</button>
        </div>
        <div className="forme-group form-fields">
          
        <label htmlFor="type">Type</label>
      <Controller
              as={ReactSelect}
              options={props.fields.type}
              name="type"
              isClearable
              control={control}
             />
        </div>
        <button onClick={typeShow} className="btn btn-primary add-btn" >Ajouter Un type</button>
        <div className="forme-group form-fields">
        <label htmlFor="classification">Classification</label>
            <Controller
              as={ReactSelect}
              options={props.fields.classification}
              name="classification"
              isClearable
              control={control}
             />
             <button onClick={classShow} className="btn btn-primary add-btn" >Ajouter Une Classification</button>
        </div>
        <div className="forme-group form-fields">
        <label htmlFor="editeur">Editeur</label>
            <Controller
              as={ReactSelect}
              options={props.fields.editeur}
              name="editeur"
              isClearable
              control={control}
             />
            <button onClick={editShow} className="btn btn-primary add-btn" >Ajouter Un Editeur</button>

        </div>
        <div className="button-form">
        <button type="submit" className="btn btn-success add-btn" >Enregistrer</button>
        </div>
    </form>
    <ModalInfo title="Ajouter Un Type" show={showtype} handleClose={typeClose} trans={props.addType} error={props.tyerror}/>
    <ModalInfo title="Ajouter Une Origine" show={showor} handleClose={orClose} trans={props.addOR} error={props.orError}/>
    <ModalInfo title="Ajouter Un Thème" show={showtheme} handleClose={themeClose} trans={props.addTh} error={props.thError}/>
    <ModalInfo title="Ajouter Une Classification" show={showclass} handleClose={classClose} trans={props.addClass} error={props.classError}/>
    <ModalInfo title="Ajouter Un Editeur" show={showedit} handleClose={editClose} trans={props.addEditeur} error={props.editError}/>
    <ModalInfo title="Ajouter Un Auteur" show={showaut} handleClose={autClose} trans={props.addAut} error={props.autError}/>
            </>   
  );
};


const mapStateToProps = ({fields}) => ({
  loading:fields.loading,
  error:fields.error,
  fields:fields.fields,
  tyerror: fields.tyError,
  editError:fields.editError,
  classError:fields.classError,
  orError:fields.orError,
  thError:fields.thError,
  autError:fields.autError
});

const mapDispatchToProps = {
getFields: getFields,
addType:addType,
addEditeur:addEditeur,
addClass: addClass,
addOR:addOr,
addTh:addTh,
addOuv:addOuv,
addAut:addAut
};



export default connect(mapStateToProps,mapDispatchToProps)(FormOu);