function traCuu() {
  var n = 0;
  var sum = 0;
  while (sum <= 10000) {
    n++;
    sum += n;
  }

  document.getElementById("hienThi").innerHTML = `N là: ${n}`;
}
function baitap2() {
  var sum = 0;
  var i = 1;
  var x = +document.getElementById("numX").value;
  var n = +document.getElementById("numN").value;

  while (i <= n) {
    sum += x ** i;
    i++;
  }
  document.getElementById(
    "ketQua"
  ).innerHTML = `Kết quả của biểu thức x và n là:${sum}`;
}
/*Bài tập 3*/
function tinhGiaiThua() {
  var n = +document.getElementById("soN").value;
  var x = 1;
  for (i = 1; i <= n; i++) {
    x *= i;
  }
  document.getElementById("tinh").innerHTML = `Kết quả là:${x}`;
}
//Bài tập 4
function sapXep(){
    var content=document.getElementsByTagName("div");
    for (var i = 0; i < content.length; i++){
        
        if (i % 2 === 0){
            content[i].style.background = "blue";
        }
        else { 
            content[i].style.background = "red";
        }
    }
  
}