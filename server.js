require('dotenv').config();

const express = require('express');
const app = express();
const port = 4000;

const axios = require('axios');
const bodyParser = require('body-parser');
const logger = require('morgan');

const WeatherFormatter = require('./formatters/WeatherFormatter');
const UnsplashFormatter = require('./formatters/UnsplashFormatter');

const ACCESS_KEYS = {
  darksky: process.env.DARK_SKY_KEY,
  unsplash: process.env.UNSPLASH_ACCESS_KEY
}

app.use(bodyParser.json());
app.use(logger('dev'))

app.get('/update', (req, res, next) => {
  Promise.all([
    axios.get(`https://api.darksky.net/forecast/${ACCESS_KEYS.darksky}/42.0723,-87.7228`),
    axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: ACCESS_KEYS.unsplash,
        orientation: 'portrait'
      }
    })
  ]).then((responses) => {
    const [weatherData, unsplashData] = responses.map((res) => res.data);

    res.send({
      weather: (new WeatherFormatter(weatherData)).format(),
      imageUrls: (new UnsplashFormatter(unsplashData)).format()
    });
  }).catch(next);
});

// Error handling
app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.listen(port, () => console.log(`Dashboard update server listening on port ${port}!`));