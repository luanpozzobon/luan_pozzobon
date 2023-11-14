const carousel = document.getElementById('slideContainer');
carousel.style.animation = 'none';
carousel.style.transition = 'transform 0.8s ease-in-out';

const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

prev.addEventListener('click', function() {
    index--;
    if (index < 0) {
        index = carousel.children.length - 1;
    }

    showSlide(index)
});

next.addEventListener('click', function(){
    index++;
    if(index >= carousel.children.length) {
        index = 0;
    }
    
    showSlide(index);
});

function showSlide(i) {
    var calc = -i * 33.33;
    carousel.style.transform = `translateX(${calc + "%"})`;
}