const LogEvents = require('./logEvents');
const EvenEmitter = require('events');
const http = require('http');
const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

class MyEmitter extends EvenEmitter {};
// create a Object
const myEmitter = new MyEmitter();

// add listener for the log events
const PORT = process.env.PORT || 3500 ;

const server = http.createServer((req, res)=>{
  console.log(req.url , req.method)
})


server.listen(PORT , ()=>{console.log(`server is running ${PORT}`)})
myEmitter.on('log',(msg)=>LogEvents(msg));

setTimeout(()=>{
  // tesst
  myEmitter.emit('log','Log event emitted!');
},2000)
