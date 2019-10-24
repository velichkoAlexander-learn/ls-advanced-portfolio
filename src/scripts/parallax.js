let parallax = document.querySelectorAll('.parallax');
let windowWidth = null;

(function getWindowWidth() {
    let get = () => (windowWidth = document.querySelector('body').clientWidth);
    
    get() && window.addEventListener('resize', () => get());
}());

function moveLayersDependsOnScroll(parallax) {
    const windowOffset = window.pageYOffset;
    const parallaxOffsetTop = parallax.parentElement.offsetTop;
    const parallaxOffsetBottom = parallaxOffsetTop + parallax.clientHeight;
    const scroll = windowOffset - parallaxOffsetTop;
    
    if (windowOffset >= parallaxOffsetTop && windowOffset <= parallaxOffsetBottom) {
        Array.from(parallax.children).forEach(layer => {
            console.log(layer);
            const divider = layer.dataset.speed;
            const strafe = scroll * divider / 10;

            layer.style.transform = `translateY(-${strafe}%)`;
        });
    }
}

if (windowWidth > 768) {
    window.addEventListener('scroll', () => {
        Array.from(parallax).forEach(parallax => {
            moveLayersDependsOnScroll(parallax);
        });
    });
}
