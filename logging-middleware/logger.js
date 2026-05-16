const axios = require("axios");

const Log = async (stack, level, pkg, message) => {

  try {

    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack: stack,
        level: level,
        package: pkg,
        message: message
      },
      {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzYW5kaGl5YXNyaTcxNkBnbWFpbC5jb20iLCJleHAiOjE3Nzg5MjgxMzgsImlhdCI6MTc3ODkyNzIzOCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImUxMjliNTUwLThlOTEtNDMzNC1hZjU3LWY3MDU0YjNkZmYwNiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InNhbmRoaXlhIHNyaSIsInN1YiI6IjMyYTY1NWJhLWU5Y2ItNDdmYy05MjI3LWI3YTYyMzYwN2QxNyJ9LCJlbWFpbCI6InNhbmRoaXlhc3JpNzE2QGdtYWlsLmNvbSIsIm5hbWUiOiJzYW5kaGl5YSBzcmkiLCJyb2xsTm8iOiIyMm1pZDAxNDgiLCJhY2Nlc3NDb2RlIjoiU2ZGdVdnIiwiY2xpZW50SUQiOiIzMmE2NTViYS1lOWNiLTQ3ZmMtOTIyNy1iN2E2MjM2MDdkMTciLCJjbGllbnRTZWNyZXQiOiJSYlV0UXpFRkZIVlp3eGVaIn0.5yH9ss27enUwwe8Txeifjnmk7B2J32DQ5aIhFkbPk2s"
        }
      }
    );

    console.log("Log Created Successfully");
    console.log(response.data);

  } catch (error) {

    console.log("Logging Failed");
    console.log(error.message);

  }
};

module.exports = Log;