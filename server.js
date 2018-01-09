var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/panthers');

var PantherSchema = new mongoose.Schema({
 name: String,
 color: String,
}, {timestamps: true });

mongoose.model('Panther', PantherSchema);
var Panther = mongoose.model('Panther')

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  Panther.find({}, function(err, panthers) {
    console.log(panthers)
    res.render('index', {panthers: panthers});
  })
})

app.get('/panthers/new', function(req, res) {
  res.render('new');
})

app.get('/panthers/:id', function(req, res) {
  // Panther.find({_id: id}, function(err, panthers) {
  //   console.log(panther)
    res.render('one');
  // })
})

app.get('/panthers/edit/:id', function(req, res) {
  // Panther.find({_id: :id}, function(err, panther) {
  //   console.log(panther)
    res.render('edit');
  // })
})

app.post('/panthers', function(req, res) {
    console.log("POST DATA", req.body);
    var panther = new Panther({name: req.body.name, color: req.body.color});
    panther.save(function(err) {
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully added a panther!');
    res.redirect('/');
        }
    })
})

app.post('/panthers/:id', function(req, res) {

})

app.post('/panthers/destroy/:id', function(req, res) {
  Panther.remove({_id: req.params.id}, function(err){
    if(err) {
      console.log('something went wrong');
    } else {
      console.log('successfully destroyed a panther!');
      res.redirect('/');
      }
  })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
