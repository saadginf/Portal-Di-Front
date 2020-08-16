import React , {useState} from 'react'
import searchimg from '../../assets/searchimg.png'
import { useForm , Controller} from "react-hook-form";
import ReactSelect from "react-select";
import {connect} from 'react-redux';
import Axios from "axios";
import SearchItemResult from './SearchItemResult';
const Search = props => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const onSubmit = values =>{
        console.log(values);
        setLoading(true)
        let formData = new FormData();  
     
        formData.append("typeDocument", values.typedocument.value);
        formData.append("sousTheme", values.sousTheme.value);
  
       
        Axios.post('http://localhost:8080/api/archive/doc/search', formData,{
                     
                     headers:{
                     "Content-Type": "multipart/form-data",
                        }
                      })
                      .then(res=>{
                        
                        setResults(res.data)
                       console.log(res.data)
                       setLoading(false)
                      })
                      .catch(err=>{
                          console.log(err)
                         
                      })
      }
    
    const [sousThemes, setSouThemes] = useState([]);
    const { handleSubmit, register, errors,control } = useForm();
  
    return (
        <>
        <div className="search-doc">
             <h1 className="title-search">Chercher des documents</h1>
             <div className="imgsearch">
                 <img src={searchimg}/>
                 <div className="col-md-6  offset-md-3">
                    <form className="form-search" onSubmit={handleSubmit(onSubmit)}>
                    
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
                <label htmlFor="typedocument">Type</label>

                <Controller
                as={ReactSelect}
                options={props.fields.type}
                name="typedocument"
                isClearable
                control={control}
                />
             
        </div>
        <div className="button-form search-btn">
        <button type="submit" className="btn btn-success add-btn" >
            Chercher
        </button>
        {loading && <p>Loadiiiiiing</p>}
        </div>
       
                    </form>

                    
                </div>
             </div>
        </div>
        <div className="search-result">
        {results.length ? results.map(a=><SearchItemResult item={a}/>) :""}
        </div>
        </>
    )
}


const mapStateToProps = ({fieldsdoc}) => ({
 
    fields:fieldsdoc.fieldsdoc,
  });
  
  const mapDispatchToProps = {

  
  };
  
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Search);