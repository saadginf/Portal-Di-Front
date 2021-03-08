import React, { useState } from "react";
import Axios from "axios";
import scc from "../../../assets/success.png";
import { useForm, Controller } from "react-hook-form";
import { Modal } from "react-bootstrap";
import ReactSelect from "react-select";
const AddFormationModal = (props) => {
  const { handleSubmit, register, errors, control } = useForm();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const onSubmit = (values) => {
    let formData = new FormData();
    formData.append("file", values.file[0]);
    formData.append("label", values.label);
    formData.append("reference", values.reference);
    formData.append("etablissement", values.etablissement.value);
    formData.append("conditions", values.conditions);
    formData.append("compositionDossier", values.compositionDossier);
    formData.append("typeFormation", values.typeFormation.value);
    formData.append("catForm", values.categorieFormation.value);

    Axios.post("http://localhost:8080/api/formation", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => {
        setError("Saisie Invalide");
      });

    // Axios.post("http://localhost:8080/api/rh/perso", values)
    // .then((res) => {
    // console.log(res.data);
    //setSuccess(true);
    //})
    //.catch((err) => {
    // console.log(err);
    //setError("Saisie Invalide");
    // });
    console.log(values);
  };
  return (
    <Modal
      centered
      size="lg"
      show={props.show}
      onHide={() => {
        props.onHide();
        setSuccess(false);
      }}
    >
      <Modal.Header closeButton>
        {success ? <h2>Ajouté avec succés</h2> : <h2>Aouter une Formation</h2>}
      </Modal.Header>

      <Modal.Body>
        {!success && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-addPerson">
              <div className="forme-group form-fields">
                <label htmlFor="label">Formation:</label>
                <input
                  className="form-control"
                  name="label"
                  placeholder="Formation"
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
                <label htmlFor="reference">Référence:</label>
                <input
                  className="form-control"
                  name="reference"
                  placeholder="Référence"
                  type="text"
                  ref={register({
                    required: "Champ Obligatoire",
                  })}
                />
                <div className="text-danger ">
                  {errors.reference && errors.reference.message}
                </div>
              </div>

              <div className="forme-group form-fields">
                <label htmlFor="compositionDossier">Dossier:</label>
                <textarea
                  rows="4"
                  cols="100"
                  className="form-control"
                  name="compositionDossier"
                  placeholder="Composition du Dossier"
                  ref={register({
                    required: "Champ Obligatoire",
                  })}
                />
                <div className="text-danger ">
                  {errors.compositionDossier &&
                    errors.compositionDossier.message}
                </div>
              </div>

              <div className="forme-group form-fields">
                <label htmlFor="conditions">Conditions:</label>
                <textarea
                  rows="4"
                  cols="100"
                  className="form-control"
                  name="conditions"
                  placeholder="Conditions"
                  ref={register({
                    required: "Champ Obligatoire",
                  })}
                />
                <div className="text-danger ">
                  {errors.conditions && errors.conditions.message}
                </div>
              </div>

              <div className="forme-group form-fields">
                <label htmlFor="typeFormation">Type de la Formation</label>
                <Controller
                  as={ReactSelect}
                  options={[
                    {
                      value: 1,
                      label: "CES",
                    },
                    {
                      value: 2,
                      label: "Bac",
                    },
                  ]}
                  name="typeFormation"
                  isClearable
                  control={control}
                />
              </div>
              <div className="forme-group form-fields">
                <label htmlFor="categorieFormation">
                  Categorie de la Formation
                </label>
                <Controller
                  as={ReactSelect}
                  options={[
                    {
                      value: 1,
                      label: "Service",
                    },
                    {
                      value: 2,
                      label: "Stage",
                    },
                  ]}
                  name="categorieFormation"
                  isClearable
                  control={control}
                />
              </div>
              <div className="forme-group form-fields">
                <label htmlFor="etablissement">Etablissement / Ecolde</label>
                <Controller
                  as={ReactSelect}
                  options={[
                    {
                      value: 1,
                      label: "Service",
                    },
                    {
                      value: 2,
                      label: "Stage",
                    },
                  ]}
                  name="etablissement"
                  isClearable
                  control={control}
                />
              </div>
              <div className="forme-group form-fields">
                <label htmlFor="file">Note de Base de la Formation:</label>
                <input
                  className="form-control"
                  name="file"
                  placeholder="DNote de Base "
                  type="file"
                  ref={register({
                    required: "Champ Obligatoire",
                  })}
                />
                <div className="text-danger ">
                  {errors.file && errors.file.message}
                </div>
              </div>
            </div>

            <div className="addButondiv">
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
    </Modal>
  );
};

export default AddFormationModal;
