const icon = document.getElementById("icon");
const menuBar = document.getElementById("offcanvas");
const closeBtn = document.getElementById("close");
icon.addEventListener("click", () => {
  menuBar.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  menuBar.style.display = "none";
});
