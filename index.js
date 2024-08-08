let nextBtn = document.querySelector(".nextBtn")
let preBtn = document.querySelector(".preBtn")
let images = document.querySelectorAll(".slide")
let indicators = document.querySelectorAll(".indicator")
let crousel = document.querySelector(".crousel")
let interval;
let counter = 0


images.forEach((img, index) => {
    img.style.left = `${index * 100}%`
})

indicators.forEach((indcator, index) => {
    indcator.addEventListener("click", (e) => {
        counter = index
        images[counter].classList.add("active")
        slideImages()
    })
})

nextBtn.addEventListener("click", (e) => {
    counter++
    if (counter == images.length) counter = 0
    slideImages()
})


preBtn.addEventListener("click", (e) => {
    counter--;
    if (counter == -1) counter = slides.length - 1
    slideImages()
})


const slideImages = () => {
    images.forEach((img, i) => {
        img.style.transform = `translateX(-${counter * 100}%)`
    })


    indicators.forEach((ind, i) => {
        ind.classList.remove("active");
        indicators[counter].classList.add("active");
    })

}


const startSlideShow = () => {
    interval = setInterval(() => {
        counter = (counter + 1) % images.length
        slideImages()
    }, 3000)
}


crousel.addEventListener("mouseover", () => {
    clearInterval(interval)
})

crousel.addEventListener("mouseout", () => {
    startSlideShow()
})




// startSlideShow()

