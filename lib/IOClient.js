module.exports.connect = connect;
module.exports.keypress = keypress;
module.exports.mousepress = mousepress;

var connected = false;
var socket = null;
function connect() {
    socket = require('socket.io-client')('http://localhost:9000');
    socket.on('connect', function(){
        console.log("Connected");
        connected = true;
    });
    socket.on('event', function(data){});
    socket.on('disconnect', function(){});
}

function mousepress() {
    if(connected) {
        socket.emit('keypress', { name: "click"});
    }

}
function keypress(key) {
    if(connected) {
        socket.emit('keypress', key);
    }

}



