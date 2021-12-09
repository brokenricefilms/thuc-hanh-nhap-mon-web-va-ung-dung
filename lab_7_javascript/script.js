document.getElementById("buttonCong").onclick = function cong() {
  const so1 = document.getElementById("so1").value;
  const so2 = document.getElementById("so2").value;
  let flag = true;

  if (isNaN(so1) === true || so1 === "") {
    alert("Nhập số ở ô số 1 đi nha: ");
    document.getElementById("so1").style.color = "red";
    document.getElementById("so1").focus();
    flag = false;
  } else if (isNaN(so2) === true || so2 === "") {
    alert("Nhập số ở ô số 2 đi nha: ");
    document.getElementById("so1").style.color = "red";
    document.getElementById("so2").focus();
    flag = false;
  }

  if (flag === true) {
    document.getElementById("ketQua").value = Number(so1) + Number(so2);
    document.getElementById("so1").style.color = "black";
    document.getElementById("so2").style.color = "black";
  }
};

function randomBackgroundColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  console.log(x, y, z);
  document.body.style.background = "rgb(" + x + "," + y + "," + z + ")";
}

setTimeout(randomBackgroundColor(), 1000);
