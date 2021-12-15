let index = 1;

function hinh(i) {
  index = i;
  document.getElementById("showImg").src = "img/" + i + ".png";
}

document.getElementById("buttonImg1").onclick = function () {
  index = 1;
  hinh(index);
};

document.getElementById("buttonImg2").onclick = function () {
  index = 2;
  hinh(index);
};

document.getElementById("buttonImg3").onclick = function () {
  index = 3;
  hinh(index);
};

document.getElementById("buttonNextImg").onclick = function hinhtruoc() {
  index--;
  if (index < 1) {
    index = 3;
  }
  document.getElementById("showImg").src = "img/" + index + ".png";
};

document.getElementById("buttonPrevImg").onclick = function hinhsau() {
  index++;
  if (index > 3) {
    index = 1;
  }
  document.getElementById("showImg").src = "img/" + index + ".png";
};
