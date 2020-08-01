const express = require('express');
//body-parser adds a functionality to the request called body, which has all the elements of the form carried by 'name=variablename'
const bodyParser = require('body-parser');

let app = express();
//we use middlewares to insert the bodyParse before the post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/assets', express.static(__dirname + '/public'))

const port = process.env.PORT || 8080;
//when we click submit on the form
app.post('/post', (req,res)=>{
    console.log(req.body);
    res.end();
})
app.listen(port);

console.log(`Listening on port ${port}`);