const boxElement = document.getElementById("clickMe");

boxElement.addEventListener("dblclick", function (e)
{
    e.preventDefault();
  alert("doubleClick event is working properly");
});