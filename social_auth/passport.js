exports.passport = function(router, passport) {
	passport.serializeUser(function(user, cb) {
	  cb(null, user);
	});
	passport.deserializeUser(function(obj, cb) {
	  cb(null, obj);
	});
	router.use(passport.initialize());
	router.use(passport.session());
}