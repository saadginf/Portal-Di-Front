import React,{useEffect} from 'react'
import DetailItem from './DetailItem'
import './DetailOuv.css'
import {connect} from 'react-redux';
import {getOuvrage} from '../../actions/ouvactions'
import {getStatByUnit} from '../../actions/statsActions'
import BiblioCard from '../../Components/bibliocard/Bibliocard'
const DetailOuv = (props) => {
    useEffect(() => {
     
        props.getOuvrage(props.match.params.id);
        props.getstat(props.match.params.id)
       }, [props.getOuvrage,props.getstat]);
      
    return (
        <>
        <BiblioCard  unite={"Arme des Transmissions"}/>
        <div>
          <DetailItem
          link={props.ouv.fileLink}
          id={props.ouv.id}
          titre = {props.ouv.titre}
          auteurs ={props.ouv.auteurs ? props.ouv.auteurs : []}
          editeur = {props.ouv.editeur ? props.ouv.editeur.libbele : ""}
          descriptif ={props.ouv.descriptif ? props.ouv.classification.libbele : "Acune description"}
          origine={props.ouv.origine ? props.ouv.origine.libbele : ""}
          theme ={props.ouv.theme ? props.ouv.theme.libbele : ""}
           type={props.ouv.type ? props.ouv.type.libbele : ""}
           classification={props.ouv.classification ? props.ouv.classification.libbele : ""}
           createdAt={props.ouv.anneePublication ? props.ouv.anneePublication : ""}
          
          />
          <div className="container-detailItem">
          <table class="table table-bordered table-dark">
  <thead>
    <tr>
    <th></th>
     <th>INSP</th>
     <th>CIT</th>
     <th>ECT</th>
     <th>BST</th>
     <th>2BT</th>
     <th>3BT</th>
     <th>7BT</th>
    </tr>
  </thead>
  <tbody>
  {props.stats.length? props.stats.map((value) => (
                <tr>
                <th scope="row">{value.tome === 'Tome0' ? '-':value.tome}</th>
                <td>{value.uniteInsp}</td>
                <td>{value.uniteCit}</td>
                <td>{value.initeEct}</td>
                <td>{value.uniteBst}</td>
                <td>{value.unite2Bt}</td>
                <td>{value.unit3Bt}</td>
                <td>{value.unite7Bt}</td>
          
              </tr>
              )) :  "loading"}

  </tbody>
</table>
          </div>
        </div>
        </>
)
}


const mapStateToProps = ({ouv,statistics}) => ({
    loading:ouv.loading,
    error:ouv.error,
    ouv:ouv.ouvs,
    loadingSt:statistics.loading,
    errorSt:statistics.error,
    stats:statistics.stats
  });
  
  const mapDispatchToProps = {
  getOuvrage:getOuvrage,
  getstat:getStatByUnit
  };
  
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(DetailOuv);