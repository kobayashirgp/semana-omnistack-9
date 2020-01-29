import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Dashboard() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const userId = localStorage.getItem("userId");
      const response = await api.get("/dashboard", {
        headers: { user_id: userId }
      });
      setSpots(response.data.spots);
    }
    loadSpots();
  }, []);

  return (
    spots && (
      <>
        <ul className="spot-list">
          {spots.map(spot => (
            <li key={spot._id}>
              <header
                style={{ backgroundImage: `url(${spot.thumbnail_url})` }}
              ></header>
              <strong>{spot.company}</strong>
              <span>{spot.price ? `R$${spot.price}/dia` : "GRATUITO"}</span>
            </li>
          ))}
        </ul>
        <Link to="/new">
          <button className="btn">Cadastrar novo spot</button>
        </Link>
      </>
    )
  );
}
