var light_switch = document.getElementById("switch")
var inColor = document.getElementById("light_color");
var body = document.getElementById("body");

var iconImg = document.getElementById("icon")

document.getElementById("color_text").innerText = inColor.value

// condition for light flip flop
var isOn = false;

light_switch.addEventListener("click", function () {
  isOn = !isOn;

  if (isOn){
    turnOn();
  }
  else {
    turnOff();
  }
})

turnOn = () => {
  // change icon
  iconImg.href = "light_on.png";

  // forwards holds the last state of the animation
  body.style.animation = "lightOn 2s linear forwards";
};

turnOff = () => {

  iconImg.href = "light_off.png";

  body.style.animation = "lightOff 0.5s linear forwards";
}

// detects color picker change and light change
inColor.addEventListener("input", function () {
  console.log(inColor.value);
  document.documentElement.style.setProperty('--light_color', inColor.value);

  // color text

  document.getElementById("color_text").innerText = inColor.value

});
