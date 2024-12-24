// src/server.js

const app = require('./app');

const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not set in .env

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
