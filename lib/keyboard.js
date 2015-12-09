var IOClient = require("./IOClient.js");
var keypress = require('keypress');

module.exports.create = function(globalProcess) {

// make `globalProcess.stdin` begin emitting "keypress" events
    keypress(globalProcess.stdin);

// listen for the "keypress" event
    globalProcess.stdin.on('keypress', function (ch, key) {
        console.log('got "keypress"', key);
        if (key && key.ctrl && key.name == 'c') {
            globalProcess.exit(1);
        }
    });

    globalProcess.stdin.on('mousepress', function (info) {
        console.log('got "mousepress" event at %d x %d', info.x, info.y);
    });
    keypress.enableMouse(globalProcess.stdout);
    globalProcess.stdin.setRawMode(true);
    globalProcess.stdin.resume();

    IOClient.connect();

}

