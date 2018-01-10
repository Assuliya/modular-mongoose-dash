var panthers = require('../controllers/panthers.js');

module.exports = function(app){
  app.get('/', function(req, res) {
    panthers.show(req, res)
  })

  app.get('/panthers/new', function(req, res) {
    res.render('new');
  })

  app.get('/panthers/:id', function(req, res) {
    panthers.one(req, res)
  })

  app.get('/panthers/edit/:id', function(req, res) {
    panthers.edit(req, res)
  })

  app.post('/panthers', function(req, res) {
    panthers.create(req, res)
  })

  app.post('/panthers/:id', function(req, res) {
    panthers.update(req, res)
  })

  app.post('/panthers/destroy/:id', function(req, res) {
    panthers.destroy(req, res)
  })
}
