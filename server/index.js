/*
    IT IS A STUB, NOT A PART OF APP
*/

const express = require("express");
const http = require("http");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./db.json");
const db = low(adapter);

const port = 3000;
const app = express();
const server = http.createServer(app);

app.use(express.json());

app.post('/login', (request, response) => {
    const user = db.get('user')
        .find({...request.body})
        .value();

    if (user) {
        response.json({...user});
    } else {
        response.send('Unauthorized', 401);
    }
    
});

server.listen(port, () => console.log(`Listening on port ${port}`));

