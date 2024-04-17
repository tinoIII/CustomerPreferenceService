import express from 'express';
import { getDailyNotificationListForDates } from './Scripts/CustomerNotification';
import { getUsers } from './Test/Data';
import { getDate } from './Scripts/Dates';

const handlePost = (req, res) => {
  const body = req.body;
  debugger;
  res.send(
    getDailyNotificationListForDates(0,
      getDate(req.params.y, req.params.m, req.params.d),
      body,
      []
    )
  );
}

const handleGet = (req, res) => {
  res.send(
    getDailyNotificationListForDates(0,
      getDate(req.params.y, req.params.m, req.params.d),
      getUsers(),
      []
    )
  );
}

const notifyServerStart = () => console.log('Server Running On 3000');

const startServer = () => express()
  .use(express.json())
  .get('/schedule/:y/:m/:d', handleGet)
  .post('/schedule/:y/:m/:d', handlePost)
  .listen(3000, notifyServerStart);


startServer();

