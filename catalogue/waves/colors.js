var wave = document.getElementById("wave");
var paragraph = document.getElementById("text");

function red() {
  wave.style.filter="hue-rotate(0deg) brightness(1)";
  wave.style.width="700px";
  
  paragraph.textContent = "700 nm";
}

function orange() {
  wave.style.filter="hue-rotate(60deg) brightness(2.5)";
  wave.style.width="603px";
  
  paragraph.textContent = "603 nm";
}

function yellow() {
  wave.style.filter="hue-rotate(69deg) brightness(10)";
  wave.style.width="580px";

  paragraph.textContent = "580 nm";
}

function green() {
  wave.style.filter="hue-rotate(90deg) brightness(3)";
  wave.style.width="530px";

  paragraph.textContent = "530 nm";
}

function cyan() {
  wave.style.filter="hue-rotate(180deg) brightness(3)";
  wave.style.width="495px";

  paragraph.textContent = "495 nm";
}

function blue() {
  wave.style.filter="hue-rotate(230deg) brightness(1)";
  wave.style.width="460px";

  paragraph.textContent = "460 nm";
}

function violet() {
  wave.style.filter="hue-rotate(290deg) brightness(0.9)";
  wave.style.width="410px";

  paragraph.textContent = "410 nm";
}