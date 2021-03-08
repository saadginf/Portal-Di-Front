import React, { useState, useEffect } from "react";
import { Spinner, Tab, Tabs, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faUserFriends,
  faUsersSlash,
  faHourglassHalf,
  faCalendarTimes,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import DataTable from "./DataTables/DataTableSessPers";

const SessionDetails = (props) => {
  const [key, setKey] = useState("home");
  const [item, setItem] = useState();
  const [pers, setPers] = useState();
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
          <div className="ribbon ribbon-top-right">
            <span>
              {item.planification
                ? "planification"
                : item.active
                ? "En Cours"
                : "Terminee"}
            </span>
          </div>
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
          <div className="sessions-options">
            <div
              className="btn btn-info"
              onClick={() => {
                setLoading(true);
                Axios.get(
                  "http://localhost:8080/api/inscription/insbysession/" +
                    params.id
                )
                  .then((res) => {
                    console.log(res.data);
                    setPers(res.data);
                    setLoading(false);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faUserFriends} />
              &nbsp;Participants
            </div>
            <div className="btn btn-success">
              {" "}
              <FontAwesomeIcon
                icon={faGraduationCap}
                onClick={() => {
                  Axios.get(
                    "http://localhost:8080/api/inscription/retenuesIns/" +
                      params.id,
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
              />
              &nbsp;Can.Retenus
            </div>
            <div className="btn btn-secondary">
              {" "}
              <FontAwesomeIcon
                icon={faUsersSlash}
                onClick={() => {
                  Axios.get(
                    "http://localhost:8080/api/inscription/rejectedIns/" +
                      params.id,
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
              />
              &nbsp;Cand.Rejetée
            </div>
            {item.planification && (
              <div
                className="btn btn-warning"
                onClick={() => {
                  if (
                    window.confirm(
                      "Êtes vous sûr de vouloir mettre fin à la planifcation"
                    )
                  ) {
                    Axios.get(
                      "http://localhost:8080/api/formation/finplanification/" +
                        params.id
                    )
                      .then((res) => {
                        alert("Fin de Planifacation");
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }
                }}
              >
                {" "}
                <FontAwesomeIcon icon={faHourglassHalf} />
                &nbsp; Fin Planification
              </div>
            )}
            {item.active && (
              <div
                className="btn btn-danger"
                onClick={() => {
                  if (
                    window.confirm(
                      "Êtes vous sûr de vouloir mettre fin à la planifcation"
                    )
                  ) {
                    Axios.get(
                      "http://localhost:8080/api/formation/finsession/" +
                        params.id
                    )
                      .then((res) => {
                        alert("Fin de Session");
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }
                }}
              >
                {" "}
                <FontAwesomeIcon icon={faCalendarTimes} />
                &nbsp; Fin Session
              </div>
            )}
          </div>
        </div>
      )}
      {loading && <Spinner animation="border" />}

      {pers && <DataTable data={pers} />}
    </div>
  );
};

export default SessionDetails;
