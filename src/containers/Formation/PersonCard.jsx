import React from 'react'
import DefaultUser from '../../assets/Default-welcomer.png'


const PersonCard = ({item}) => {
  
    return (
        <div id="main-card">
            <div className="ruban"></div>
         <div className="content">
                     <div className="photo">
            {item.photo ? <img src={item.photo} className="img-user"></img>:<img className="img-user" src={DefaultUser}></img>}
        </div>
        <div> 
    <h3> {item.nom+' '+item.prenom}</h3>
          <h5>Grade : {item.gradeActuelle.label}</h5> 
       
    <h4>Unité: {item.uniteActuelle.label}</h4>
        <hr></hr>
        <div className="contact">
           <a href={'/profile/'+item.id}><div className="btn btn-primary">Voire Profile</div></a>
        </div>
        </div>
        </div>
        
    </div>
    )
}
export default PersonCard