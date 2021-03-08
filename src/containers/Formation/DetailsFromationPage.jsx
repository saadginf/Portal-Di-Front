import React, { useState, useEffect } from "react";
import { Spinner, Tab, Tabs, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";

const DetailsFormationPage = (props) => {
  const [key, setKey] = useState("home");
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const {
    match: { params },
  } = props;
  let parametre = params.id ? params.id : props.parametre;
  useEffect(() => {
    setLoading(true);
    Axios.get("http://localhost:8080/api/formation/" + parametre)
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
        <div className="info-formation-container">
          <div className="item-formation" style={{ textAlign: "center" }}>
            <h2>{item.label}</h2>
            <h2>{item.etablissement.label}</h2>
            <h6>{item.reference}</h6>
            <h6>{item.categorieFormation.label}</h6>
            <h6>{item.typeFormation.label}</h6>
            <Button
              onClick={() => {
                Axios.get(
                  "http://localhost:8080/api/formation/download/" + item.id,
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
                  {item.conditions.split("\n").map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ol>
              </Tab>
              <Tab eventKey="profile" title="Dossier">
                <ol className="ol-formation">
                  {item.compositionDossier.split("\n").map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ol>
              </Tab>
            </Tabs>
          </div>
        </div>
      )}
      {loading && <Spinner animation="border" />}
    </div>
  );
};

export default DetailsFormationPage;
