// Function to draw a T-Rex dinosaur on canvas
function drawTRex(ctx) {
    // Draw body
    ctx.fillStyle = '#228B22';  // Green color
    ctx.beginPath();
    ctx.ellipse(150, 200, 80, 40, Math.PI / 2, 0, Math.PI * 2);
    ctx.fill();

    // Draw tail
    ctx.fillStyle = '#228B22';
    ctx.beginPath();
    ctx.moveTo(80, 220);
    ctx.lineTo(30, 200);
    ctx.lineTo(80, 180);
    ctx.lineTo(80, 220);
    ctx.fill();

    // Draw legs
    ctx.fillStyle = '#228B22';
    ctx.fillRect(120, 230, 20, 50);
    ctx.fillRect(160, 230, 20, 50);

    // Draw head
    ctx.fillStyle = '#228B22';
    ctx.beginPath();
    ctx.arc(200, 160, 30, 0, Math.PI * 2);
    ctx.fill();

    // Draw eye
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(210, 155, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(210, 155, 4, 0, Math.PI * 2);
    ctx.fill();

    // Draw mouth
    ctx.beginPath();
    ctx.moveTo(210, 170);
    ctx.quadraticCurveTo(220, 175, 210, 180);
    ctx.stroke();
}

// Initialize canvas and game
function initGame() {
    const canvas = document.getElementById('dinoCanvas');
    const ctx = canvas.getContext('2d');
    drawTRex(ctx);
    // Other initialization code...
}

// Call initGame to start the drawing
window.onload = initGame;