let mourseCursor = document.querySelector('.cursor');
let nam = document.querySelector('#name');
let links = document.querySelectorAll('#links a');
let content_links = document.querySelectorAll('.content a');

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

// Make cursor smaller when hover on the links
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        mourseCursor.classList.add('cursor-med');
    });

    link.addEventListener('mouseleave', () => {
        mourseCursor.classList.remove('cursor-med');
    });
});

// Make cursor smaller when hover on the content links
content_links.forEach(link => {
    link.addEventListener('mouseover', () => {
        mourseCursor.classList.add('cursor-med');
    });

    link.addEventListener('mouseleave', () => {
        mourseCursor.classList.remove('cursor-med');
    });
});