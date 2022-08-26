const fs = require("fs");
//to start the server with NODEMON:
//  npm run dev
const port = process.env.PORT || 4300;
/* UTILIZANDO O HTTP NATIVO: 
const http = require('http');


const rotas = {
    '/':'MAIN',
    '/01':'TXT_01',
    '/02':'TXT_02',
    '/03':'TXT_03',
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});

    res.end(rotas[req.url]??'Found nothing - 404');

});

server.listen(port, ()=>{
    console.log('\n\nListening to port: ',port);

});
//const homeHtmlFile = fs.readFileSync('./pages/home/index.html');
*/

const express = require("express");
const path = require("path");
const api = express();
api.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "pages", "home", "index.html"));
});

api.get("/cats_and_rats", (req, res) => {
  //mout file:
  mount_cats_and_rats();
  let html = fs.readFileSync('./pages/cats_and_rats/index.html').toString();
  let css = fs.readFileSync('./pages/cats_and_rats/styles.css').toString();
  let scripts = fs.readFileSync('./pages/cats_and_rats/styles.css').toString();
  
  const separator = '<head>'
  let [start, end] = html.split(separator);
  
  let resp = `${start}<style>${css}</style>${separator}${end}`;
  

  res.status(200).send(resp);


  //res.status(200).sendFile(path.join(__dirname, "pages", "cats_and_rats", "index.html"));
});



api.get("/01", (req, res) => {
  res.status(200).json({ info_01: "A", info_02: "B" });
});

api.get("/02", (req, res) => {
  res.status(200).json({ info_01: "B", info_02: "B" });
});

api.listen(port, () => {
  console.log("\n\nListening to port: http://localhost:" + port);
});












function mount_cats_and_rats(){
  let html = fs.readFileSync('./pages/cats_and_rats/index.html').toString();
  let css = fs.readFileSync('./pages/cats_and_rats/styles.css').toString();
  let util_Script = fs.readFileSync('./pages/cats_and_rats/util.js').toString();
  let DB_Script = fs.readFileSync('./pages/cats_and_rats/DB.js').toString();
  let models_Script = fs.readFileSync('./pages/cats_and_rats/models.js').toString();
  let proc_Script = fs.readFileSync('./pages/cats_and_rats/proc.js').toString();
  
  return ``;
}