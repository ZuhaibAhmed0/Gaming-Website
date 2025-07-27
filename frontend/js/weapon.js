window.weapon = {
  start(container) {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let bullets = [];
    let enemies = [];
    let player = { x: 200, y: 360 };
    let score = 0;

    document.addEventListener('keydown', e => {
      if (e.key === "ArrowLeft") player.x -= 10;
      if (e.key === "ArrowRight") player.x += 10;
      if (e.key === " ") bullets.push({ x: player.x + 15, y: player.y });
    });

    function spawnEnemy() {
      enemies.push({ x: Math.random() * 380, y: 0 });
    }

    function loop() {
      ctx.fillStyle = "#111";
      ctx.fillRect(0, 0, 400, 400);

      // Draw player
      ctx.fillStyle = "#3498db";
      ctx.fillRect(player.x, player.y, 30, 30);

      // Bullets
      ctx.fillStyle = "#fff";
      bullets.forEach(b => {
        b.y -= 5;
        ctx.fillRect(b.x, b.y, 5, 10);
      });

      // Enemies
      ctx.fillStyle = "#e74c3c";
      enemies.forEach(e => {
        e.y += 2;
        ctx.fillRect(e.x, e.y, 20, 20);
      });

      // Collision detection
      bullets = bullets.filter(b => {
        for (let i = 0; i < enemies.length; i++) {
          if (Math.abs(b.x - enemies[i].x) < 15 && Math.abs(b.y - enemies[i].y) < 15) {
            enemies.splice(i, 1);
            score++;
            return false;
          }
        }
        return b.y > 0;
      });

      ctx.fillStyle = "#fff";
      ctx.fillText(`Score: ${score}`, 10, 20);
    }

    this.interval = setInterval(() => {
      if (Math.random() < 0.05) spawnEnemy();
      loop();
    }, 30);
  },
  stop() {
    clearInterval(this.interval);
  }
};

