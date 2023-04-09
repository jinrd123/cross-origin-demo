const { resolve } = require("path");
const axios = require("axios");

const express = require('express');

const app = express();

app.use(express.static(resolve(__dirname,"../feApp")));

app.get('/api', async (req, res) => {
    let ans = await axios.get("http://127.0.0.1:80/api");
    res.send(ans.data);
})

app.listen(81, () => {
    console.log('http://127.0.0.1');
})