import { useEffect, useState } from "react";
import axios from "axios";
import Log from "../utils/logger";

const priorityMap = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export default function PriorityNotifications() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await Log("frontend", "info", "page", "Fetching priority notifications");

      try {
        const res = await axios.get(
          "http://4.224.186.213/evaluation-service/notifications",
          {
            headers: {
              Authorization: `Bearer YOUR_ACCESS_TOKEN_HERE`,
            },
          }
        );

        const sorted = res.data.notifications
          .map((n) => ({
            ...n,
            score: priorityMap[n.Type] || 0,
          }))
          .sort((a, b) => b.score - a.score)
          .slice(0, 10);

        setData(sorted);

        await Log("frontend", "info", "page", "Priority notifications loaded");
      } catch (err) {
        await Log("frontend", "error", "api", "Priority fetch failed");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Top 10 Priority Notifications</h2>

      {data.map((item, index) => (
        <div
          key={index}
          style={{
            border: "2px solid green",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <p><b>Type:</b> {item.Type}</p>
          <p><b>Message:</b> {item.Message}</p>
          <p><b>Score:</b> {item.score}</p>
          <p><b>Time:</b> {item.Timestamp}</p>
        </div>
      ))}
    </div>
  );
}