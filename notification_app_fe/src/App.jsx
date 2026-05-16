import { Routes, Route, Link } from "react-router-dom";
import AllNotifications from "./pages/AllNotifications";
import PriorityNotifications from "./pages/PriorityNotifications";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px", background: "#f4f4f4", minHeight: "100vh" }}>
      
      <h1 style={{ textAlign: "center" }}>📢 Campus Notification System</h1>

      <nav style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        margin: "20px 0"
      }}>
        <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>
          All Notifications
        </Link>

        <Link to="/priority" style={{ textDecoration: "none", fontWeight: "bold" }}>
          Priority Notifications
        </Link>
      </nav>

      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "800px",
        margin: "auto"
      }}>
        <Routes>
          <Route path="/" element={<AllNotifications />} />
          <Route path="/priority" element={<PriorityNotifications />} />
        </Routes>
      </div>

    </div>
  );
}