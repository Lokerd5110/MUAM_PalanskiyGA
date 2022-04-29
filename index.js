var express = require('express');
const res = require('express/lib/response');
var app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    res.render('main');
});

app.get('/wiki', function(req, res) {
    res.render('wiki');
});

app.get('/forum', function(req, res) {
    res.render('forum');
});

app.get('/wiki/:id', function (req, res) {
    res.render('article', {});
});

app.get('/forum/:id', function(req, res) {
    res.render('discussion', {});
});

app.listen('3000');