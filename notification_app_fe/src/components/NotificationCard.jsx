export default function NotificationCard({ item, viewed }) {
  return (
    <div
      style={{
        padding: "12px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: viewed ? "#eee" : "#dff6ff",
        border: "1px solid #ccc",
      }}
    >
      <h4>{item.Type}</h4>
      <p>{item.Message}</p>
      <small>{item.Timestamp}</small>
    </div>
  );
}