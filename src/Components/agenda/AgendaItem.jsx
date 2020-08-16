import React from 'react'
import './agendaItem.css'
import imgevent from "../../assets/event.png"
const AgendaItem = (props) => {
    const pStyle = {
        width:'50%',
        textAlign:'left',
        height:'5px',
        marginLeft:'0',
        backgroundColor:props.color
      };
      const iStyle = {
        width:'60px',
        height:'60px',
      };
    return (
        <div className="agenda-item">
            <div className="title-topten"> <h2>{props.title}</h2>
            <img src={imgevent} alt="event"style={iStyle}/>
            </div>
           
            <hr style={pStyle}></hr>
            
            <div className="decriptif-dates">
                <div className="descriptif-event">
                <h4>Déscriptif:</h4>
                <p>{props.descriptif}</p>
                </div>
                <div className="date-events">
                    <div className="start-date">
                        <h3>Début</h3>
                         <p>{props.start}</p>
                    </div>
                    <hr style={pStyle}></hr>
                    <div className="end-date">
                        <h3>Fin</h3>
                         <p>{props.end}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgendaItem
