function summit() {
  let flag = true;
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm_password").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (confirm != password) {
    alert("password không trùng nhau nhập lại");
    flag == false;
  }

  if (name == "") {
    alert("không được để trống họ tên");
    flag == false;
  }

  if (email == "") {
    alert("không được để trống email");
    flag == false;
  }

  if (flag == true) {
    window.location.href = "../index.html";
  }
}
