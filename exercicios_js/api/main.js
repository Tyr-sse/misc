const express = require('express');
const fs = require('fs');
const app = express();
const port = 32500;
app.listen(32500);


app.get('/',async (req, res, nxt)=>{
    console.log('damn');
    res.writeHead(200, { 'Content-type': 'text/html' });
    const pg = fs.readFileSync('./src/pages/atv_04-lets-code/atv_04_lets-code.html','utf-8');//.\src\pages\atv_04-lets-code\atv_04_lets-code.html
    res.end(pg)




});
app.get('/asd',(req, res, nxt)=>{
    console.log('damn');
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('<html> <body>ds</body></html>')




});