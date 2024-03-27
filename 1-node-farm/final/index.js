const fs = require('fs');  // FILES
 const http = require('http');
 const url = require('url');
// const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate');

///////////////////////////////////////////////////////////////////////////////////////////////////////
// FILES

//Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8'); // 1st parameter od readFileSync function is path and second is encoding system
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');
//-------------------------------------------------------------------------------------------------------
//Non-blocking, asynchronous way
//simply reading
// fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//   console.log(data3);
//   })
// //callback hell
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {   //data1 is a read data from a file
//   if (err) return console.log('ERROR! 💥');                //error handeling

//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => { 
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('Your file has been written 😁');
//       })
//     });
//   });
// });
// console.log('Will read file!');
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Creating a simple webserver
// const server= http.createServer((req,res)=>{
//   res.end("hello from the server !!!");        
// }
// )

// const server= http.createServer((req,res)=>{res.end})

// server.listen(8000, '127.0.0.1', () => {   //here 127.0.0.1 is a by default localhost addressso no need to write explicitely. Also callback function parameter is optional
//   console.log('Listening to requests on port 8000');
// });
// //on browser- 127.0.0.1:8000 or localhost:8000

//----------------------------------------------------------------------------------------------------------

//Routing
// const server= http.createServer((req,res)=>{
//   const pathName=req.url;

//   if(pathName==='/'|| pathName==='/overview'){
//     res.end('This is the OVERVIEW');
//   }else if(pathName==='/PRODUCT'){
//     res.end('This is the PRODUCT');
//   }else{                      //This is called fallback mechanism
//     res.writeHead(404, {     //this head should always written above res.end('<h1>Page not found!!');
//       'Content-type':'text/html',  //right click on browser->click on view page source or inspect-> click on Network->reload tha page-> click on ghj i.e., our url name and we will get to see these things there
//       'my-own-header':'hello-world'
//     });
//     res.end('<h1>Page not found!!</h1>');
//   }
// });

// server.listen(8000, '127.0.0.1', () => {   //here 127.0.0.1 is a by default localhost addressso no need to write explicitely. Also callback function parameter is optional
//     console.log('Listening to requests on port 8000');
//   });

//----------------------------------------------------------------------------------------------------------

//Building a simple API
// const data=fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8'); //we are reading the file on top of code because, jasa code run hoil tasa json data read hoil- prattyek vela nantar browser kadun request aalyavar fakta khalcha code execute houn data send hot rahil- read nahi honar prattyek request la to adhich read zalela asel
// const dataObj=JSON.parse(data);  //It will convert the JSON data into the JS object- array in this case

// const server= http.createServer((req,res)=>{
//   const pathName=req.url;

//   if(pathName==='/'|| pathName==='/overview'){
//     res.end('This is the OVERVIEW');
//   }else if(pathName==='/PRODUCT'){
//     res.end('This is the PRODUCT');
//   }else if(pathName==='/api'){
//     res.writeHead(200,{'Content-type':'application/json'});
//     res.end(data);
//   }else{                      //This is called fallback mechanism
//     res.writeHead(404, {     //this head should always written above res.end('<h1>Page not found!!');
//       'Content-type':'text/html',  //right click on browser->click on view page source or inspect-> click on Network->reload tha page-> click on ghj i.e., our url name and we will get to see these things there
//       'my-own-header':'hello-world'
//     });
//     res.end('<h1>Page not found!!</h1>');
//   }
// });

// server.listen(8000, '127.0.0.1', () => {   //here 127.0.0.1 is a by default localhost addressso no need to write explicitely. Also callback function parameter is optional
//     console.log('Listening to requests on port 8000');
//   });

//----------------------------------------------------------------------------------------------------------

// //HTML templating:Filling the template //Loading overview template
// const tempOverview = fs.readFileSync(
//   `${__dirname}/templates/template-overview.html`,'utf-8'
// );
// const tempCard = fs.readFileSync(
//   `${__dirname}/templates/template-card.html`,'utf-8'
// );
// const tempProduct = fs.readFileSync(
//   `${__dirname}/templates/template-product.html`,'utf-8'
// );

// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);

// const server= http.createServer((req,res)=>{
//   const pathname=req.url;
//   // Overview page
//   if (pathname === '/' || pathname === '/overview') {
//     res.writeHead(200, {'Content-type': 'text/html'});
//     res.end(tempOverview);
//   }
// });

// server.listen(8000, '127.0.0.1', () => {
//   console.log('Listening to requests on port 8000');
// });


//----------------------------------------------------------------------------------------------------------
// //HTML templating:Filling the template // Integrating product cards in the template overview
// const replaceTemplate=(temp, product)=>{
// let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName); ///{%PRODUCTNAME%}/g this is a regular expression used insted '{%PRODUCTNAME%}' because there may be multiple instances of it and we need to replace all of it not that one which is occured first
//   output = output.replace(/{%IMAGE%}/g, product.image);
//   output = output.replace(/{%PRICE%}/g, product.price);
//   output = output.replace(/{%FROM%}/g, product.from);
//   output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
//   output = output.replace(/{%QUANTITY%}/g, product.quantity);
//   output = output.replace(/{%DESCRIPTION%}/g, product.description);
//   output = output.replace(/{%ID%}/g, product.id);
  
//   if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
//   return output;
// }

// const tempOverview = fs.readFileSync(
//   `${__dirname}/templates/template-overview.html`,'utf-8'
// );
// const tempCard = fs.readFileSync(
//   `${__dirname}/templates/template-card.html`,'utf-8'
// );
// const tempProduct = fs.readFileSync(
//   `${__dirname}/templates/template-product.html`,'utf-8'
// );

// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);

// const server= http.createServer((req,res)=>{
//   const pathname=req.url;
//   // Overview page
//   if (pathname === '/' || pathname === '/overview') {
//     res.writeHead(200, {'Content-type': 'text/html'});

//     const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');// join method is uesd to convert into string
//     const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
//     res.end(output);
//   }

// server.listen(8000, '127.0.0.1', () => {
//   console.log('Listening to requests on port 8000');
// });


//----------------------------------------------------------------------------------------------------------


// //parsing variables from URL
// const replaceTemplate=(temp, product)=>{
//   let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName); ///{%PRODUCTNAME%}/g this is a regular expression used insted '{%PRODUCTNAME%}' because there may be multiple instances of it and we need to replace all of it not that one which is occured first
//     output = output.replace(/{%IMAGE%}/g, product.image);
//     output = output.replace(/{%PRICE%}/g, product.price);
//     output = output.replace(/{%FROM%}/g, product.from);
//     output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
//     output = output.replace(/{%QUANTITY%}/g, product.quantity);
//     output = output.replace(/{%DESCRIPTION%}/g, product.description);
//     output = output.replace(/{%ID%}/g, product.id);
    
//     if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
//     return output;
//   }
  
//   const tempOverview = fs.readFileSync(
//     `${__dirname}/templates/template-overview.html`,'utf-8'
//   );
//   const tempCard = fs.readFileSync(
//     `${__dirname}/templates/template-card.html`,'utf-8'
//   );
//   const tempProduct = fs.readFileSync(
//     `${__dirname}/templates/template-product.html`,'utf-8'
//   );
  
//   const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
//   const dataObj = JSON.parse(data);
  
//   const server= http.createServer((req,res)=>{
//     //console.log(url.parse(req.url,true));  // see how the url is parsed
//     const {query, pathname}=url.parse(req.url,true); //creating an object taking query and pathname fields that have been seen from parsed url
//     // Overview page
//     if (pathname === '/' || pathname === '/overview') {
//       res.writeHead(200, {'Content-type': 'text/html'});
  
//       const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');// join method is uesd to convert into string
//       const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
//       res.end(output);
//     }
//     // product page
//     else if (pathname === '/product') {
//           res.writeHead(200, {
//             'Content-type': 'text/html'
//           });
//           const product = dataObj[query.id];  // taking id no. from query and passing to array as an index //http://127.0.0.1:8000/product?id=0
//           const output = replaceTemplate(tempProduct, product);
//           res.end(output);
//           }     
//   });
  
//   server.listen(8000, '127.0.0.1', () => {
//     console.log('Listening to requests on port 8000');
//  });
//----------------------------------------------------------------------------------------------------------
//keeping most used function(replaceTemplate) into a separete module// Our own modules

  const tempOverview = fs.readFileSync(
    `${__dirname}/templates/template-overview.html`,'utf-8'
  );
  const tempCard = fs.readFileSync(
    `${__dirname}/templates/template-card.html`,'utf-8'
  );
  const tempProduct = fs.readFileSync(
    `${__dirname}/templates/template-product.html`,'utf-8'
  );
  
  const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
  const dataObj = JSON.parse(data);
  
  const server= http.createServer((req,res)=>{
    //console.log(url.parse(req.url,true));  // see how the url is parsed
    const {query, pathname}=url.parse(req.url,true); //creating an object taking query and pathname fields that have been seen from parsed url
    // Overview page
    if (pathname === '/' || pathname === '/overview') {
      res.writeHead(200, {'Content-type': 'text/html'});
  
      const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');// join method is uesd to convert into string
      const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
      res.end(output);
    }
    // product page
    else if (pathname === '/product') {
          res.writeHead(200, {
            'Content-type': 'text/html'
          });
          const product = dataObj[query.id];  // taking id no. from query and passing to array as an index //http://127.0.0.1:8000/product?id=0
          const output = replaceTemplate(tempProduct, product);
          res.end(output);
          }     
  });
  
  server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
  });
//----------------------------------------------------------------------------------------------------------


