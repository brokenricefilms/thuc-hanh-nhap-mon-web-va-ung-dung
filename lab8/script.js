let randomNumber1Value = 0;
let randomNumber2Value = 0;
let sumRandomNumber = 0;

document.getElementById("buttonNew").onclick = function () {
  randomNumber1Value = Math.floor(Math.random() * 100) + 1;
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

let a = new Array();
for (let i = 0; i < 10; i++) {
  a[i] = Math.floor(Math.random() * 10) + 1;
  document.write(a[i] + " ");
}

document.write("<br/>");

document.write("<p>mảng đảo ngược là:</p>");

for (i = 9; i >= 0; i--) {
  document.write(a[i] + " ");
}
