const express = require('express');
const path = require('path');
const app = express();

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Optional API route
app.get('/api/game-list', (req, res) => {
  res.json(['snake', 'bubbles', 'boxes', 'weapon', 'bike', 'cycle']);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`ZUBBI DARK server running on http://localhost:${PORT}`);
});

