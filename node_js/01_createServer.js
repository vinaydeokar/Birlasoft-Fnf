const http= require('http');
http.createServer((req,resp)=>{                    //passing an arrow function as an parameter
    resp.write("Hello, Vinay this side...");
    //resp.write("<h1>Hello, Vinay this side...</h1>");
    resp.end();
}).listen(4500);

/*//Explaination of passing an arrow function as an parameter 
//Step-1: 
function dataControl(req, resp){
    resp.write("<h1>Hello, Vinay this side...</h1>");
    resp.end(); 
}
http.createServer(dataControl).listen(4500);

//Step-2: making above function as an arrow function
const dataControl=(req, resp)=>
{
    resp.write("<h1>Hello, Vinay this side...</h1>");
    resp.end(); 
}
//Step-3: passing that arrow function to createServer() function
*/