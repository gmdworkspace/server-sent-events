const express = require('express');
const events = require('./events');
const cors = require('cors');
const port = process.env.PORT || 5005;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(__dirname));

app.get('/events', cors(), events.subscribe);

app.post('/publish', cors(), events.publish);

app.listen(port, function() {
  console.log('Listening on', port);
});