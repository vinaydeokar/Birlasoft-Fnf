const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);  // here node will have to load all the data from the file into the memory and then send it to the browser// app may crash due to this
  // });
  //Solution 2: Streams
  const readable = fs.createReadStream("test-file.txt"); // here we dont need 'data' variable to store the data from file and then storing that variable in the memory, we will just create a readable stream then as we receive a chunk of a data, we will send that as a response to a client which is a writable stream
  readable.on("data", chunk => {  // every time when we have a new chunk of data that we can consume, a readable stream emits a 'data' event (refer table in notes), we can listen that
    res.write(chunk);
  });
  readable.on("end", () => {
    res.end(); //end() method signals that no more data will be written to this writable stream (when readable stream finished the data to be read)
  });
  readable.on("error", err => { // there is an another event that we can listen to our readable stream which is an error event and in this callback function we will have the access to the error object
    console.log(err);
    res.statusCode = 500;
    res.end("File not found!");
  });

//problem with above solution(back-pressure)- readable stream is much much faster than actually sending the result with a response writable stream over the network & this will overwhelm the respose stream which cannot handle all this incoming data & this problem is called "Backpressure". So, backpressure happens when reponse cannot send the data nearly as fast as it receiving from the file  
// Solution 3- to fix above problem- we have pipe operator is available on all readable streams and it allow us to pipe the o/p of a readable stream right into the input of a writable stream & that will fix the problem of backpressure
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  //explaination- readableSource.pipe(writeableDest)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
