window.cycle = {
  start(container) {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let cycle = { x: 50, y: 300, vy: 0 };
    let gravity = 0.5;
    let score = 0;
    let obstacles = [];

    document.addEventListener('keydown', (e) => {
      if (e.key === " ") {
        cycle.vy = -8;
      }
    });

    function spawnObstacle() {
      obstacles.push({ x: 400, h: 200 + Math.random() * 100 });
    }

    function loop() {
      ctx.fillStyle = "#111";
      ctx.fillRect(0, 0, 400, 400);

      cycle.vy += gravity;
      cycle.y += cycle.vy;
      if (cycle.y > 380) cycle.y = 380;

      // draw cycle
      ctx.fillStyle = "#9b59b6";
      ctx.fillRect(cycle.x, cycle.y, 30, 30);

      // obstacles
      ctx.fillStyle = "#2ecc71";
      obstacles.forEach(o => {
        o.x -= 4;
        ctx.fillRect(o.x, 0, 20, 400 - o.h);
        ctx.fillRect(o.x, o.h + 100, 20, 400 - o.h);
        // collision
        if (cycle.x < o.x + 20 && cycle.x + 30 > o.x) {
          if (cycle.y < 400 - o

