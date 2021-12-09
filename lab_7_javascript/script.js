document.getElementById("buttonCong").onclick = function cong() {
  const so1 = document.getElementById("so1").value;
  const so2 = document.getElementById("so2").value;
  let flag = true;

  if (so1.isNaN === false || so1 === "") {
    alert("Nhập số ở ô số 1 đi nha: ");
    so1.focus();
    flag = false;
  } else if (so2.isNaN === false || so2 === "") {
    alert("Nhập số ở ô số 2 đi nha: ");
    so2.focus();
    flag = false;
  }

  if (flag === true) {
    document.getElementById("ketQua").value = Number(so1) + Number(so2);
  }
};
