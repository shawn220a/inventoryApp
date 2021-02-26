const express = require('express');
const formRoutes = require('./routes/forms.js');
const db = require('./mongoDB/connection.js');

const app = express();

db.connect();

// Body Parser Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Welcome to the backend');
});

app.use('/api/form', formRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
