import React, { useEffect, useState } from "react";
import DataTableFormations from "../DataTables/DataTableFormations";
import Axios from "axios";
import DataTableSession from "../DataTables/DataTableSession";

const FormationsdeBases = ({ type, title }) => {
  const [Formas, setFormas] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/formation/activeSessions")
      .then((res) => {
        console.log(res.data);
        setFormas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="data-container-formation">
      <h2>{title}</h2>
      <DataTableSession data={Formas.length ? Formas : []} />
    </div>
  );
};

export default FormationsdeBases;
