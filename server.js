/**
 * Created with JetBrains WebStorm.
 * User: Bhushan
 * Date: 5/17/14
 * Time: 4:03 PM
 * To change this template use File | Settings | File Templates.
 */

// modules =================================================
var express = require('express');
var app     = express();
var mongoose= require('mongoose');
var passport = require('passport');
var flash 	 = require('connect-flash');

// configuration ===========================================

// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
mongoose.connect(db.url); // connect to our mongoDB database (uncomment after you enter in your own credentials in config/db.js)

require('./config/passport')(passport); // pass passport for configuration

app.configure(function() {
//    app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
    app.use(express.logger('dev')); 					// log every request to the console
    app.use(express.bodyParser()); 						// have the ability to pull information from html in POST
//    app.use(express.methodOverride()); 					// have the ability to simulate DELETE and PUT

    app.use(express.cookieParser()); // read cookies (needed for auth)
    app.use(express.bodyParser()); // get information from html forms

    app.set('view engine', 'ejs'); // set up ejs for templating

    // required for passport
    app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session
});

// routes ==================================================
require('./app/routes')(app, passport); // configure our routes

// start app ===============================================
app.listen(port);										// startup our app at http://localhost:8080
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app

