var img = document.querySelector('.img');

window.addEventListener('scroll', function () {
    var y = window.scrollY;
    img.style.clipPath = 'circle('+y+'px at 50% 50%) ';
})