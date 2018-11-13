const app = require('express')();
const http = require('http').createServer(app);
const port = process.env.port | 3000;

http.listen(port, () => {
    console.log('Server running on ' + port);
});

app.get('/', (req, res)=>{
    res.send("Invalid route - please check and try again");
  });