import React, { useState, useEffect } from "react";
import Axios from "axios";
import scc from "../../assets/success.png";
import { useForm, Controller } from "react-hook-form";
import { Modal } from "react-bootstrap";
import ReactSelect from "react-select";
const AddPersonModal = (props) => {
  const { handleSubmit, register, errors, control } = useForm();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [item, setItem] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/rh/perso/getFieldsPer")
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onSubmit = (values) => {
    Axios.post("http://localhost:8080/api/rh/perso", values)
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setError("Saisie Invalide");
      });
    console.log(values);
  };
  return (
    <Modal centered size="lg" show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        {success ? <h2>Ajouté avec succés</h2> : <h2>Aouter un Militaire</h2>}
      </Modal.Header>

      <Modal.Body>
        {!success && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-addPerson">
              <div className="forme-group form-fields">
                <label htmlFor="nom">Nom:</label>
                <input
                  className="form-control"
                  name="nom"
                  placeholder="Nom"
                  type="text"
                  ref={register({
                    required: "Champ Obligatoire",
                  })}
                />
                <div className="text-danger ">
                  {errors.nom && errors.nom.message}
                </div>
              </div>

              <div className="forme-group form-fields">
                <label htmlFor="prenom">Prénom:</label>
                <input
                  className="form-control"
                  name="prenom"
                  placeholder="Prénom"
                  type="text"
                  ref={register({
                    required: "Champ Obligatoire",
                  })}
                />
                <div className="text-danger ">
                  {errors.prenom && errors.prenom.message}
                </div>
              </div>

              <div className="forme-group form-fields">
                <label htmlFor="cin">CNI:</label>
                <input
                  className="form-control"
                  name="cin"
                  placeholder="CNI"
                  type="text"
                  ref={register({
                    required: "Champ Obligatoire",
                  })}
                />
                <div className="text-danger ">
                  {errors.cin && errors.cin.message}
                </div>
              </div>

              <div className="forme-group form-fields">
                <label htmlFor="mle">Matricule:</label>
                <input
                  className="form-control"
                  name="mle"
                  placeholder="Matricule"
                  type="text"
                  ref={register({
                    required: "Champ Obligatoire",
                  })}
                />
                <div className="text-danger ">
                  {errors.mle && errors.mle.message}
                </div>
              </div>

              <div className="forme-group form-fields">
                <label htmlFor="dateNaissance">Date de Naissance:</label>
                <input
                  className="form-control"
                  name="dateNaissance"
                  placeholder="Date de Naissance"
                  type="date"
                  ref={register({
                    required: "Champ Obligatoire",
                  })}
                />
                <div className="text-danger ">
                  {errors.dateNaissance && errors.dateNaissance.message}
                </div>
              </div>
              <div className="forme-group form-fields">
                <label htmlFor="dateEntreeService">Entrée en service:</label>
                <input
                  className="form-control"
                  name="dateEntreeService"
                  placeholder="Entrée en Service"
                  type="date"
                  ref={register({
                    required: "Champ Obligatoire",
                  })}
                />
                <div className="text-danger ">
                  {errors.dateNaissance && errors.dateNaissance.message}
                </div>
              </div>

              <div className="forme-group form-fields">
                <label htmlFor="nvInstruction">
                  Niveau d'instruction du militaire
                </label>
                <Controller
                  as={ReactSelect}
                  options={item ? item.niveauIns : []}
                  name="nvInstruction"
                  isClearable
                  control={control}
                />
              </div>
              <div className="forme-group form-fields">
                <label htmlFor="position">Position actuelle du militaire</label>
                <Controller
                  as={ReactSelect}
                  options={item ? item.position : []}
                  name="position"
                  isClearable
                  control={control}
                />
              </div>
              <div className="forme-group form-fields">
                <label htmlFor="specialite">
                  Spécialité actuelle du militaire
                </label>
                <Controller
                  as={ReactSelect}
                  options={item ? item.speialite : []}
                  name="specialite"
                  isClearable
                  control={control}
                />
              </div>
              <div className="forme-group form-fields">
                <label htmlFor="uniteActuelle">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unité
                  Actuelle&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
                <Controller
                  as={ReactSelect}
                  options={item ? item.unite : []}
                  name="uniteActuelle"
                  isClearable
                  control={control}
                />
              </div>

              <div className="forme-group form-fields">
                <label htmlFor="gradeActuelle">
                  &nbsp;&nbsp;&nbsp; Grade Actuel&nbsp;&nbsp;&nbsp;
                </label>
                <Controller
                  as={ReactSelect}
                  options={item ? item.grade : []}
                  name="gradeActuelle"
                  isClearable
                  control={control}
                />
              </div>

              <div className="forme-group form-fields">
                <label htmlFor="fonctionActuelle">
                  &nbsp;&nbsp;&nbsp; Fonction Actuelle&nbsp;&nbsp;&nbsp;
                </label>
                <Controller
                  as={ReactSelect}
                  options={item ? item.foctions : []}
                  name="fonctionActuelle"
                  isClearable
                  control={control}
                />
              </div>

              <div className="forme-group form-fields">
                <label htmlFor="origine">
                  Origine&nbsp;&nbsp;&nbsp;du&nbsp;&nbsp;&nbsp;Militaire
                </label>
                <Controller
                  as={ReactSelect}
                  options={item ? item.origine : []}
                  name="origine"
                  isClearable
                  control={control}
                />
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

export default AddPersonModal;
