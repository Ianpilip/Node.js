var passport = require('passport');

exports.passport = function(router) {
	return require('./passport').passport(router, passport);
}

exports.facebook = function(router) {
	return require('./facebook').facebook(router, passport);
}

exports.google = function(router) {
	return require('./google').google(router, passport);
}