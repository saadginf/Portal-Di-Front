import React from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
const TodoInput = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    Axios.post("http://localhost:8080/api/agenda/todo/", values)
      .then((res) => {
        alert("Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-info text-white">
              <FontAwesomeIcon icon={faBook} />
            </div>
          </div>

          <input
            type="text"
            className="form-control"
            name="label"
            placeholder="Nouvelle Tâche"
            ref={register({
              required: "Champ Obligatoire",
            })}
          />
        </div>
        <div className="text-danger ">{errors.todo && errors.todo.message}</div>
        <button type="submit" className="btn btn-block mt-3 btn-success">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
