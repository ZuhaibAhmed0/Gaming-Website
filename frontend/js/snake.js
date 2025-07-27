window.snake = {
  start(container) {
    const canvas = document.createElement('canvas');
    canvas.width = 400; canvas.height = 400;
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    // simple snake game prototype
    let snake = [{x:10,y:10}], dir = {x:1,y:0}, food = {x:15,y:15};
    function loop(){
      ctx.fillStyle = '#222';
      ctx.fillRect(0,0,400,400);
      // move
      const head = {x: snake[0].x+dir.x, y: snake[0].y+dir.y};
      snake.unshift(head);
      if (head.x===food.x && head.y===food.y) {
        food = {x: Math.floor(Math.random()*20), y: Math.floor(Math.random()*20)};
      } else snake.pop();
      // draw food
      ctx.fillStyle = 'red';
      ctx.fillRect(food.x*20,food.y*20,20,20);
      // draw snake
      ctx.fillStyle = 'lime';
      snake.forEach(s=> ctx.fillRect(s.x*20,s.y*20,20,20));
    }
    document.addEventListener('keydown', e=>{
      if (e.key==='ArrowUp') dir={x:0,y:-1};
      else if (e.key==='ArrowDown') dir={x:0,y:1};
      else if (e.key==='ArrowLeft') dir={x:-1,y:0};
      else if (e.key==='ArrowRight') dir={x:1,y:0};
    });
    this.interval = setInterval(loop, 150);
  },
  stop() { clearInterval(this.interval); }
};

