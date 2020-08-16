import React ,{useState}from 'react'
import { useForm , Controller} from "react-hook-form";
import ReactSelect from "react-select";
import { GithubPicker } from 'react-color';
const FormEvent = (props) => {
const [show, setShow] = useState(false);
const [color, setColor] = useState("#1273DE")
const handleChange = (color) => setColor(color.hex);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    const { handleSubmit, register, errors,control } = useForm();
    const onSubmit = values =>{
   
      let event ={
          title:values.titre,
          descrptif:values.descrptif,
          bgColor:values.bgColor,
          start:values.start,
          end:values.end,
          unite: {
              id:values.unite.value
          },
          typeEvent: {
            id:values.typeEvent.value
        }
      }
      console.log(event);
     props.addEvent(event);
    }
    return (
        <div>
              <form onSubmit={handleSubmit(onSubmit)}>
     


              <div className="forme-group form-fields">
      <label htmlFor="typeEvent">Type d'évenement</label>
      <Controller
              as={ReactSelect}
              options={[
                  {
                      value:292,
                      label:"Ponctuel"
                  },
                  {
                    value:293,
                    label:"Cyclique"
                },
              ]}
              name="typeEvent"
              isClearable
              control={control}
             />
        </div>

        <div className="forme-group form-fields">
        <label htmlFor="titre">Titre</label>
       
      <input
        className="form-control"
        name="titre"
        placeholder="Titre"
        type="text"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
        <div className="text-danger ">
        {errors.titre && errors.titre.message}
        </div>
      
      </div>
     
     
      <div className="forme-group form-fields">
        <label htmlFor="descrptif">Descriptif</label>
       
      <input
        className="form-control"
        name="descrptif"
        placeholder="Descriptif"
        type="text"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
       <div className="text-danger ">
        {errors.descrptif && errors.descrptif.message}
        </div>
      </div>
     
      <div className="forme-group form-fields">
        <label htmlFor="bgColor">Couleur</label>
       
      <input
         value={color}
        readOnly
        className="form-control"
        name="bgColor"
        placeholder="Couleur"
        type="text"
        onClick={handleShow}
        ref={register({
          required: "Champ Obligatoire",
        })}
        
      />
<div className="color-picker-palette">
        {show && <GithubPicker
        color={color}
        onChange={handleChange}
        />}
        </div>
<div className="text-danger ">
        {errors.bgColor && errors.bgColor.message}
        </div>
      </div>
      
     
      <div className="forme-group form-fields">
        <label htmlFor="start">Début</label>
       
      <input
        onClick={handleClose}
        className="form-control"
        name="start"
        placeholder="yyyy-mm-dd"
        type="text"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
    <div className="text-danger ">
        {errors.start && errors.start.message}
        </div>
      </div>
     
      <div className="forme-group form-fields">
        <label htmlFor="end">Fin</label>
       
      <input
        
        className="form-control"
        name="end"
        placeholder="yyyy-mm-dd"
        type="text"
        ref={register({
          required: "Champ Obligatoire",
        })}
      />
    <div className="text-danger ">
        {errors.end && errors.end.message}
        </div>
      </div>
      

      <div className="forme-group form-fields">
      <label htmlFor="unite">Unité</label>
      <Controller
              as={ReactSelect}
              options={[
                  {
                      value:42,
                      label:"INSP"
                  },
              ]}
              name="unite"
              isClearable
              control={control}
             />
        </div>

     
     
     
     
     
      
        <div className="button-form">
        <button type="submit" className="btn btn-success add-btn" >Enregistrer</button>
        </div>
    </form>
        </div>
    )
}

export default FormEvent
