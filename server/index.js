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

app.get('/rooms', (request, response) => {
    let token;

    if (request.headers['authorization'].startsWith('Bearer ')) {
        token = request.headers['authorization'].slice(7, request.headers['authorization'].length);
    }

    if (token) {
        const user = db.get('user')
            .find({token})
            .value();

        if (user) {
            response.json({
                rooms: db.get('room')
                .value()
                .filter(room => room.user_id === user.id)
            })
        } else {
            response.send('Unauthorized', 401);
        }
    } else {
        response.send('Unauthorized', 401);
    }
    
});

app.get('/room/:id', (request, response) => {
    let token;

    if (request.headers['authorization'].startsWith('Bearer ')) {
        token = request.headers['authorization'].slice(7, request.headers['authorization'].length);
    }

    if (token) {
        const user = db.get('user')
            .find({token})
            .value();

        if (user) {
            let room = db.get('room')
            .find({id: request.params.id})
            .value();
            
            response.json({
                room
            });

            room = null;
        } else {
            response.send('Unauthorized', 401);
        }
    } else {
        response.send('Unauthorized', 401);
    }
    
});

app.get('/images/:img', function (request, response) {
    response.set('Content-Type', 'image/jpeg');
    response.sendFile(`${__dirname}/images/${request.params.img}`);
});

server.listen(port, () => console.log(`Listening on port ${port}`));

