// client.js
const { io } = require("socket.io-client");
const readline = require("readline");

const socket = io("http://localhost:3000/", {
  extraHeaders: {
    origin: "ledgerchat-dev.ledgermail.io",
    auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJMZWRnZXJNYWlsIiwic3ViIjoiNjUxNTI0ZjY2MGIxYTA0YjQ0N2Q0NjAyIiwiZGV0YWlscyI6eyJlbWFpbCI6InZpbmF5YWthQGxlZGdlcmZpLmlvIiwidXNlck5hbWUiOiJ2aW5heWFrYV9sZWRnZXJmaTEiLCJub2RlSWQiOiI2NTE1MjRmNjYwYjFhMDRiNDQ3ZDQ2MDIiLCJjb21wYW55IjoiNjRkNWQ0ODEzMDliNDg1MTkwNTJmYjk0IiwiZGV2aWNlRGV0YWlsIjp7ImJyYW5kIjoiTGludXggNjQtYml0IiwiZGV2aWNlSWQiOjI3OTI4OTcwOTIsImRldmljZU5hbWUiOiJDaHJvbWUiLCJkZXZpY2VUeXBlIjoid2ViIiwic3lzdGVtVmVyc2lvbiI6IjEyNS4wLjAuMCJ9fSwiaWF0IjoxNzE3MDQ3MjA2LCJleHAiOjE3MTcxMzM2MDZ9.MorglOTUVaq1ZxbnVTD2LKd_-TEoo9zkMgwEsAJxtKQ",
  },
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userName = "vinayaka_ledgerfi1";
socket.on("connect", () => {
  console.log("connected to server");
  socket.emit("authenticate", userName);

  rl.on("line", (input) => {
    socket.emit("chat message", input);
  });
});
socket.on("vinayaka_ledgerfi1", (message) => {
  console.log("Received message:", message);
});
socket.on("chat message", (msg) => {
  console.log("message from server: " + msg);
});

socket.on("disconnect", () => {
  console.log("disconnected from server");
});
