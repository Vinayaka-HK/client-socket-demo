const axios = require("axios");

async function sendApiCall(url, origin, token) {
  try {
    const emitData = [
      { message: { type: "NEW_INBOX" }, user: "vinayaka_ledgerfi1" },
    ];
    const response = await axios.post(
      url,
      { emitData },
      {
        headers: {
          Origin: origin,
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Response:", response.data);
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
}

// Usage example
const apiUrl = "http://localhost:3000/api";
const origin = "http://localhost:8080";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJMZWRnZXJNYWlsIiwic3ViIjoiNjUxNTI0ZjY2MGIxYTA0YjQ0N2Q0NjAyIiwiZGV0YWlscyI6eyJlbWFpbCI6InZpbmF5YWthQGxlZGdlcmZpLmlvIiwidXNlck5hbWUiOiJ2aW5heWFrYV9sZWRnZXJmaTEiLCJub2RlSWQiOiI2NTE1MjRmNjYwYjFhMDRiNDQ3ZDQ2MDIiLCJjb21wYW55IjoiNjRkNWQ0ODEzMDliNDg1MTkwNTJmYjk0IiwiZGV2aWNlRGV0YWlsIjp7ImJyYW5kIjoiTGludXggNjQtYml0IiwiZGV2aWNlSWQiOjI3OTI4OTcwOTIsImRldmljZU5hbWUiOiJDaHJvbWUiLCJkZXZpY2VUeXBlIjoid2ViIiwic3lzdGVtVmVyc2lvbiI6IjEyNS4wLjAuMCJ9fSwiaWF0IjoxNzE3MDQ3MjA2LCJleHAiOjE3MTcxMzM2MDZ9.MorglOTUVaq1ZxbnVTD2LKd_-TEoo9zkMgwEsAJxtKQ";

sendApiCall(apiUrl, origin, token);
