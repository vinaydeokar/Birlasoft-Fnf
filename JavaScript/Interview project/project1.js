const express = require('express');
const axios = require('axios');
const app = express();

app.get('/getAsianTime', async (req, res) => {

    const asianTime = await ReadAsianTime();
    res.json(asianTime);

});

async function ReadAsianTime() {
  const apiUrl = 'https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata';
    const response = await axios.get(apiUrl);
    return response.data;
}

app.listen(3000)