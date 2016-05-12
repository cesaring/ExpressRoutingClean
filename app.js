//brin in our dependencies
const app = require('express')();
const routes = require('./routes');

//connect all our routes to our application
app.use('/', routes);

//Turn on that server!
app.listen(3000, function(){
  console.log('App listening on port 3000');
});
