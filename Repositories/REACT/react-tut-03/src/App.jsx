import { Link } from "react-router-dom";
import AppRoutes from "./Routing/routes.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link to="/">Start</Link>
          <Link to="/about">Über uns</Link>
          <Link to="/products">Produkte</Link>
          <Link to="/users">Benutzer</Link>
        </nav>

        <AppRoutes />
      </div>
    </>
  );
}

export default App;
