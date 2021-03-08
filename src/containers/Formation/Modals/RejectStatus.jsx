import React from "react";
import { useForm } from "react-hook-form";
import { Modal, Button } from "react-bootstrap";

import { useState } from "react";
import Axios from "axios";
import scc from "../../../assets/success.png";
const RejectStatus = (props) => {
  const [success, setSuccess] = useState(false);

  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    let formData = new FormData();

    formData.append("motif", values.motif);

    Axios.post(
      "http://localhost:8080/api/inscription/rejectstatus/" + props.id,
      formData
    )
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(values);
  };
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
          {success ? (
            <h2>Inscription Rejetée</h2>
          ) : (
            <h2>Rejeter Inscription</h2>
          )}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {!success && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control"
              name="id"
              placeholder="id"
              value={props.id}
              readOnly
              hidden
              type="text"
              ref={register({
                required: "Champ Obligatoire",
              })}
            />

            <div className="forme-group form-fields">
              <label htmlFor="motif">Motif:</label>
              <input
                className="form-control"
                name="motif"
                placeholder="Motif"
                type="text"
                ref={register({
                  required: "Champ Obligatoire",
                })}
              />
              <div className="text-danger ">
                {errors.motif && errors.motif.message}
              </div>
            </div>
            <div className="button-form">
              <button type="submit" className="btn btn-success add-btn">
                Enregistrer
              </button>
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
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RejectStatus;
