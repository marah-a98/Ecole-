const VALID_KEY = "ISF2026";
const EXPIRATION = new Date("2026-07-01");

function checkKey() {
  let key = document.getElementById("key").value;
  let msg = document.getElementById("msg");

  if (!localStorage.getItem("startDate")) {
  localStorage.setItem("startDate", new Date());
}

let start = new Date(localStorage.getItem("startDate"));
let expiration = new Date(start);
expiration.setMonth(expiration.getMonth() + 3);
}