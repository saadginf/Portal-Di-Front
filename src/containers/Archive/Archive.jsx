import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import FromDoc from "../../Components/Formulaire/FormArchive";
import DataTableArchive from "../../Components/Datatable/DataTableArchive";
import "./archive.css";
import Axios from "axios";
import Search from "./Search";
const Archive = () => {
  const [key, setKey] = useState("home");
  const [data, setData] = useState("home");
  useEffect(() => {
    Axios.get("http://localhost:8080/api/archive/doc")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{ margin: "20px", padding: "15px" }}
      className="fluid-container"
    >
      <h1 className="title-archive">Gestion Des Archives</h1>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="Chercher">
          <div className="data-table-container">
            <Search />
          </div>
        </Tab>

        <Tab eventKey="ouvrage" title="Ajouter un Document">
          <h1 className="add-title title-unite-biblio">
            Ajouter un nouveau Document
          </h1>
          <div className="col-md-6  offset-md-3">
            <FromDoc />
          </div>
        </Tab>
        <Tab eventKey="profile" title="Afficher Tout">
          <h1 className="add-title title-unite-biblio ">Tous les Documents</h1>
          <div className="col-md-10  offset-md-1">
            <DataTableArchive data={data} />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Archive;
