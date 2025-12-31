# anniversary-apps

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Our Anniversary 💕</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <canvas id="heartsCanvas"></canvas>

  <div class="container">
    <h1 id="animatedTitle">Happy New Year My Love ❤️</h1>

    <p class="since">Together since: <b id="startText"></b></p>

    <div id="timer" class="animated-text">
      <div class="time-box"><span id="days">0</span><small>Days</small></div>
      <div class="time-box"><span id="hours">0</span><small>Hours</small></div>
      <div class="time-box"><span id="minutes">0</span><small>Minutes</small></div>
      <div class="time-box"><span id="seconds">0</span><small>Seconds</small></div>
    </div>

    <h2>⏳ Countdown to Next Anniversary</h2>
    <div id="countdown" class="animated-text">
      <div class="cd-box"><span id="cdDays">0</span><small>Days</small></div>
      <div class="cd-box"><span id="cdHours">0</span><small>Hours</small></div>
      <div class="cd-box"><span id="cdMinutes">0</span><small>Minutes</small></div>
      <div class="cd-box"><span id="cdSeconds">0</span><small>Seconds</small></div>
    </div>

    <h2>📸 Our Memories</h2>
    <div class="gallery">
      
      <img src="image2">
      <img src="image4">
      <img src="image5">
      <img src="image6">
      <img src="image7">
      <img src="image8">
      <img src="image9">
      <img src="image1">
    </div>


  </div>

  <script src="script.js"></script>
</body>
</html>


body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom, #ffafbd, #ffc3a0);
  overflow-x: hidden;
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}

/* Main container */
.container {
  max-width: 650px;
  margin: auto;
  padding: 30px;
  text-align: center;
  
  border-radius: 25px;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

/* Animated title */
h1 {
  color: #ff4d6d;
  font-size: 2.5em;
  margin-bottom: 15px;
  animation: floatText 2s infinite alternate;
  letter-spacing: 1px;
}

@keyframes floatText {
  0% { transform: translateY(0px);}
  50% { transform: translateY(-10px);}
  100% { transform: translateY(0px);}
}

/* Timer and countdown containers */
#timer, #countdown {
  display: flex;
  justify-content: space-around;
  margin: 25px 0;
}

.time-box, .cd-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #ff758c, #ff7eb3);
  color: white;
  padding: 18px 12px;
  border-radius: 20px;
  width: 80px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
  position: relative;
  overflow: hidden;
  font-family: 'Arial', sans-serif;
}

.time-box span, .cd-box span {
  font-size: 1.7em;
  font-weight: bold;
}

.time-box small, .cd-box small {
  display: block;
  font-size: 1em;
  margin-top: 5px;
  font-weight: normal;
}

/* Floating hearts inside boxes */
@keyframes heartPop {
  0% { transform: scale(0.3); opacity: 0.7; }
  50% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.3); opacity: 30; }
}

.heart {
  position: absolute;
  color: #ff4d6d;
  font-size: 16px;
  animation: heartPop 1s forwards;
}

/* Gallery design with animated borders */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
  margin-top: 25px;
}

.gallery img {
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  cursor: pointer;
  position: relative;
  border: 4px solid transparent;
  transition: transform 0.4s, box-shadow 0.4s, border 0.4s;
  animation: borderGlow 2s infinite alternate;
}

.gallery img:hover {
  transform: scale(1.1) rotate(-2deg);
  box-shadow: 0 12px 30px rgba(0,0,0,0.4);
}

/* Soft glowing border animation */
@keyframes borderGlow {
  0% { border-color: rgba(255,77,109,0.5); }
  50% { border-color: rgba(255,77,109,1); }
  100% { border-color: rgba(255,77,109,0.5); }
}

/* Hearts floating on gallery images */
.image-heart {
  position: absolute;
  color: #ff4d6d;
  font-size: 14px;
  animation: floatHeart 2s forwards;
  pointer-events: none;
}

@keyframes floatHeart {
  0% { transform: translateY(0) scale(0.5); opacity: 0.7; }
  50% { transform: translateY(-20px) scale(1); opacity: 1; }
  100% { transform: translateY(-40px) scale(0.5); opacity: 0; }
}

/* Message section */
.message {
  font-style: italic;
  margin-top: 25px;
  font-size: 1.2em;
  color: #333;
}

/* Responsive adjustments */
@media (max-width: 500px) {
  .time-box, .cd-box {
    width: 60px;
    padding: 12px 8px;
  }

  h1 {
    font-size: 2em;
  }

  .gallery {
    gap: 10px;
  }
}


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



