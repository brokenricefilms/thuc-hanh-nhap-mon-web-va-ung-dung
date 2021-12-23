function summit() {
  let flag = 0;
  let flag2 = 0;
  let flag3 = 0;
  let flag4 = 0;
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm_password").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (password == "" && confirm_password == "") {
    flag4 = 0;
    alert("không được để trống password");
  } else {
    flag4 = 1;
  }

  if (confirm != password) {
    flag = 0;
    alert("password không trùng nhau nhập lại");
  } else {
    flag = 1;
  }

  if (name == "") {
    flag2 = 0;
    alert("không được để trống họ tên");
  } else {
    flag2 = 1;
  }

  if (email == "") {
    flag3 = 0;
    alert("không được để trống email");
  } else {
    flag3 = 1;
  }

  if (flag + flag2 + flag3 + flag4 == 4) {
    window.location.href = "../index.html";
  }
}
