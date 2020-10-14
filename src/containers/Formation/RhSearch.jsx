import React, {useState} from 'react'
import Axios from 'axios'
import { useForm , Controller} from "react-hook-form";
import ReactSelect from "react-select";
import PersonCard from './PersonCard';


const RhSearch = () => {
    const { handleSubmit, register, errors,control } = useForm();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(null);
    const onSubmit = values =>{
        console.log(search);
        setLoading(true)
        if (values.mc && search.label) {
              Axios.get('http://localhost:8080/api/rh/perso/'+search.value+'/'+values.mc)
                      .then(res=>{
                        
                        setResults(res.data)
                       console.log(res.data)
                       setLoading(false)
                      })
                      .catch(err=>{
                          console.log(err)
                         
                      })
        }else{
          alert('Saisissez un mot clef')
        }
        setLoading(true)
            
       
       
    
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
                            value:'searchByName',
                            label:'Nom'
                        },        
                        {
                            value:'searchByPrenom',
                            label:'Prénom'
                        },             
                        {
                          value:'searchByMle',
                          label:'Matricule'
                      },  
                    ]}
                    name="par"
                    isClearable
                    control={control}
                    onChange={
                      (values)=>{
                     setSearch(values[0])
                     
                      }}
              
                    />
                 </div>
     {search && <>       
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
        {loading && <p>Loadiiiiiing</p>}
        </div>

        </>}  
                    </form>

           </div>
           <div className="search-result">
        {results.length ? results.map(a=><PersonCard key={a.id} item={a}/>) :"Aucun Résultat Trouvé"}
        </div>
          
        </div>
    )
}

export default RhSearch
