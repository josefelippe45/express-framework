const express = require('express');
//app will hold express functionalities
let app = express();
//creating a 'dynamic' port whatever is in the environment variable PORT or 8080
const port = process.env.PORT || 8080;
//creating routes
app.get('/', (req, res)=>{
    res.send('<h1>RESPONSE SENT</h1>');
});
app.get('/api', (req, res)=>{
    // res.send('<h1>API PAGE</h1>');
    //stringify our objects
    res.json({name: 'jose felippe'})
});
//listener
app.listen(port);
//feedback to see if the server is running!
console.log(`Listening on ${port}`)