const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.static(__dirname)); // Serve static files from your project folder

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
const folderPath = path.join(__dirname, 'products');
const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg'];

app.use('/products', express.static(folderPath));

app.get('/products', (req, res) => {
  const files = fs.readdirSync(folderPath);
  const images = files.filter(file =>
    imageExtensions.includes(path.extname(file).toLowerCase())
  );
  res.json(images);
});

app.listen(3000, () => console.log('Server running on port 3000'));