import React from 'react'
import AgendaItem from "./AgendaItem"
const Agenda = (props) => {
    
    
    return (
        
        <div className="to10events">
           {props.topten.length ? props.topten.map((value) => (
                   <AgendaItem
                   key={value.id}
                   title={value.title}
                   color={value.bgColor}
                   descriptif={value.descrptif}
                   start={value.start}
                   end={value.end}
                   />
              )): "Aucun événement"}
           
        </div> 
      
    )
}

export default Agenda
