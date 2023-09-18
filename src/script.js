const cvs = ["./public/images/Emily.png", "./public/images/Jennifer.png", "./public/images/Moises.png", "./public/images/Wilson.png", "./public/images/Yuichi.png"];
const slider = document.querySelector('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider(){
    slider.classList.remove('on')
}

function showSlider(){
    slider.classList.add('on')
}

function nextSlider(){
    hideSlider()

    currentSlide++
}

function prevSlider(){
    hideSlider()

    currentSlide--
}

slider.addEventListener("transitionend", () => {
    slider.src = cvs[(((currentSlide) % 5) + 5) % 5]

    showSlider()
})

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

console.log(slider)