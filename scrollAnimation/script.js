const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', ()=> {
    const run = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxScroll = box.getBoundingClientRect().top

        if(boxScroll < run) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
})
