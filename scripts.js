let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
function createDots(numberOfDots) {
    const container = document.getElementById("dot-container");

    for (let i = 1; i <= numberOfDots; i++) {
        const span = document.createElement('span');
        span.className = 'dot';
        span.onclick = function() { currentSlide(i); };
        container.appendChild(span);
    }
}
// Add event listeners for keyboard navigation
document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "ArrowRight":
            plusSlides(1);
            break;
        case "ArrowLeft":
            plusSlides(-1);
            break;
        case " ":
            plusSlides(1);
            break;
    }
});
