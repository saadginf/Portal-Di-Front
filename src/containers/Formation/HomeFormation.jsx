import React, { useState } from "react";
import "./formation.css";
import imagesuivie from "../../assets/suivie.png";
import imageplan from "../../assets/planif.png";
import imagerh from "../../assets/gestionrh.png";
import ItemRubrique from "./ItemRubrique";
import PlanifModal from "./PlanifModal";
import GesModal from "./GesModal";
const HomeFormation = () => {
  const [showplanif, setshowplanif] = useState(false);
  const [showges, setshowges] = useState(false);
  return (
    <>
      <div className="formation-home">
        <h2 style={{ textAlign: "center", margin: "15px" }}>
          Pilotage et Gestion de la formation
        </h2>
        <div className="formation-items">
          <ItemRubrique
            title="Planification"
            image={imageplan}
            text="Cette rubrique concerne la planification de tous les stages Militaires"
            onClick={() => setshowplanif(true)}
          />

          <ItemRubrique
            title="Suivie"
            image={imagesuivie}
            href="/dashboard"
            text="Cette rubrique concerne le suivie de la formation du personnel de l'arme"
          />

          <ItemRubrique
            onClick={() => setshowges(true)}
            title="Gestion"
            image={imagerh}
            text="Cette rubrique concerne le suivie de la formation du personnel de l'arme"
          />
        </div>
      </div>
      <GesModal show={showges} handleClose={() => setshowges(false)} />
      <PlanifModal show={showplanif} handleClose={() => setshowplanif(false)} />
    </>
  );
};

export default HomeFormation;
