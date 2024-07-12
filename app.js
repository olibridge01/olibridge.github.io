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

// Make cursor invisible upon loading the page, and it only becomes visible when the mouse moves
window.addEventListener('load', () => {
    mourseCursor.style.opacity = 0;
});

window.addEventListener('mousemove', () => {
    mourseCursor.style.opacity = 1;
});

// Make cursor disappear when mouse moves off the window
window.addEventListener('mouseleave', () => {
    mourseCursor.style.opacity = 0;
});

// Make cursor reappear when mouse moves back to the window

window.addEventListener('mouseenter', () => {
    mourseCursor.style.opacity = 1;
}
);