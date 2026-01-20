// Add placeholder animation on input
const input = document.querySelector('input');
const placeholderText = "Search for Restaurant, cuisine or a dish";
let i = 0;

function typePlaceholder() {
    if (i <= placeholderText.length) {
        input.setAttribute("placeholder", placeholderText.slice(0, i));
        i++;
    } else {
        i = 0;
        input.setAttribute("placeholder", "");
    }
}

setInterval(typePlaceholder, 150);

// Animate logo on hover
const logoImg = document.querySelector('main img');
logoImg.addEventListener('mouseenter', () => {
    logoImg.style.transform = 'scale(1.1)';
    logoImg.style.transition = 'transform 0.3s ease';
});
logoImg.addEventListener('mouseleave', () => {
    logoImg.style.transform = 'scale(1)';
});

// Responsive menu toggle (optional if mobile version needed)
