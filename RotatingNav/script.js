const openBtn = document.querySelector(".open");
const circle = document.querySelector(".circle");
const img = document.querySelector("img");
const container = document.querySelector(".container");
const closeBtn = document.querySelector(".closeBtn");
const nav = document.querySelector("nav");
openBtn.addEventListener("click", () => {
  circle.classList.add("rotate");
  console.log("jello")
  container.classList.add("nav-show");
  nav.classList.remove("show-nav");
  
})
closeBtn.addEventListener("click", () => {
  circle.classList.remove("rotate");
   container.classList.remove("nav-show");
  nav.classList.add("show-nav");
})