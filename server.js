const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const env = require("dotenv").config()

const app = express();
const PORT = 5000;

const cors = require('cors');
app.use(cors());

// Middleware to parse request body
app.use(bodyParser.json());


// Endpoint to fetch stock data for a particular day
app.post('/api/fetchStockData', async (req, res) => {
  // Get stock symbol and date from the request body
  const { symbol, date } = req.body;

  // Validate inputs
  if (!symbol || !date) {
    return res.status(400).json({ error: 'Invalid symbol or date' });
  }

  // Call the Polygon API to fetch trade statistics
  const apiKey = process.env.API_KEY
  const apiUrl = `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/${date}/${date}?apiKey=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    console.log('Polygon API Response:', data);

    // Check if the response has valid data
    if (data.resultsCount === 0) {
      return res.status(404).json({ error: 'No trade statistics found for the specified date and symbol' });
    }

    // Extract the required fields from the response
    const { o: open, h: high, l: low, c: close, v: volume } = data.results[0];

    // Return the trade statistics as JSON
    res.json({ open, high, low, close, volume });
  } catch (error) {
    console.error('Error requesting data from the Polygon API:', error);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});