let mouseCursor = document.querySelector('.cursor');
let nam = document.querySelector('#name');
let links = document.querySelectorAll('#links a');
let content_links = document.querySelectorAll('.content a');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

// Make cursor bigger when hover on the central div
nam.addEventListener('mouseover', () => {
    mouseCursor.classList.add('cursor-big');
});

nam.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('cursor-big');
});

// Make cursor smaller when hover on the links
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor-med');
    });

    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-med');
    });
});

// Make cursor smaller when hover on the content links
content_links.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor-med');
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-med');
    });
});

// Make cursor invisible upon loading the page, and it only becomes visible when the mouse moves
window.addEventListener('load', () => {
    mourseCursor.style.opacity = 0;
});
window.addEventListener('mousemove', () => {
    mouseCursor.style.opacity = 1;
});

// Make cursor disappear when mouse moves off the window
window.addEventListener('mouseleave', () => {
    mouseCursor.style.opacity = 0;
});
window.addEventListener('mouseenter', () => {
    mouseCursor.style.opacity = 1;
}
);

// Cursor invisible if viewing the page on a mobile device
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    mouseCursor.style.display = 'none';
}