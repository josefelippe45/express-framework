//middlewares are functionality that can be plugged in on express using before the requests are executed
const express = require('express');

let app = express();
const port = process.env.PORT || 8080;
//every time somebody asks for /css express, behind the scenes, will make that request for us and is going to handle
//everything that has to do with files. dirname is the directory
app.use('/css', express.static(__dirname + '/public'));
//middleware. next is provide by express. it helps by letting the app knows when the next request will happen
app.use((req, res, next) => {
    console.log('MIDDLEWARE');
    next();
});

app.get('/', (req, res) => {
    res.send(`
     <!doctype html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport"
                    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="/css/style.css">
                <title>Document</title>
            </head>
            <body>
                <h1>Hello</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Assumenda hic libero maxime necessitatibus, quaerat tempora
                    temporibus unde ut vel velit. Maiores molestiae necessitatibus
                    odio quia quod sequi, ut vitae voluptate.
                </p>
            </body>
        </html>
    `)});

    app.listen(port);
    console.log(`Listening on port ${port}`);