const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port  = 3000;

app.get('/api/offers', (req, res) => {
    const resp = [
        {
            id: 1,
            data: 'sdaffds'
        }, {
            id: 1,
            data: 'sdaffds'
        }, {
            id: 1,
            data: 'sdaffds'
        }
    ]
    res.json(resp);
});

app.get('/api/getSyllabus', function(req, res) {
    var contents = fs.readFileSync("syllabus.json");
    res.send(JSON.parse(contents));
});

app.post('/book', (req, res) => {
    // We will be coding here
});

app.post('/*', (req, res) => {
    res.redirect('/');
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});





app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
