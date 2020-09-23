import React, {useState} from 'react'
import {Tabs,Tab} from "react-bootstrap"
import RhSearch from './RhSearch'
import DataTable from './DataTablePerso'
const RhPage = () => {
    const [key, setKey] = useState('home');
    return (
        <div>
            <div className="card-title-rh">
                <h1>Gestion du Personel</h1>
                <h4>Inspection des Transmissions</h4>
            </div>
            <div className="tabs-rh">
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            >
            <Tab eventKey="home" title="Chercher">
                <RhSearch/>

            </Tab>
            <Tab eventKey="profile" title="Liste">
                <DataTable/>
            </Tab>
        </Tabs>
            </div>
        </div>
    )
}

export default RhPage
