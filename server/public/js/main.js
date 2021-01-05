let socket = io();

const form = document.querySelector("form");
const m = document.getElementById("m");
let ul = document.querySelector("ul");



socket.on("connect", (msg) => {
  console.log("recieved");
})

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let msg = m.value;
  socket.emit("chatMessage", msg)
})

socket.on("chatMessage", (msg) => {
  let li = document.createElement("li");
  li.innerText = msg;
  ul.appendChild(li)
})