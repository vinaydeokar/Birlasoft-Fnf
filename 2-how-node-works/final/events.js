const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter { // different node modules like file system, http and many other node core modules implement events internally, and all of them inherit from the EventEmitter class
  constructor() {  // in ES6 syntax, each class gets a constructor which is a function that runs as soon as we create a new object from a class
    super();   //need to write this always when we extend another superclass. By running super we get access of the methods of a parent class (EventEmitter)
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});
myEmitter.on("newSale", () => {
  console.log("Costumer name: Jonas");
});
myEmitter.on("newSale", stock => {
  console.log(`There are now ${stock} items left in stock.`);
});
myEmitter.emit("newSale", 9);  // we have emitted this event with value 9, which will be used by the listener as an argument of it's callback function
// different node modules like file system, http and many other node core modules implement events internally, and all of them inherit from the EventEmitter class

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);// after running browser (http://127.0.0.1:8000/) we are seeing console output twice, because browser try to request favicon by default
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another request 😀");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {    // to start the server // callback function is optional
  console.log("Waiting for requests..."); // after this line executed in the console, application is not shutting down. Because, event loop is still waiting for incoming I/O
});
