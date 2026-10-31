import { useEffect, useState } from "react";
import { getHealth } from "./services/api";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Checking backend...");
  const [error, setError] = useState("");

  useEffect(() => {
    getHealth()
      .then((data) => setStatus(data.status))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main>
      <h1>Factory Inventory SaaS</h1>
      <p>Frontend: React + TypeScript</p>
      <p>Backend: {error || status}</p>
    </main>
  );
}

export default App;
