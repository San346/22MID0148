const axios = require("axios");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzYW5kaGl5YXNyaTcxNkBnbWFpbC5jb20iLCJleHAiOjE3Nzg5MzA0NzcsImlhdCI6MTc3ODkyOTU3NywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjBjNDUzMjk2LTY1OTAtNGE1NS1iM2Y2LTc4MjdjNWU2ZjMwMyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InNhbmRoaXlhIHNyaSIsInN1YiI6IjMyYTY1NWJhLWU5Y2ItNDdmYy05MjI3LWI3YTYyMzYwN2QxNyJ9LCJlbWFpbCI6InNhbmRoaXlhc3JpNzE2QGdtYWlsLmNvbSIsIm5hbWUiOiJzYW5kaGl5YSBzcmkiLCJyb2xsTm8iOiIyMm1pZDAxNDgiLCJhY2Nlc3NDb2RlIjoiU2ZGdVdnIiwiY2xpZW50SUQiOiIzMmE2NTViYS1lOWNiLTQ3ZmMtOTIyNy1iN2E2MjM2MDdkMTciLCJjbGllbnRTZWNyZXQiOiJSYlV0UXpFRkZIVlp3eGVaIn0.j2RtLq3f1hmELmg_s4iKupLFyEF1jCFQH4K9l3xDBgI";
const notificationPriority = {
  Placement: 3,
  Result: 2,
  Event: 1,
};
async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack: stack,
        level: level,
        package: packageName,
        message: message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Log Created:", response.data);
  } catch (error) {
    console.log("Logging failed:", error.message);
  }
}
async function main() {
  try {
    await Log(
      "frontend",
      "info",
      "component",
      "Campus notification application started"
    );
    await Log(
      "frontend",
      "info",
      "api",
      "Fetching notifications from notification service"
    );
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const notifications = response.data.notifications;
    const updatedNotifications = notifications.map((item) => {
      return {
        ...item,
        priorityScore: notificationPriority[item.Type],
      };
    });
    updatedNotifications.sort((a, b) => {
      if (b.priorityScore !== a.priorityScore) {
        return b.priorityScore - a.priorityScore;
      }
      return new Date(b.Timestamp) - new Date(a.Timestamp);
    });
    const topNotifications = updatedNotifications.slice(0, 10);
    console.log("\nTop 10 Priority Notifications\n");
    console.table(topNotifications);
    await Log(
      "frontend",
      "info",
      "component",
      "Priority notifications displayed successfully"
    );
  } catch (error) {
    console.log("Error:", error.message);

    await Log(
      "frontend",
      "error",
      "api",
      "Unable to fetch notifications from server"
    );
  }
}
main();