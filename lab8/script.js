function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

let randomNumber1Value = document.getElementById("randomNumber1").value;
let randomNumber2Value = document.getElementById("randomNumber1").value;
let sumRandomNumber = 0;
let inputResultValue = document.getElementById("inputResult").value;

document.getElementById("buttonNew").onclick = function () {
  document.getElementById("randomNumber1").value = randomNumber();
  document.getElementById("randomNumber2").value = randomNumber();
  sumRandomNumber = randomNumber1Value + randomNumber2Value;
};

function checkResult() {
  if (inputResultValue === sumRandomNumber) {
    document.getElementById("result").innerHTML = "Đúng";
    document.getElementById("result").valuestyle.color = green;
  } else {
    document.getElementById("result").innerHTML = "Sai";
    document.getElementById("result").value.style.color = red;
  }
}

checkResult();
