import React from "react";
import TodoInput from "./TodoInput";
import "./todo.css";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import Axios from "axios";
const TodoPage = () => {
  const [item, setItem] = useState(null);
  useEffect(() => {
    Axios.get("http://localhost:8080/api/agenda/todo")
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <TodoInput />

      <div className="container d-flex justify-content-around flex-wrap">
        <div className="todos-done card ">
          <h3>En Instance</h3>

          {item ? (
            item.instances.map((a) => <TodoItem item={a} id={a.value} />)
          ) : (
            <span>Acune Tâche en instance</span>
          )}
        </div>
        <div className="todos-done card">
          <h3>Terminées</h3>
          {item ? (
            item.termines.map((a) => <TodoItem item={a} id={a.value} />)
          ) : (
            <span>Acune Tâche terminée récemment</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
