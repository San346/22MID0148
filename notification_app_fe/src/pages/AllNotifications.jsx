import { useEffect, useState } from "react";
import axios from "axios";
import Log from "../utils/logger";

export default function AllNotifications() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await Log("frontend", "info", "page", "Fetching all notifications");

      try {
        const res = await axios.get(
          "http://4.224.186.213/evaluation-service/notifications",
          {
            headers: {
              Authorization: `Bearer YOUR_ACCESS_TOKEN_HERE`,
            },
          }
        );

        setData(res.data.notifications);

        await Log("frontend", "info", "page", "Fetched all notifications");
      } catch (err) {
        await Log("frontend", "error", "api", "Failed to fetch notifications");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>All Notifications</h2>

      {data.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <p><b>Type:</b> {item.Type}</p>
          <p><b>Message:</b> {item.Message}</p>
          <p><b>Time:</b> {item.Timestamp}</p>
        </div>
      ))}
    </div>
  );
}