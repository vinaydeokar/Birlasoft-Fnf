const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log("Timer 1 finished"), 0);   //the callback function (() => console.log("Timer 1 finished"), 0) scheduled by setTimout function is not in an event loop i.e., in a call back function
setImmediate(() => console.log("Immediate 1 finished"));//the callback function scheduled by setImmediate is not in an event loop i.e., in a call back function

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("----------------");

  setTimeout(() => console.log("Timer 2 finished"), 0); //the callback function scheduled by setTimout function is in the event loop i.e., in a call back function
  setTimeout(() => console.log("Timer 3 finished"), 3000); //the callback function scheduled by setTimout function is in the event loop i.e., in a call back function
  setImmediate(() => console.log("Immediate 2 finished")); //the callback function scheduled by setImmediate is in the event loop i.e., in a call back function

  process.nextTick(() => console.log("Process.nextTick"));

  // crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512"); // from this below watch lecture no.- 33
  // console.log(Date.now() - start, "Password encrypted");

  // crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  // console.log(Date.now() - start, "Password encrypted");

  // crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  // console.log(Date.now() - start, "Password encrypted");

  // crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  // console.log(Date.now() - start, "Password encrypted");
});

console.log("Hello from the top-level code");

//--------------output before using nexttick()------------------
// Hello from the top-level code   //explaination- 1st non call back code gets executed
// Timer 1 finished                //O/P will be displayed according to time they require to execute, not in a specific order
// Immediate 1 finished            //O/P will be displayed according to time they require to execute, not in a specific order
// I/O finished                    //O/P will be displayed according to time they require to execute, not in a specific order
// ----------------
// Immediate 2 finished           // here timer 2 is not executed first because if we schedule a callback using setImmediate, it gets executed right after I/O polling. Because, even though timer is set to 0 second, but event loop wait/pause in the I/O polling phase(as file read requires some time) till that time immediately after setimmidiate gets executed before timer
// Timer 2 finished
// Timer 3 finished               // event loop does not gets exited till it finishesh this task

//--------------output after using nexttick()------------------
// Hello from the top-level code   //explaination- 1st non call back code gets executed
// Timer 1 finished                //O/P will be displayed according to time they require to execute, not in a specific order
// Immediate 1 finished            //O/P will be displayed according to time they require to execute, not in a specific order
// I/O finished                    //O/P will be displayed according to time they require to execute, not in a specific order
// ----------------
// Process.nextTick               //next tick is a part of microtask queue that gets executed not after one entire tick(event loop), but gets executed after each phase (here the previous phase is I/O)
// Immediate 2 finished           // here timer 2 is not executed first because if we schedule a callback using setImmediate, it gets executed right after I/O polling. Because, even though timer is set to 0 second, but event loop wait/pause in the I/O polling phase(as file read requires some time) till that time immediately after setimmidiate gets executed before timer
// Timer 2 finished
// Timer 3 finished               // event loop does not gets exited till it finishesh this task
