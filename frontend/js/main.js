async function init() {
  const resp = await fetch('/api/game-list');
  const games = await resp.json();
  const nav = document.getElementById('game-nav');
  const container = document.getElementById('game-container');
  games.forEach(g => {
    const btn = document.createElement('button');
    btn.innerText = g;
    btn.onclick = ()=> loadGame(g);
    nav.appendChild(btn);
  });
}
function clearContainer() {
  const container = document.getElementById('game-container');
  container.innerHTML = '';
}
async function loadGame(name) {
  clearContainer();
  const container = document.getElementById('game-container');
  const script = document.createElement('script');
  script.src = `js/${name}.js`;
  script.onload = ()=> {
    if (window[name] && typeof window[name].start === 'function') {
      window[name].start(container);
    }
  };
  document.body.appendChild(script);
}
window.onload = init;

