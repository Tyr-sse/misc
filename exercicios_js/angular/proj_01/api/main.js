//to start the server with NODEMON:
//  npm run dev
const http = require('http');
const port = 4300;

const rotas = {
    '/':'MAIN',
    '/pg_01':'PG_01'

}
















const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});

    res.end(rotas[req.url]??'Found nothing - 404');

});
server.listen(port, ()=>{
    console.log('\n\nListening to port: ',port);

})

