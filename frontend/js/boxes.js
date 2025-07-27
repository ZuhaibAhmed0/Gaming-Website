window.boxes = {
  start(container) {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let boxes = [];
    let box = { x: 200, y: 0, w: 40, h: 20 };
    let speed = 2;

    document.addEventListener('keydown', (e) => {
      if (e.key === " ") {
        boxes.push({ ...box });
        box.y = 0;
      }
    });

    function loop() {
      ctx.fillStyle = "#111";
      ctx.fillRect(0, 0, 400, 400);

      // Draw fixed boxes
      ctx.fillStyle = "#f39c12";
      boxes.forEach(b => {
        ctx.fillRect(b.x, b.y, b.w, b.h);
      });

      // Drop current box
      box.y += speed;
      ctx.fillStyle = "#e74c3c";
      ctx.fillRect(box.x, box.y, box.w, box.h);

      if (box.y > 380) {
        boxes.push({ ...box });
        box.y = 0;
      }
    }

    this.interval = se

