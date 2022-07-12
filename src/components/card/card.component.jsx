import React from "react";
import "./card.styles.css";

const Card = ({ monster }) => {
  const { name, email, id } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
        alt={`Fuck You! Just Kidding. My name is ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
