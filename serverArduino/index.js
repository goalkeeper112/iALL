var express        = require('express');
var app            = express();
var httpServer = require("http").createServer(app);
var five = require("johnny-five");
var io=require('socket.io')(httpServer);

var port = 3000;

app.use(express.static(__dirname + '/public'));

httpServer.listen(port);
console.log('Server available at http://localhost:' + port);
var led, temperature, distance, tempActivate, tempInterval;
tempActivate = false;
//Arduino board connection

var board = new five.Board();
board.on("ready", function() {
    console.log('Arduino connected');

    led = new five.Led(2);

    temperature = new five.Thermometer({
      controller: "LM35",
      pin: "A5",
    });

    distance = new five.Proximity({
      controller: "HCSR04",
      pin: 7
    });
});

//Socket connection handler
io.on('connection', function (socket) {
        console.log(socket.id);

        socket.on('led:on', function (data) {
           led.on();
           console.log('LED ON RECEIVED');
        });

        socket.on('led:off', function (data) {
            led.off();
            console.log('LED OFF RECEIVED');
        });

        socket.on('temperature:activate', function(data){

          if(tempActivate === false){
            console.log("funciona")
            tempActivate = true;
            console.log(tempActivate);
              temperature.on("change", function() {
                io.emit("temperature", {
                  "celsius": this.celsius + "°C",
                  "fahrenheit": this.fahrenheit + "°F"
                });

                console.log({
                  "celsius": this.celsius + "°C",
                  "fahrenheit": this.fahrenheit + "°F"
                });
              });
          }
        });

        socket.on('proximity', function(data){
          var distanceCM;

          distance.on("data", function(data) {
            distanceCM = this.cm;
            io.emit("distance", distanceCM);
          });

          distance.on("change", function() {
            console.log("The obstruction has moved.");
          });
        });
    });
