const routes = require('express').Router();
const models = require('./models');
const cars = require('./cars');
const data = require('../data.json');


// models.param('modelId', function (req, res, next, value) {
//
//   var isId = function(value) {
//     return value.id===req.param.modelId* 1;
//   };
//
//   const model = data.models.filter(isId);
//
//   if(model.length>0) {
//       req['model'] = model;
//       next();
//   } else {
//       res.status(404).send('Invalid model ID');
//   }
// });

routes.use('/models', models);
routes.use('/cars', cars);

routes.get('/', function(req, res) {
  res.status(200).json({message:'Connected!'});
});

module.exports = routes;
