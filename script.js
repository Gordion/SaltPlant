const parallaxElements = [...document.getElementsByClassName('parallax')];

const parallax = function(img) {
    const speed = 3;
    let pos = '-' + (window.pageYOffset / speed) + "px";
    img.style.backgroundPosition = `center ${ pos }`;
}

window.addEventListener('scroll', function(e) {
    parallaxElements.forEach( (img) => {
        parallax(img);
    });
});
