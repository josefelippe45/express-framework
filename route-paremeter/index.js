const express = require('express');

let app = express();
const port = process.env.PORT || 8080;
//routes.
app.get('/', (req, res)=>{
    res.send('<h1>HOME</h1>')
})
//id is like a placeholder
app.get('/post/:id', (req, res)=>{
    //sending dummy-data with the parameters
    res.send(`<p>Here is ${req.params.id}</p>`);
});
app.get('/post/:id/category/:categoryId', (req, res)=>{
    //sending dummy-data with the parameters
    res.send(`<p>Here is ${req.params.id}</p><p>Here is ${req.params.categoryId}</p>`);
})
app.listen(port);
console.log(`Listening on port ${port}`);