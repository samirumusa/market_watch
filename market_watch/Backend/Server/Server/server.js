/* const redis = require('redis');
const client = redis.createClient();
const axios = require('axios');
const express = require('express');

const app = express();
const USERS_API = 'https://www.econdb.com/api/series/URATEUS/?format=json';
const arr = []
const dt  = []
app.get('/users', (req, res) => {

  try {
    axios.get(`${USERS_API}`).then(function (response) {
      const users = response.data;
      const body = response.data;
      const values = response.data.data.values
      const dates = response.data.data.dates
      arr.push(values)
      dt.push(dates)
      console.log(arr[0][dates.length-1])
      console.log('Users retrieved from the API');
      res.status(200).send(dt[0]);
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.get('/cached-users', (req, res) => {
   client.connect()
  try {
    client.get('users', (err, data) => {

      if (err) {
        console.error(err);
        throw err;
      }

      if (data) {
        console.log('Users retrieved from Redis');
        res.status(200).send(JSON.parse(data));
      } else {
        axios.get(`${USERS_API}`).then(function (response) {
          const users = response.data;
          client.setex('users', 600, JSON.stringify(users));
          console.log('Users retrieved from the API');
          res.status(200).send(users);
        });
      }
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
 */