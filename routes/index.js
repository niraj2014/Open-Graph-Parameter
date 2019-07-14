var express = require('express');
var router = express.Router();
var path = require('path');

// Members Page
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('scrap', { title: 'Scrap' });
});

router.get('/og', ensureAuthenticated, function(req, res, next) {
 // res.render('home', { title: 'Home' });
  res.sendFile(path.join(__dirname, '../public/ogparam', 'scrap_test.html'));
});

function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/users/login');

}

module.exports = router;
