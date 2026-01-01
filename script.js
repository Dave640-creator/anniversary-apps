const startDate = new Date(2024, 6, 24, 0, 0, 0); // July 24, 2024

const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("startText").innerText =
  startDate.toLocaleDateString("en-US", options);

// kung pila na ka adlaq
function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Add small hearts in timer boxes
  const boxes = document.querySelectorAll('.time-box');
  boxes.forEach(box => {
    const heart = document.createElement('span');
    heart.classList.add('heart');
  //  heart.innerText = '❤️';
    heart.style.left = Math.random() * 50 + 'px';
    heart.style.top = Math.random() * 20 + 'px';
    box.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  });
}

setInterval(updateTimer, 1000);
updateTimer();

// ang NEXT ANNIVERSARY COUNTDOWN 
function getNextAnniversary(startDate) {
  const now = new Date();
  let year = now.getFullYear();

  let next = new Date(year, startDate.getMonth(), startDate.getDate(), 0, 0, 0);

  if (next < now) {
    next = new Date(year + 1, startDate.getMonth(), startDate.getDate(), 0, 0, 0);
  }

  return next;
}

function updateCountdown() {
  const now = new Date();
  const nextAnniv = getNextAnniversary(startDate);
  const diff = nextAnniv - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("cdDays").innerText = days;
  document.getElementById("cdHours").innerText = hours;
  document.getElementById("cdMinutes").innerText = minutes;
  document.getElementById("cdSeconds").innerText = seconds;

  // Add hearts inside countdown boxes
  const boxes = document.querySelectorAll('.cd-box');
  boxes.forEach(box => {
    const heart = document.createElement('span');
    heart.classList.add('heart');
   // heart.innerText = '🌹';
    heart.style.left = Math.random() * 40 + 'px';
    heart.style.top = Math.random() * 15 + 'px';
    box.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  });
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ANG HEART ANIMATION BACKGROUND
const canvas = document.getElementById('heartsCanvas');
const ctx = canvas.getContext('2d');

// High-res scaling para sharp hearts
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;
canvas.style.width = window.innerWidth + 'px';
canvas.style.height = window.innerHeight + 'px';
ctx.scale(2, 2);

let hearts = [];

function Heart(x, y, size, speed) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;
  this.alpha = Math.random() * 0.7 + 0.3;
}

Heart.prototype.draw = function() {
  ctx.save();
  ctx.globalAlpha = this.alpha;
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.bezierCurveTo(this.x, this.y - this.size/2, this.x - this.size, this.y - this.size, this.x, this.y + this.size);
  ctx.bezierCurveTo(this.x + this.size, this.y - this.size, this.x + this.size, this.y - this.size/2, this.x, this.y);
  ctx.fill();
  ctx.restore();
}

Heart.prototype.update = function() {
  this.y -= this.speed;
  if(this.y + this.size < 0) {
    this.y = canvas.height / 2 + 10; // reset sa baba
    this.x = Math.random() * canvas.width / 2;
  }
  this.draw();
}

// Create initial hearts
for(let i=0; i<30; i++) {
  hearts.push(new Heart(Math.random()*canvas.width/2, Math.random()*canvas.height/2, 20+Math.random()*15, 1+Math.random()*2));
}

// Animate hearts
function animateHearts() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  hearts.forEach(h => h.update());
  requestAnimationFrame(animateHearts);
}

animateHearts();

// Handle resize
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth * 2;
  canvas.height = window.innerHeight * 2;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.scale(2, 2);
});