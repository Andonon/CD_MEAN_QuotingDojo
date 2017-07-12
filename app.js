const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname + '/static/')));
app.set('views', path.join(__dirname + '/views/'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.Promise = global.Promise;

var QuoteSchema = new mongoose.Schema({
    name: String, 
    quote: String,
}, { timestamps: true });

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/quotes', function(req, res){
    console.log("Getting Quotes Page...")
    Quote.find({}, function(err, quotes){
        console.log(quotes);
        console.log(quotes[0])
        if(err){
            console.log("There was an error with db...")
            res.render('index');
            }
        else {
            res.render('quotes', {quotes: quotes});
        }
    });
})

app.post('/quotes', function(req, res){
    console.log(req.body);
    const quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err){
        if(err) {
            console.log('There was an error...');
        } 
        else { console.log('successfully added quote...');
        }
        res.redirect('/');
        });   
    });

port = 8000;

app.listen(port, function () {
    console.log("Listen on port", port);
})