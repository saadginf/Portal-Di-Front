

import React, {useEffect, useState} from 'react'
import 'react-big-calendar-like-google/lib/css/react-big-calendar.css'
import Calendar from 'react-big-calendar-like-google'
import moment from 'moment'
import './calender.css'
import 'moment/locale/fr'
import {connect} from 'react-redux';
import {getAll, addExmp,getTopten, delEvent, getTopTwo, getTopFive} from '../../actions/eventsactions'
import {Tabs,Tab} from "react-bootstrap"
import FormEvent from "../../Components/Formulaire/FormEvent"
import Agenda from "../../Components/agenda/Agenda"
import Datable from '../../Components/Datatable/DataTableEvents'
import 'react-notifications/lib/notifications.css';
import Toast from '../../Components/Toast/Toast'
Calendar.momentLocalizer(moment);


const Calender = props =>{ 
  const [key, setKey] = useState('calender');
  useEffect(() => {
 props.getAll();
 props.getTopten();
 props.getTopfive();
 props.getToptwo();

  }, [props.getAll,props.getTopten])
  
 
  return(
    <div style={{  margin:"20px",padding:"15px"}} className="fluid-container">
    <Tabs
    id="controlled-tab-example"
    activeKey={key}
    onSelect={(k) => setKey(k)}
  >
     <Tab eventKey="calender" title="Calendrier">
   
    <Calendar
      culture='fr'
      events={ props.events ? props.events:[]}
      startAccessor="start"
      endAccessor="end"
      onSelectEvent={event => alert(event.descrptif)}
      views={['month']}
      style={{ height: 800 }}
    
    />
      
      </Tab>
      <Tab eventKey="agenda" title="Dans 10jrs">
      <div className="col-md-6  offset-md-3">
      <h1 className="add-title title-unite-biblio">Dans 5 Jours</h1>
          <Agenda topten={props.topfive? props.topfive : []}/>
     
      <h1 className="add-title title-unite-biblio">Dans 10 Jours</h1>
          <Agenda topten={props.topten? props.topten : []}/>
        </div>
        
      </Tab>
      <Tab eventKey="liste" title="Tous les Evts">
      <div className="data-table-container">
      <h1 className ="title-unite-biblio">Liste des Evénement</h1>
      <Datable data={ props.events ? props.events:[]} delete={props.delEvent} />
      </div>
      </Tab>
      <Tab eventKey="ajouter" title="Ajouter">
      <div className="col-md-6  offset-md-3">
      <h1 className="add-title title-unite-biblio">Ajouter un évenement</h1>
        <FormEvent addEvent={props.addEvent}/>
    </div>
      </Tab>

  </Tabs>
 
  {props.toptwo.length? <Toast 
       toastList={props.toptwo}
       position="bottom-right"
      /> : ""}
  </div>
)
  





}
const mapStateToProps = ({events}) => ({
  loading:events.loading,
  error:events.error,
  events:events.events,
  topten:events.topten,
  toptwo:events.toptwo,
  topfive:events.topfive
});

const mapDispatchToProps = {
getAll:getAll,
addEvent:addExmp,
getTopten:getTopten,
delEvent:delEvent,
getToptwo:getTopTwo,
getTopfive:getTopFive,
};



export default connect(mapStateToProps,mapDispatchToProps)(Calender);