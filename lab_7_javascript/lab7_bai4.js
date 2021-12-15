let index = 1;

function hinh(i) {
  index = i;
  document.getElementById("showImg").src = "./img/" + i + ".png";
}

function hinhtruoc() {
  index--;
  if (index < 1) {
    index = 3;
  }
  document.getElementById("showImg").src = "./img/" + index + ".png";
}

function hinhsau() {
  index++;
  if (index > 3) {
    index = 1;
  }
  document.getElementById("showImg").src = "./img/" + index + ".png";
}
