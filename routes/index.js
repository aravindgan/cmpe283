var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});



router.get('/firstdata', function(req, res) {
    var db = req.db;
    var collection = db.get('collection');
    collection.find({},{},function(e,docs){
        res.render('firstdata', {
            "firstdata" : docs
        });
    });
});



module.exports = router;
