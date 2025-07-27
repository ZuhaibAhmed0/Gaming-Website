window.bike = {
  start(container) {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let bike = { x: 180, y: 350 };
    let obstacles = [];

    document.addEventListener('keydown', (e) => {
      if (e.key === "ArrowLeft") bike.x -= 20;
      if (e.key === "ArrowRight") bike.x += 20;
    });

    function spawnObstacle() {
      obstacles.push({ x: Math.random() * 380, y: 0 });
    }

    function loop() {
      ctx.fillStyle = "#111";
      ctx.fillRect(0, 0, 400, 400);

      // Draw bike
      ctx.fillStyle = "#1abc9c";
      ctx.fillRect(bike.x, bike.y, 30, 30);

      // Obstacles
      ctx.fillStyle = "#c0392b";
      obstacles.forEach(o => {
        o.y += 4;
        ctx.fillRect(o.x, o.y, 20, 20);
        // collision
[?12;2$y        if (Math.abs(o.x - bike.x) < 20 && Math.abs(o.y - bike.y) < 20) {
          alert("Game Over!");
          obstacles = [];
        }
      });

      obstacles = obstacles.filter(o => o.y < 400);
    }

    this.interval = setInterval(() => {
      if (Math.random() < 0.1) spawnObstacle();
      loop();
    }, 30);
  },
  stop() {
    clearInterval(this.interval);
  }
};

