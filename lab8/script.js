let randomNumber1Value = 0;
let randomNumber2Value = 0;
let sumRandomNumber = 0;

document.getElementById("buttonNew").onclick = function () {
  randomNumber1Value = Math.floor(Math.random() * 100) + 1;
  // Math.random()
  document.getElementById("randomNumber1").value = randomNumber1Value;

  randomNumber2Value = Math.floor(Math.random() * 100) + 1;
  document.getElementById("randomNumber2").value = randomNumber2Value;

  sumRandomNumber = randomNumber1Value + randomNumber2Value;
};

document.getElementById("buttonCheckResult").onclick = function () {
  let inputResultValue = document.getElementById("inputResult").value;

  if (inputResultValue == sumRandomNumber) {
    document.getElementById("result").innerHTML =
      "<span style='color: green'>Đúng</span>";
  } else {
    document.getElementById("result").innerHTML =
      "<span style='color: red'>Sai</span>";
  }
};
