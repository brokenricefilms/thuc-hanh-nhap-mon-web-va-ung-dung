document.write("<p>Mảng số nguyên có mười phần tử:</p>");

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

document.write("<br/>");
document.write("<br/>");
