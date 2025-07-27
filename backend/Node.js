const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'frontend')));
app.get('/api/game-list', (req, res) => {
  res.json(['snake','bubbles','boxes','weapon','bike','cycle']);
});
// optional: provide high‑score endpoints, etc.
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));

