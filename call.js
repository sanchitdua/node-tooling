var nforce = require('nforce'),
  tooling = require('nforce-tooling')(nforce),

var org = nforce.createConnection({
  clientId: '3MVG98XJQQAccJQdc_gqqwvazMbDwsa.A9JYR7AwIidRSVX7CRKKMbZxVQT0cPbjorYHv3aUb1Dy21Ad03GBD',
  clientSecret: '7598348138426012143',
  redirectUri: 'http://localhost:3000/oauth/_callback',
  apiVersion: 'v27.0',  // optional, defaults to current salesforce API version
  environment: 'production',  // optional, salesforce 'sandbox' or 'production', production default
  mode: 'multi', // optional, 'single' or 'multi' user mode, multi default
  plugins: ['tooling']
});
// ```

// Now we just need to authenticate and get our salesforce OAuth credentials. Here is one way to do this in multi-user mode...

// ```js
// multi user mode
// var oauth;
// org.authenticate({ username: 'my_test@gmail.com', password: 'mypassword'}, function(err, resp){
  // store the oauth object for this user
  // if(!err) oauth = resp;
// });
// ```

// ...or in single-user mode...

// ```js
// single-user mode
org.authenticate({ username: 'adlt@flexchecks.com', password: 'Dpfox1c3mvmV1CTczPN8QSln2XnnKzQqcW'}, function(err, resp){
  // the oauth object was stored in the connection object
  if(!err) console.log('Cached Token: ' + org.oauth.access_token)
});