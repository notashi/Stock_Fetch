
# Trade_Statistics
 A simple React app to fetch statistics of trades using Axios to communicate with the backend. The frontend consists of a form that allows users to input a stock symbol and select a date. Upon submission, the app sends a request to the backend API, and the backend fetches the stock data from the Polygon API using the provided symbol and date. The required stock details (Open, High, Low, Close, Volume) are then displayed on the frontend.

## Frontend (React):

![App Screenshot](https://media.discordapp.net/attachments/1123554766530809909/1133725252858421248/fetch.PNG?width=717&height=336)

Created a StockForm component that handles user input and makes API requests.
The component has state variables to store the symbol, date, stock data, and error messages.
When the form is submitted, the handleSubmit function sends a POST request to the backend API using Axios, passing the symbol and date as the payload.
The backend response is used to display the stock details or error messages on the frontend.

## Backend (Express):

![App Screenshot](https://media.discordapp.net/attachments/1123554766530809909/1133725253164597268/post.PNG?width=661&height=414)
Set up an Express server to handle API requests.
Used the cors middleware to allow cross-origin requests from the React frontend.
Created an API endpoint /api/fetchStockData to handle POST requests from the frontend.
The endpoint validates the input (symbol and date), makes an API call to the Polygon API using Axios, and fetches the trade statistics.
The required stock details are extracted from the response and sent back as a JSON response to the frontend.


## Deployment


```bash
 git clone https://github.com/notashi/Stock_Fetch.git
```

Prerequisites
Before running the app, make sure you have the following installed on your system:

Node.js (v14 or higher)
Getting Started
Clone the Repository:

cd your_repo
Install Dependencies:
Install the dependencies for both the frontend and backend:

```bash
cd client/front
npm install  (frontend)
-----------------------------------------------------------------------------------------------------------------
npm install (backend)
Set Up Environment Variables:
In the backend directory, create a .env file and add your Polygon API key to it:

env
API_KEY=your_polygon_api_key_here
Replace your_polygon_api_key_here with your actual Polygon API key.

Start the Development Servers:
Open two terminal windows, one for the frontend and the other for the backend.

Terminal 1 (Frontend - Vite):

npm run dev
