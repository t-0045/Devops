const express = require('express');
const app = express();
const x = 5;
 
app.get('/', (req, res) => {
  res.send('Hello from Docker!');
});
 
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
