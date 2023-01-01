let img = document.querySelectorAll(".img");

function addClass(){
    img.forEach(item => {
        item.classList.add("collapse");
    })
}

img.forEach((item) => {
    item.addEventListener('click', ()=> {
       if(item.classList.contains("collapse")){
        addClass();
        item.classList.remove("collapse");
       }
    })
});