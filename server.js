var express = require('express');//Importing Express
var app = express();//Getting App From Express
var fs = require('fs');//Importing File System Module To Access Files
const port = 8080;//Creating A Constant For Providing The Port
//Routing Request : http://localhost:port/
app.get('/',function(request,response){
  //Telling Browser That The File Provided Is A HTML File
  response.writeHead(200,{"Content-Type":"text/html"});
  //Passing HTML To Browser
  response.write(fs.readFileSync("./ProjFiles/HtmlFiles/index.html"));
  //Ending Response
  response.end();
})
//Routing To Public Folder For Any Static Context
app.use(express.static(__dirname + '/ProjFiles/HtmlFiles'));
console.log("Server Running At:localhost:"+port);
var io = require('socket.io').listen(app.listen(port));//Telling Express+Socket.io App To Listen To Port
io.sockets.on("connection",function(socket){
    socket.emit("Start_Chat");
    //On Event Registar_Name
    socket.on("Register_Name",function(data){
       io.sockets.emit("r_name","<strong>"+data+"</strong> Has Joined The Chat");
       //Now Listening To A Chat Message
       socket.on("Send_msg",function(data){
       io.sockets.emit("msg",data);
       //Now Listening To A Chat Message
    })
    })
})




/*
var express = require('express');//Importing Express
var app = express();//Getting App From Express
var fs = require('fs');//Importing File System Module To Access Files
const port = 8080;//Creating A Constant For Providing The Port
//Routing Request : http://localhost:port/
app.get('/',function(request,response){
  //Telling Browser That The File Provided Is A HTML File
  response.writeHead(200,{"Content-Type":"text/html"});
  //Passing HTML To Browser
  response.write(fs.readFileSync("./ProjFiles/HtmlFiles/index.html"));
  //Ending Response
  response.end();
})
//Routing To Public Folder For Any Static Context
app.use(express.static(__dirname + '/public'));
console.log("Server Running At:localhost:"+port);
var io = require('socket.io').listen(app.listen(port));//Telling Express+Socket.io App To Listen To Port
io.sockets.on("connection",function(socket){
    socket.emit("Start_Chat");
})
*/



/*
var express = require('express');//Importing Express
var app = express();//Getting App From Express
var fs = require('fs');//Importing File System Module To Access Files
const port = 8080;//Creating A Constant For Providing The Port
app.listen(port);//Telling Express App To Listen To Port
//Routing Request : http://localhost:port/
app.get('/',function(request,response){
  //Telling Browser That The File Provided Is A HTML File
  response.writeHead(200,{"Content-Type":"text/html"});
  //Passing HTML To Browser
  response.write(fs.readFileSync("./ProjFiles/HtmlFiles/index.html"));
  //Ending Response
  response.end();
})
//Routing To Public Folder For Any Static Context
app.use(express.static(__dirname + '/public'));
console.log("Server Running At:localhost:"+port);

*/




/*
var express = require('express');//Importing Express
var app = express();//Getting App From Express
const port = 8080;//Creating A Constant For Providing The Port
app.listen(port);//Telling Express App To Listen To Port
//Routing Request : http://localhost:port/
app.get('/',function(request,response){
  //Telling Browser That The File Provided Is A HTML File
  response.writeHead(200,{"Content-Type":"text/html"});
  //Passing HTML To Browser
  response.write("The Server Is <strong>Working</strong>!");
  //Ending Response
  response.end();
})
console.log("Server Running At:localhost:"+port);
*/