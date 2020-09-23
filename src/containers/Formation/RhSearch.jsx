import React from 'react'
import { useForm , Controller} from "react-hook-form";
import ReactSelect from "react-select";


const RhSearch = () => {
    const { handleSubmit, register, errors,control } = useForm();
    const onSubmit = values =>{
        console.log(values)
    }
    return (
        <div className="rh-search">
           <div className="rh-search-request">
           <form className="form-search" onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="forme-group form-fields">
                    <label htmlFor="ouvrages">Rechercher Par:</label>
                    <Controller
                    as={ReactSelect}
                    options={[
                        {
                            value:1,
                            label:'Matricule'
                        },        
                        {
                            value:2,
                            label:'Nom'
                        },             

                    ]}
                    name="par"
                    isClearable
                    control={control}
              
              
                    />
                 </div>
              
            
        <div className="forme-group form-fields">
       
      <input
        className="form-control"
        name="mc"
        placeholder="Mot Clef"
        type="text"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
        <div className="text-danger ">
        {errors.mc && errors.mc.message}
        </div>
      
      </div>
        <div className="button-form search-btn">
        <button type="submit" className="btn btn-danger add-btn" >
            Chercher
        </button>
     
        </div>
       
                    </form>

           </div>
        </div>
    )
}

export default RhSearch
