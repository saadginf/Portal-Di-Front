import React, { useState, useEffect } from "react";
import { Spinner, Tab, Tabs, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import PlanificationForm from "./PlanificationForm";

const PlanificationSession = (props) => {
  const [key, setKey] = useState("home");
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const {
    match: { params },
  } = props;
  useEffect(() => {
    setLoading(true);
    Axios.get("http://localhost:8080/api/formation/session/" + params.id)
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="formation-home">
      {!loading && (
        <div>
          <div className="info-formation-container">
            <div className="item-formation" style={{ textAlign: "center" }}>
              <h2>{item.formation.label}</h2>
              <h2>{item.formation.etablissement.label}</h2>
              <h6>{item.formation.reference}</h6>
              <h6>{item.formation.categorieFormation.label}</h6>
              <h6>{item.formation.typeFormation.label}</h6>
              <Button
                onClick={() => {
                  Axios.get(
                    "http://localhost:8080/api/formation/download/" +
                      item.formation.id,
                    {
                      responseType: "blob",
                      haders: {
                        Accept: "application/pdf",
                      },
                    }
                  )
                    .then((res) => {
                      const file = new Blob([res.data], {
                        type: "application/pdf",
                      });
                      const fileUrl = URL.createObjectURL(file);
                      window.open(fileUrl);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                <FontAwesomeIcon icon={faDownload} />
                &nbsp;Note De Base
              </Button>
            </div>
            <div className="tabs-formation">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="tabs-formations-details"
              >
                <Tab eventKey="home" title="Conditions">
                  <ol className="ol-formation">
                    {item.formation.conditions.split("\n").map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ol>
                </Tab>
                <Tab eventKey="profile" title="Dossier">
                  <ol className="ol-formation">
                    {item.formation.compositionDossier.split("\n").map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ol>
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="planification-form">
            <PlanificationForm sId={item.value} sUrl={item.urlPlanification} />
          </div>
        </div>
      )}
      {loading && <Spinner animation="border" />}
    </div>
  );
};

export default PlanificationSession;
