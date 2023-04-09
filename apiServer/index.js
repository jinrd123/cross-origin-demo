const express = require('express');

const app = express();

app.get('/api', (req, res) => {
    res.send("服务端响应的数据");
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})