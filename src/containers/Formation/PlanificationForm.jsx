import React, { useEffect, useState } from "react";
import { Spinner, Alert } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Axios from "axios";
import ReactSelect from "react-select";
import PlanificationResults from "./PlanificationResults";
const PlanificationForm = ({ sUrl, sId }) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [result, setResult] = useState([]);
  useEffect(() => {
    setLoading(true);
    Axios.get("http://localhost:8080/api/rh/perso/getAll")
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const { handleSubmit, register, errors, control } = useForm();
  const onSubmit = (values) => {
    console.log(values);
    Axios.post(
      "http://localhost:8080/api/formation/planification/" + sUrl + "/" + sId,
      values.personnels
    )
      .then((res) => {
        console.log(res.data);
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        setError(err.response.data);
      });
  };
  return (
    <div>
      {!loading && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="forme-group form-fields">
            <label htmlFor="personnels">Recherchez Et Selectionnez</label>
            <Controller
              as={ReactSelect}
              options={
                item.length
                  ? item
                  : [{ value: 0, label: "Erreur Base de donnee" }]
              }
              name="personnels"
              isClearable
              control={control}
              isMulti
            />
          </div>
          <div style={{ textAlign: "center" }} className="btn-div">
            <button type="submit" className="btn btn-success add-btn">
              Planifier
            </button>
          </div>
        </form>
      )}
      {result.length ? <PlanificationResults data={result} /> : <div></div>}
      {loading && <Spinner animation="border" />}

      {error && <Alert variant="danger">{error.libelle}</Alert>}
    </div>
  );
};

export default PlanificationForm;
