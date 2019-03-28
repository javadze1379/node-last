const path = require('path');
const express = require('express');

const publicPath = path.join(__dirnam,'../public');
const app = express();

app.use(express.static(publicPath));
// app.use((req,res,next) => {
//     const log = `${new Date()} ${req.method} ${req.url}`
//    fs.appendFileSync('server.log', log + '\n')
//     next()
// })

app.get('/', (req, res) => {
    // res.send('<h1>i love this world<h1>')
    res.send({
        name: 'javad',
        duty: 'change your world! spookiely'
    })
});
app.get('**', (req, res) => {
    // res.send('<h1>i love this world<h1>')
    res.send('<h1>WTF ARE YOU DOING ???!!<h1>')
});

app.listen(3000, () => {
    console.log('server is runing');
    
})