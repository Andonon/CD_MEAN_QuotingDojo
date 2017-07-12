const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname + '/static/')));
app.set('views', path.join(__dirname + '/views/'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    name: String, 
    age: Number
});

mongoose.model('User', UserSchema);
var User = mongoose.model('User');

app.get('/', function(req, res){
    User.find({}, function(err, users){
        console.log(users);
        console.log(users[0])
        if(err){
            console.log("There was an error with db...")
            res.render('index');
            }
        else {
            res.render('index', {users: users});
        }
    });
});

app.post('/users', function(req, res){
    console.log(req.body);
    const user = new User({name: req.body.name, age: req.body.age});
    user.save(function(err){
        if(err) {
            console.log('There was an error...');
        } 
        else { console.log('successfully added user...');
        }
        res.redirect('/');
        });   
    });

port = 8000;

app.listen(port, function () {
    console.log("Listen on port", port);
})