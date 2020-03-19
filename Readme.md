## Server Sent Events Demo

#### Install dependencies
`npm i`

#### Start application
`node app.js`

#### Test application

Open http://localhost:5005/index.html on your browser

Send a POST call `http://localhost:5005/publish` with body `{"message": "Hello World!"}` on Postman

You also can see the messages from server to client on the `eventstream` on network tab of chrome dev tools.
