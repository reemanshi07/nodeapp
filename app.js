const express = require("express");
const userRoute = require("./routes/user");
const bodyParser = require("body-parser");

const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require("./database");

app.use("/", userRoute);

io.on('connection', (socket) => {
  console.log('connected to socket');

  socket.on('disconnect', () => {
    console.log('socket is disconnected ');
  });
  
  socket.on('chat-message', (msg) => {
    console.log(' received : ', msg)

    socket.emit('chat', 'ack :: ' + msg);
  });

});

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, console.log("server started"));
