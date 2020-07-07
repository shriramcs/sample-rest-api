const express = require('express');
const path = require('path');
const fs = require('fs');
var serveStatic = require('serve-static');

const app = express();
app.use(serveStatic(path.join(__dirname, '')));
const port  = process.env.PORT || 3000;

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


app.get('/projects', function(req, res) {
    res.sendFile(path.join(__dirname + '/projects.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/me.html'));
});
app.get('/courses/html-css-javascript-dom', function(req, res) {
    res.sendFile(path.join(__dirname + '/courses/html-css-javascript-dom.html'));
});
app.get('/courses', function(req, res) {
    res.sendFile(path.join(__dirname + '/courses/courses.html'));
});

app.post('/*', (req, res) => {
    res.redirect('/');
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/courses/courses.html'));
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
