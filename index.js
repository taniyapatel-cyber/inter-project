
const canvas = document.getElementById("bubbles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles = [];

for (let i = 0; i < 40; i++) {
  bubbles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 20 + 10,
    dx: (Math.random() - 0.5) * 1,
    dy: Math.random() * -1 - 0.5,
    color: `hsl(${Math.random() * 360}, 60%, 80%)`
  });
}

function drawBubbles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bubbles.forEach(b => {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fillStyle = b.color;
    ctx.fill();
    ctx.closePath();

    b.x += b.dx;
    b.y += b.dy;

    if (b.y < -b.r) {
      b.y = canvas.height + b.r;
      b.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawBubbles);
}

drawBubbles();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});




ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 1200,
  delay: 200
});

ScrollReveal().reveal('.ingredient-card', { 
  origin: 'bottom', 
  interval: 200 
});


window.addEventListener("scroll", () => {
  const section = document.querySelector(".story-section");
  const pos = section.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;
  if (pos < screenPos) {
    section.classList.add("active");
  }
});


document.querySelector(".youtube-btn").addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=example", "_blank");
});


const logo = document.querySelector(".story-logo");
logo.addEventListener("mouseenter", () => {
  logo.style.filter = "drop-shadow(0 0 10px #b07dfb)";
});
logo.addEventListener("mouseleave", () => {
  logo.style.filter = "none";
});

ScrollReveal().reveal('.footer-logo', {
  duration: 1000,
  origin: 'bottom',
  distance: '60px'
});

ScrollReveal().reveal('.footer-links', {
  duration: 1000,
  delay: 200,
  origin: 'left',
  distance: '50px'
});

ScrollReveal().reveal('.footer-contact', {
  duration: 1000,
  delay: 400,
  origin: 'right',
  distance: '50px'
});

ScrollReveal().reveal('.footer-social', {
  duration: 1000,
  delay: 600,
  origin: 'top',
  distance: '50px'
});
