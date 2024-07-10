"use strict";
// lấy các biến cần ra ngoài
const nhapEmail = document.querySelector(".nhap-email");
const thongTin = document.querySelector(".thong-tin");
const btnSub = document.querySelector(".sub");
const nhapVao = document.querySelector(".nhap-vao");
const emailRegax = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// tạo điều kiện
btnSub.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(nhapVao.value);
  if (!nhapVao.value) {
    alert("Xin vui lòng nhập đúng email");
    return;
  }
  if (!nhapVao.value.match(emailRegax)) {
    alert("Xin vui lòng nhập đúng email");
    return;
  }
  thongTin.classList.remove("d-none");
  nhapEmail.classList.add("d-none");
});
// khi di chuột vào ô email
nhapVao.addEventListener("mouseover", function () {
  document.querySelector(".nhap-vao").style.boxShadow = "0 0 5px 0 blue";
});
nhapVao.addEventListener("mouseout", function () {
  document.querySelector(".nhap-vao").style.boxShadow = "0 0 0 0";
});
// ở phần xem thêm View more
const tiLe = document.querySelectorAll(".ti-le-7-3");
const box = document.querySelectorAll(".border1");
const danhSach = document.querySelectorAll(".danh-sach");
const view = document.querySelectorAll(".xem-them");
// khi di chuột vào ô border1
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("mouseover", function () {
    view[i].classList.remove("d-none");
  });
  box[i].addEventListener("mouseout", function () {
    view[i].classList.add("d-none");
  });

  // khi bấm chuột vào View more
  view[i].addEventListener("click", function () {
    if (view[i].innerHTML.includes("more")) {
      view[i].classList.add("d-none");
      danhSach[i].classList.remove("d-none");
      view[i].textContent = "View Less";
    } else {
      view[i].classList.add("d-none");
      danhSach[i].classList.add("d-none");
      view[i].textContent = "View more";
    }
  });
} // thêm link digital CV vào
const duongDan = document.querySelectorAll("a");
for (let u = 0; u < duongDan.length; u++) {
  duongDan[u].setAttribute("href", "./digital/index.html");
}
