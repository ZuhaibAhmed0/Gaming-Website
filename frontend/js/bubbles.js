window.bubbles = {
  start(container) {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let bubbles = [];
    let score = 0;

    function spawnBubble() {
      bubbles.push({
        x: Math.random() * 380,
        y: 400,
        r: 10 + Math.random() * 20,
        speed: 1 + Math.random() * 2
      });
    }

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      bubbles = bubbles.filter(b => {
        const dist = Math.hypot(b.x - mx, b.y - my);
        if (dist < b.r) {
          score++;
          return false;
        }
        return true;
      });
    });

    function loop() {
      ctx.fillStyle = "#111";
      ctx.fillRect(0, 0, 400, 400);

      ctx.fillStyle = "#0ff";
      bubbles.forEach(b => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
        b.y -= b.speed;
      });

      ctx.fillStyle = "#fff";
      ctx.fillText(`Score: ${score}`, 10, 20);

      bubbles = bubbles.filter(b => b.y + b.r > 0);
    }

    this.interval = setInterval(() => {
      if (Math.random() < 0.1) spawnBubble();
      loop();

