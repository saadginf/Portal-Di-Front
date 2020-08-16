
import React, {useState} from "react";
import { useForm , Controller} from "react-hook-form";
import ReactSelect from "react-select";
import {connect} from 'react-redux';
import {getTomeByOuv, addFormat} from '../../actions/fieldsactions'
import {addExmp} from '../../actions/expunitactions'
import ModalInfo from '../addOuvrageFrom/ModalInfo'
import './formu.css'
const Formu = (props) => {
  const { handleSubmit, register, errors,control } = useForm();

  const onSubmit = values =>{
    console.log(values);
    let exemplaire={
      rayonId: values.rayonId,
      etat: values.etat,
      dateAcquisition: values.dateAcquisition,
      reference: values.reference,
      format: {
          id: values.format.value,
          
      },
      unite: {
          id: values.unite.value,
          
      },
      tome: {
          id: values.tome.value,
         
             
          }
    }
    console.log(exemplaire)
    props.addExmp(exemplaire)
  }
let tomes = [];
if (!props.tome.length==0) {
   tomes = props.tome.map(person => ({ 
        value: person.id ,
        label:person.libbele
    
    }))
    
    console.log(tomes)
}

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="forme-group form-fields">
      <label htmlFor="ouvrages">Ouvrage</label>
      <Controller
              as={ReactSelect}
              options={props.fields.ouvrages}
              name="ouvrages"
              isClearable
              control={control}
              onChange={
                (values)=>{
                    if(values[0])
                    props.getTomeByOuv(values[0].value)
                  
                }
              }
              
             />
        </div>
        <div className="forme-group form-fields">
      <label htmlFor="tomes">Tome</label>
      <Controller
              as={ReactSelect}
              options={tomes}
              name="tome"
              isClearable
              control={control}S
             />
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
        <div className="forme-group form-fields">
        <label htmlFor="dateAcquisition">Date d'acquisition</label>
      <input
        className="form-control"
        name="dateAcquisition"
        placeholder="Date d'acquisition"
        type="date"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
        <div className="text-danger ">
        {errors.dateAcquisition && errors.dateAcquisition.message}
        </div>
      
      </div>
      <div className="forme-group form-fields">
        <label htmlFor="reference">Référence</label>
      <input
        className="form-control"
        name="reference"
        placeholder="Référence"
        type="text"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
        <div className="text-danger ">
        {errors.reference && errors.reference.message}
        </div>
      
      </div>
      <div className="forme-group form-fields">
        <label htmlFor="etat">Etat</label>
      <input
        className="form-control"
        name="etat"
        placeholder="Etat"
        type="text"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
        <div className="text-danger ">
        {errors.etat && errors.etat.message}
        </div>
      
      </div>
      <div className="forme-group form-fields">
      <label htmlFor="format">Format</label>

      <Controller
              as={ReactSelect}
              options={props.fields.formats}
              name="format"
              isClearable
              control={control}
             />
              <button onClick={handleShow} className="btn btn-primary add-btn" >Ajouter Un nouveau Format</button>
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
    
        <div className="button-form">
        <button type="submit" className="btn btn-success add-btn" >Enregistrer</button>
        </div>
    </form>
   
    <ModalInfo title="Ajouter Un format" show={show} handleClose={handleClose} trans={props.addFormat} error={props.fmError}/>
    
            </>   
  );
};


const mapStateToProps = ({fields}) => ({
  loading:fields.loading,
  error:fields.error,
  fields:fields.fields,
  tome: fields.tome,
  fmError:fields.formatError
});

const mapDispatchToProps = {
getTomeByOuv:getTomeByOuv,
addFormat:addFormat,
addExmp: addExmp
};



export default connect(mapStateToProps,mapDispatchToProps)(Formu);