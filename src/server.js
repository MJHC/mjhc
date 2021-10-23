const express = require('express');
const path = require('path');
const app = express();
const port = 3100;


app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req, res)=>{
    res.send(path.join(__dirname, './public/index.html'));
});

app.listen(port, () => console.log('Website Running!'));