import React, { useEffect } from "react";
import api from "../../services/api";

export default function Dashboard() {
  useEffect(() => {
    async function loadSpots() {
      const userId = localStorage.getItem("userId");
      const response = await api.get("/dashboard", {
        headers: { user_id: userId }
      });
      console.log(response.data);
    }
    loadSpots();
  }, []);

  return (
    <div>
      <h1>UAU</h1>
    </div>
  );
}
