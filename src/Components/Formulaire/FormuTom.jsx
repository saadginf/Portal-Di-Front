
import React from "react";
import { useForm , Controller} from "react-hook-form";
import ReactSelect from "react-select";
import {connect} from 'react-redux';
import {addTome} from '../../actions/fieldsactions'


const FormuTom = (props) => {
  const { handleSubmit, register, errors,control } = useForm();
  const onSubmit = values =>{
   
    let tome ={
        libbele:values.tome,
        ouvrage: {
            id:values.ouvrages.value
        }
    }
    console.log(tome);
    props.addTome(tome);
    console.log(tome);
  }
  return ( 
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="forme-group form-fields">
      <label htmlFor="auteurs">Ouvrages</label>
      <Controller
              as={ReactSelect}
              options={props.fields.ouvrages}
              name="ouvrages"
              isClearable
              control={control}
             />
        </div>
        <div className="forme-group form-fields">
        <label htmlFor="anneePublication">Tome</label>
       
      <input
        className="form-control"
        name="tome"
        placeholder="Tome"
        type="text"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
        <div className="text-danger ">
        {errors.tome && errors.tome.message}
        </div>
        {props.tomeError && <div className="text-danger">{props.tomeError.libelle}</div> }
      </div>
        <div className="button-form">
        <button type="submit" className="btn btn-success add-btn" >Enregistrer</button>
        </div>
    </form>
  
    
             
  );
};


const mapStateToProps = ({fields}) => ({
  loading:fields.loading,
  error:fields.error,
  fields:fields.fields,
  tomeError:fields.tomeError
});

const mapDispatchToProps = {
addTome:addTome
};



export default connect(mapStateToProps,mapDispatchToProps)(FormuTom);