import React from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCheckSquare,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
const TodoItem = ({ item }) => {
  return (
    <li className="d-flex justify-content-between my-2 todoitem">
      <h6
        className={`mt-1 mb-0 align-middle ${
          item.done ? "completed-task" : ""
        }`}
      >
        {item.label}
      </h6>
      <div className="todo-icon">
        <span
          className={`mx-2 ${item.done ? "text-success" : "text-secondary"}`}
        >
          <FontAwesomeIcon
            icon={item.done ? faCheckSquare : faSquare}
            onClick={() => {
              Axios.get(
                "http://localhost:8080/api/agenda/todo/done/" + item.value
              )
                .then((res) => {
                  alert("Tâche Terminée");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          />
        </span>
        <span
          className="mx-2 text-danger"
          onClick={() => {
            Axios.delete("http://localhost:8080/api/agenda/todo/" + item.value)
              .then((res) => {
                alert("Supprimé avec succès");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
