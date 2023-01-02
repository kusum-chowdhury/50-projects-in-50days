
let width = 0;
let next = 0;
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let steps = document.querySelector(".step-div");
let lineActive = document.querySelector(".line-active")

let children = steps.querySelectorAll(".step");
nextBtn.addEventListener("click", ()=> {
  if(next<=0){
    next = 0;
    console.log(next);
  }

   if(children[next].classList.contains("step")){

       children[next].classList.remove("step")
       children[next].classList.add("border-active");
      
    }
    
    console.log(width);
    width = width+ 8.3;
    lineActive.style.width = `${width}rem`;
   
    next++;
   
})

prevBtn.addEventListener("click", () => {
   
    width = width - 8.3; 
    lineActive.style.width = `${width}rem`;
    next--;
    children[next].classList.remove("border-active");
    children[next].classList.add("step");
  
       
    
})