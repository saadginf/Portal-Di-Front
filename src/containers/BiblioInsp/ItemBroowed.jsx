import React from 'react'

const ItemBroowed = (props) => {

    let date2 = new Date(props.dateDebut); 
      let present_date = new Date(); 
      // To calculate the time difference of two dates 
      let Difference_In_Time =present_date.getTime() - date2.getTime(); 
      // To calculate the no. of days between two dates 
      let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    let final = Difference_In_Days.toFixed(0)
    
    return (
        <div className="borrow-item">
          <span className="number-days">{final}</span>
            <h4>Lecteur:</h4>
             <p>{props.lecteur}</p>
            <h4>RayonId Livre:</h4>
            <p> {props.rayonId}</p>
            <h4>Date Sortie:</h4>
            <p>{props.dateDebut}</p>
    
           <div className="button-form btn-form-borrow">
        <button type="submit" className="btn btn-success add-btn" onClick={props.onClick}>Retourner</button>
        </div>
       
        </div>
    )
}

export default ItemBroowed
