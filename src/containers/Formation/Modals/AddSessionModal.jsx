import React, { useState, useEffect } from "react";
import Axios from "axios";
import scc from "../../../assets/success.png";
import { useForm, Controller } from "react-hook-form";
import { Modal, Button } from "react-bootstrap";
import ReactSelect from "react-select";
const AddSessionModal = (props) => {
  const { handleSubmit, register, errors, control } = useForm();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formations, setFormation] = useState([]);

  const onSubmit = (values) => {
    console.log(values);
    let data = {
      label: values.label,
      dateDebut: values.dateDebut,
      dateFin: values.dateFin,
      formation: {
        id: values.formation.value,
      },
    };
    Axios.post("http://localhost:8080/api/formation/addSession", data)
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => {
        setError("Lecteur déjà existant");
      });
  };
  useEffect(() => {
    Axios.get("http://localhost:8080/api/formation")
      .then((res) => {
        setFormation(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={() => {
        props.onHide();
        setSuccess(false);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {success ? <h2>Ajouté avec succés</h2> : <h2>Ajouter une Session</h2>}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {!success && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="forme-group form-fields">
              <label htmlFor="formation">Fromation</label>
              <Controller
                placeholder="Formation"
                as={ReactSelect}
                options={
                  formations.length
                    ? formations.map((x) => ({ value: x.id, label: x.label }))
                    : []
                }
                name="formation"
                isClearable
                control={control}
              />
            </div>
            <div className="forme-group form-fields">
              <label htmlFor="label">Label:</label>
              <input
                className="form-control"
                name="label"
                placeholder="Label"
                type="text"
                ref={register({
                  required: "Champ Obligatoire",
                })}
              />
              <div className="text-danger ">
                {errors.label && errors.label.message}
              </div>
            </div>

            <div className="forme-group form-fields">
              <label htmlFor="dateDebut">Date Debut:</label>
              <input
                className="form-control"
                name="dateDebut"
                type="date"
                ref={register({
                  required: "Champ Obligatoire",
                })}
              />
              <div className="text-danger ">
                {errors.dateDebut && errors.dateDebut.message}
              </div>
            </div>
            <div className="forme-group form-fields">
              <label htmlFor="dateFin">Date Fin:</label>
              <input
                className="form-control"
                name="dateFin"
                type="date"
                ref={register({
                  required: "Champ Obligatoire",
                })}
              />
              <div className="text-danger ">
                {errors.dateFin && errors.dateFin.message}
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

export default AddSessionModal;
