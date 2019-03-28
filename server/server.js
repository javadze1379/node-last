const path = require('path');
const http = require('http');
const express = require('express');
const soketIo = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app)
const io = soketIo(server);

app.use(express.static(publicPath));

io.on('connection' ,(socket) => {
console.log('new user connected;');
socket.on('disconnect', ()=>  {
    console.log('server disconnected');
    
})
})
// app.use((req,res,next) => {
//     const log = `${new Date()} ${req.method} ${req.url}`
//    fs.appendFileSync('server.log', log + '\n')
//     next()
// })

app.get('/', (req, res) => {
    // res.send('<h1>i love this world<h1>')
  
});
// app.get('**', (req, res) => {
//     // res.send('<h1>i love this world<h1>')
//     res.send('<h1>WTF ARE YOU DOING ???!!<h1>')
// });

server.listen(port, () => {
    console.log('server is runing');
    
})