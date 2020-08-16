import React , {useEffect} from 'react'
import BiblioCard from '../../Components/bibliocard/Bibliocard'
import DataTableARME from '../../Components/Datatable/DataTableARME'
import {connect} from 'react-redux';
import {getAllOuvrages} from '../../actions/ouvactions'
const SearchInsp = (props) => {
    const { getAllOuv } = props;
    useEffect(() => {
       getAllOuv();
     
       }, [getAllOuv]);
   
    return (
        <div>
            <BiblioCard  unite={"Arme des Transmissions"}/>
            <div style={{  margin:"20px",padding:"15px"}} className="fluid-container">
            <h1 className ="title-unite-biblio">Liste des ouvrages de l'Arme</h1>
            <DataTableARME data={props.ouvs} />
            </div>
        </div>
    )
}



const mapStateToProps = ({ouv}) => ({
    loading:ouv.loading,
    error:ouv.error,
    ouvs:ouv.ouvs
});

const mapDispatchToProps = {
  getAllOuv: getAllOuvrages,
};



export default connect(mapStateToProps,mapDispatchToProps)(SearchInsp);