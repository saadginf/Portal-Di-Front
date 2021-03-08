import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Modal, Button } from "react-bootstrap";
import ReactSelect from "react-select";
import { useState, useEffect } from "react";
import Axios from "axios";
import scc from "../../../assets/success.png";
const AddFormationToP = (props) => {
  const [item, setItem] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { handleSubmit, register, errors, control } = useForm();
  useEffect(() => {
    Axios.get("http://localhost:8080/api/formation/fieldsFoCs")
      .then((res) => {
        setItem(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onSubmit = (values) => {
    // let data = {
    // personel: {
    // id: values.personel,
    // },
    // grade: {
    //  value: values.grade.value,
    //},
    // dateGrade: values.dateGrade,
    //};
    let formData = new FormData();
    formData.append("idCycle", values.cs.value);
    formData.append("idFormation", values.formation.value);
    formData.append("personne", values.personel);
    formData.append("dateObt", values.dateObt);
    console.log(values);
    Axios.post("http://localhost:8080/api/inscription", formData)
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setError("Saisie Invalide");
      });
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={props.onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {success ? (
            <h2>Ajouté avec succés</h2>
          ) : (
            <h2>Ajouter une formation</h2>
          )}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {!success && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="forme-group form-fields">
              <label htmlFor="formation">Formation</label>
              <Controller
                placeholder="Formation"
                as={ReactSelect}
                options={item ? item.formations : []}
                name="formation"
                isClearable
                control={control}
              />
            </div>
            <div className="forme-group form-fields">
              <label htmlFor="cs">Cycle Scolaire</label>
              <Controller
                placeholder="Cycle Scolaire"
                as={ReactSelect}
                options={item ? item.cycleScolaire : []}
                name="cs"
                isClearable
                control={control}
              />
            </div>
            <input
              className="form-control"
              name="personel"
              placeholder="Personel"
              value={props.id}
              readOnly
              hidden
              type="text"
              ref={register({
                required: "Champ Obligatoire",
              })}
            />
            <div className="forme-group form-fields">
              <label htmlFor="dateObt">Date d'obtention:</label>
              <input
                className="form-control"
                name="dateObt"
                placeholder="Date Obtention"
                type="date"
                ref={register({
                  required: "Champ Obligatoire",
                })}
              />
              <div className="text-danger ">
                {errors.dateDebutAff && errors.dateDebutAff.message}
              </div>
            </div>
            <div className="button-form">
              <button type="submit" className="btn btn-success add-btn">
                Enregistrer
              </button>
              {error && <p className="text-danger ">{error}</p>}
            </div>
          </form>
        )}
        {success && (
          <div className="success-vector">
            <img src={scc} alt="" />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.onHide();
            setSuccess(false);
            setError("");
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddFormationToP;
