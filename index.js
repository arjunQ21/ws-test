var express = require('express')
const { WebSocketServer } = require('ws')
var app = express()

app.get('/', function (req, res) {
    res.send(`
    <body>
    Hi
    </body>
    <script>
    
    let ws = new WebSocket(window.origin.replace(/https?/, 'ws'))
    ws.onopen = function(){console.log("opened");}
    ws.onmessage = function(m){console.log("New message: " ,m) ;}
    
    </script>
    
    `);
})

const port = process.env.PORT || 3000

const server = require("http").createServer(app);

const wss = new WebSocketServer({ server });

wss.on("connection", function (ws) {
    console.log("New socket connected");
    ws.send("asfsdf")
    // ws.
    // setTimeout(function(){
    ws.emit("message", "sadf");

    // }, 3000)
})


server.listen(port, function () {
    console.log("Listening on port " + port);
})

