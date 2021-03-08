import React, { useEffect, useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import Axios from "axios";
import PlanifItem from "./PlanifItem";
const PlanifModal = (props) => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Axios.get("http://localhost:8080/api/formation/planifSession")
      .then((res) => {
        setItem(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Modal centered size="xl" show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Planification</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {loading && <Spinner animation="border" />}

        {!loading && (
          <div className="session-planif">
            {item.length ? (
              item.map((a) => <PlanifItem item={a} key={a.value} />)
            ) : (
              <span></span>
            )}
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default PlanifModal;
