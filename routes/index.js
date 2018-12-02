var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs) {
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize))
    }
    res.render('shop/index', { 
      title: 'Browse the Art of Peche Barone!', products: productChunks });
  });
});



// router.get('/', function (req, res, next) {
//   res.render('index', { })
// });


module.exports = router;
