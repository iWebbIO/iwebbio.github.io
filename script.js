// script.js

const serverForm = document.getElementById("serverForm");
const resultSection = document.getElementById("resultSection");
const statusText = document.getElementById("statusText");

serverForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const serverIP = document.getElementById("serverIP").value;
  
  // You can use AJAX or fetch API here to send a request to your server and check the status
  // Update the statusText based on the response
  
  // For demonstration purposes, let's assume the server is always up
  statusText.textContent = "Online";
  
  resultSection.classList.remove("hidden");
});
