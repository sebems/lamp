var onBTN = document.getElementById("onButton");
var offBTN = document.getElementById("offButton");
var inColor = document.getElementById("light_color");
var body = document.getElementById("body");

onBTN.addEventListener("click", function () {
  // forwards holds the last state of the animation
  body.style.animation = "lightOn 2s linear forwards";
});

offBTN.addEventListener("click", function () {
  body.style.animation = "lightOff 0.5s linear forwards";
});

inColor.addEventListener("input", function () {
  body.style.backgroundColor = inColor.innerText;
});
