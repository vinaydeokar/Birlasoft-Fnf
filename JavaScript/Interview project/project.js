const express= require('express');
const moment=require('moment-timezone')
const app= express();

async function getTime(){
    const asianTime='Asia/Kolkata'
    const now=moment().tz(asianTime);
    return {
        year: parseInt(now.format('YYYY')),     
        month: parseInt(now.format('MM')),     
        day: parseInt(now.format('DD')),     
        hour: parseInt(now.format('HH')),     
        minute: parseInt(now.format('mm')),     
        seconds: parseInt(now.format('ss')),     
        milliSeconds: parseInt(now.format('SSS')),     
        dateTime: now.format(),     
        date: now.format('MM/DD/YYYY'),     
        time: now.format('HH:mm'),     
        timeZone: now.tz(),     
        dayOfWeek: now.format('dddd'),     
        dstActive: now.isDST()
    }
}
app.get('/', async(req,resp)=>{
    const abc=await getTime();
    resp.json(abc);
})

app.listen(5000)