let bars = document.querySelector(".fa-bars")
let xMark = document.querySelector(".fa-xmark")
let navLinks = document.querySelectorAll("nav a")
let  testimonialsArrowRight = document.querySelector(".fa-circle-right")
let  testimonialsArrowLeft = document.querySelector(".fa-circle-left")
bars.onclick = () => {
    document.querySelector("nav").classList.add("flex")
    document.querySelector("nav").classList.remove("hidden")
}
xMark.onclick = () => {
    document.querySelector("nav").classList.add("hidden")
    document.querySelector("nav").classList.remove("flex")
}

navLinks.forEach((link) => {
    link.onclick = () => {
        document.querySelector("nav").classList.add("hidden")
        document.querySelector("nav").classList.remove("flex")
    }
})
let testimonialIndex = 0;
const checkArrows = () => {
    testimonialsArrowRight.style.cssText = `
        color: #2563eb;
        pointer-events: unset;
        opacity: 1;
    `
    testimonialsArrowLeft.style.cssText = `
        color: #2563eb;
        pointer-events: unset;
        opacity: 1;
    `
    if(testimonialIndex === document.querySelectorAll(".testimonial").length - 1){
        testimonialsArrowRight.style.cssText = `
            color: grey;
            pointer-events: none;
            opacity: 0.7
        `
    }else if(testimonialIndex === 0){
        testimonialsArrowLeft.style.cssText = `
            color: grey;
            pointer-events: none;
            opacity: 0.7
        `
    }
}
checkArrows();
testimonialsArrowRight.onclick = () => {
    console.log("CLICKED", testimonialIndex)
    checkArrows();
    document.querySelector(".testimonial-wrapper").style.cssText = `
            transform: translateX(calc(-${100 * testimonialIndex}% - ${160 * testimonialIndex}px));
    `
    if(testimonialIndex === document.querySelectorAll(".testimonial").length - 1){
        testimonialIndex = 1;
    }else{
        testimonialIndex++;
    }
}

testimonialsArrowLeft.onclick = () => {
    console.log("CLICKED", testimonialIndex)
    checkArrows();
    document.querySelector(".testimonial-wrapper").style.cssText = `
            transform: translateX(calc(-${100 * testimonialIndex}% - ${160 * testimonialIndex}px));
    `
    if(testimonialIndex === 0){
        testimonialIndex = 0;
    }else{
        testimonialIndex--;
    }
}

