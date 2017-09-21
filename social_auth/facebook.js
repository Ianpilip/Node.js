exports.facebook = function(router, passport) {
	var Strategy = require('passport-facebook').Strategy;
	passport.use(new Strategy({
	    clientID: 'CLIENT_ID',
	    clientSecret: 'CLIENT_SECRET',
	    callbackURL: 'http://localhost:3000/auth/facebook/callback'
	  },
	  function(accessToken, refreshToken, profile, cb) {
	    return cb(null, profile);
	  })
	);

	router.get('/auth/facebook', function(req, res, next) {
		passport.authenticate('facebook')(req, res, next);
	});
	 
	router.get('/auth/facebook/callback',
		passport.authenticate('facebook', { failureRedirect: '/auth/save' }),
		function(req, res) {
			req.session.save(function (err) {
				if (err) {
					return next(err);
				}
				res.redirect('/');
			});
	});
}
