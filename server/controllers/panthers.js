var mongoose = require('mongoose');
var Panther = mongoose.model('Panther')

module.exports = {
  show: function(req, res){
    Panther.find({}, function(err, panthers) {
      // console.log(panthers)
      res.render('index', {panthers: panthers});
    })
  },
  one: function(req, res){
    Panther.find({_id: req.params.id}, function(err, panther) {
      // console.log(panther)
      res.render('one', {panther:panther});
    })
  },
  edit: function(req, res){
    Panther.find({_id: req.params.id}, function(err, panther) {
      // console.log(panther)
      res.render('edit', {panther:panther});
    })
  },
  create: function(req,res){
    // console.log("POST DATA", req.body);
    var panther = new Panther({name: req.body.name, color: req.body.color});
    panther.save(function(err) {
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully added a panther!');
    res.redirect('/');
        }
    })
  },
  update: function(req, res){
    Panther.update({_id: req.params.id},{name:req.body.name, color:req.body.color}, function(err) {
        if(err) {
          console.log('something went wrong');
        } else {
          console.log('successfully edited the panther!');
          res.redirect('/panthers/'+req.params.id);
        }
      })
  },
  destroy: function(req,res){
    Panther.remove({_id: req.params.id}, function(err){
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully destroyed a panther!');
        res.redirect('/');
        }
    })
  }
}
