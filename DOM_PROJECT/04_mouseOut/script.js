const button = document.getElementById("clickMe");
button.addEventListener("mouseout", function (e) {
    e.preventDefault();
  alert("you left the safe zone 🙅 (mouse out event working properly)");
});