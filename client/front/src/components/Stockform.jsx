import React, { useState } from 'react';
import axios from 'axios';

const StockForm = () => {
  const [symbol, setSymbol] = useState('');
  const [date, setDate] = useState('');
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setError('');
      const response = await axios.post('http://localhost:5000/api/fetchStockData', { symbol, date });

      if (!response.data || Object.keys(response.data).length === 0) {
        throw new Error('No data available for the specified date and symbol');
      }

      setStockData(response.data);
    } catch (error) {
      setError(error.message);
      setStockData(null);
    }
  };

  return (
    <div>
      <h1>Stock Data Fetcher</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="symbol">Stock Symbol:</label>
        <input
          type="text"
          id="symbol"
          name="symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          required
        />
        <br />
        <span>Default date is 09-01-2023</span><br></br>
        <label style={{paddingTop:"8px", color:"red"}} htmlFor="date">Date:</label>
        
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        
        
        <br />
        <button type="submit">Fetch Data</button>
      </form>

      {error && <p>Error: {error}</p>}

      {stockData && (
        <div id="stockData">
          <h2>Stock Data for {symbol} on {date}</h2>
          <p>Open: {stockData.open}</p>
          <p>High: {stockData.high}</p>
          <p>Low: {stockData.low}</p>
          <p>Close: {stockData.close}</p>
          <p>Volume: {stockData.volume}</p>
        </div>
      )}
    </div>
  );
};

export default StockForm;
