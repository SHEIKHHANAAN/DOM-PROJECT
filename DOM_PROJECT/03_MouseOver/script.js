const button=document.getElementById("clickMe")
button.addEventListener("mouseover", function (e) {
    e.preventDefault();
  alert(
    "you entered in Restricted Area 🙅 (mouse over event is working properly)"
  );
});