const express = require('express');
const math = require('mathjs');

const app = express();

app.use(express.json()); // To parse JSON bodies
app.use(express.static('public')); // Serve static files from 'public' directory

// Endpoint to handle calculation requests
app.post('/calculate', (req, res) => {
  const { expression } = req.body;
  try {
    // Use mathjs to evaluate the expression safely
        const result = math.evaluate(expression);

        res.json({ result });
  } catch (error) {
        res.status(400).json({ error: error.message });
  }

});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
