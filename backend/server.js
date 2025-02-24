const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '..')));

// Basic route handling
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'search.html'));
});

app.get('/train-details', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'train-details.html'));
});

app.get('/passenger', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'passenger.html'));
});

app.get('/payment', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'payment.html'));
});

app.get('/confirmation', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'confirmation.html'));
});

app.get('/mybookings', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'mybookings.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'login.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'contact.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'about.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
