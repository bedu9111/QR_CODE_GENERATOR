const BASE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;

const btn = document.querySelector("button");
const generate = document.querySelector(".generate");
const generated = document.querySelector(".generated");
const gBtn = document.querySelector(".gBtn");
const regBtn = document.querySelector(".rgBtn");
const inp = document.querySelector("input");
const img = document.querySelector("img");
gBtn.addEventListener("click", () => {
  if (!inp.value) {
     alert("Please Enter Valid URL");
  }
  if (inp.value) {
    let newSrc =   `${BASE_URL}${inp.value}`;
    img.src = newSrc;
    generate.classList.add("hide");
    generated.classList.add("active");

  }
});

regBtn.addEventListener("click", () => {
  inp.value = "";
  generate.classList.remove("hide");
  generated.classList.remove("active");
});
