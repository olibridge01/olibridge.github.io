let mourseCursor = document.querySelector('.cursor');
let nam = document.querySelector('#name');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mourseCursor.style.top = e.pageY + 'px';
    mourseCursor.style.left = e.pageX + 'px';
}

// Make cursor bigger when hover on the central div
nam.addEventListener('mouseover', () => {
    mourseCursor.classList.add('cursor-big');
});

nam.addEventListener('mouseleave', () => {
    mourseCursor.classList.remove('cursor-big');
});