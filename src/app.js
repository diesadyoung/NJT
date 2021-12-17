const express = require('express');
const tourRouter = require("./router/tour.router");
const scheduleRouter = require("./router/schedule.router");
const priceRouter = require("./router/price.router");

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/tours', tourRouter);
app.use('/schedules', scheduleRouter);
app.use('/prices', priceRouter);

module.exports = app;