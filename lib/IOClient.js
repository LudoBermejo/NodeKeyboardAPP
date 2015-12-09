module.exports.connect = connect;
module.exports.keypress = keypress;

var connected = false;
var socket = null;
function connect() {
    console.log("HOLA");
    socket = require('socket.io-client')('http://localhost:9000');
    socket.on('connect', function(){
        connected = true;
    });
    socket.on('event', function(data){});
    socket.on('disconnect', function(){});
}

function keypress(key) {
    if(connected) {
        socket.emit('private message', { user: 'keyboardEmitter', msg: key });
    }

}



