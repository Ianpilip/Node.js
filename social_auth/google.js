exports.google = function(router, passport) {
  var Strategy = require( 'passport-google-oauth2' ).Strategy;

  passport.use(new Strategy({
      clientID:     'CLIENT_ID',
      clientSecret: 'CLIENT_SECRET',
      callbackURL: 'http://localhost:3000/auth/google/callback',
      passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
        return done(null, profile);
      });
    }
  ));

  router.get('/auth/google', passport.authenticate('google', { scope: [ 'email', 'profile' ] } ));

  router.get('/auth/google/callback', 
      	passport.authenticate( 'google', { 
      		successRedirect: '/',
      		failureRedirect: '/auth/save',
      		scope: [ 'email', 'profile' ]
  		}),
  		function(req, res) {
  			console.log(req);
  });
}