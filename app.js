var express = require('express');
var socket = require('socket.io');

var app = express();

app.use(express.static(__dirname + "/build")); 

server = app.listen(5000, function(){
    console.log('server is running on port 5000')
});

io = socket(server);

let dataArray = [];

io.on('connection', (socket) => {
    console.log(socket.id);
    console.log(dataArray);

    io.emit('REFRESH_MESSAGE', dataArray);
   
   

    socket.on('SEND_MESSAGE', function(data){
        dataArray.push(data);
        io.emit('RECEIVE_MESSAGE', data);
    })
});

