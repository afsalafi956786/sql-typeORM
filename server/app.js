const express = require('express');
const postRoute = require('./routes/postRouter')
const app = express()


const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hellow world')
})


app.use(express.json());
app.use('/api',postRoute)





app.listen(port,()=>{
    console.log('server connected at the port is 2000')
})