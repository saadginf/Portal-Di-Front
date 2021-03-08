import React, { useEffect, useState } from "react";
import DataTableFormations from "../DataTables/DataTableFormations";
import Axios from "axios";

const FormationsdeBases = ({ type, title }) => {
  const [Formas, setFormas] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/formation/" + type)
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
      <DataTableFormations data={Formas.length ? Formas : []} />
    </div>
  );
};

export default FormationsdeBases;
