# NodeKeyboard #

This is the keyboard reader part of my NodeKeyboard app, a project that joins _Raspberry Pi_, _Makey makey_ and _Node_ in one and awesome project! 

## Getting started ##

This is a part of a full project so you will need to download the other parts in:
  
[NodeKeyboardServer, the node server with sockets and moongose!](https://github.com/LudoBermejo/NodeKeyboardSERVER)

[NodeKeyboardWEB, the webapp we use to listen to sounds and add questions](https://github.com/LudoBermejo/NodeKeyboardWEB)

Then you must change the socket configuration ('http://ludobermejo.es:9100')

#### How to work

You only need to execute the app.js in the raspberry and then connect the makey makey. It would send all the keys to NodeKeyboardServer and this will send them to all the NodeKeyboardWeb instances

