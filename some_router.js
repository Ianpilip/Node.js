var express = require('express');
var router = express.Router();

var path = require('path');

/*** START AUTH ***/

// Identifying path to the folder with all auth modules
var social_auth = path.join(__dirname, '../social_auth');

// Call a common module, that has references to other auth modules
var social_auth_common = require(path.normalize(social_auth + '/common'));

// Common passport config auth
social_auth_common.passport(router);

// Facebook auth
social_auth_common.facebook(router);

// Google auth
social_auth_common.google(router);

/*** END AUTH ***/

module.exports = router;
